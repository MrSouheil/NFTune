import React, { useState,useEffect } from 'react'
import Sheet from './basic/sheet/Sheet';
import Text from './basic/text/Text';
import Button from '../components/basic/button/Button'
import useLogin from '../hooks/useLogin';

import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import Marketplace from '../Marketplace.json';
import { useLocation } from "react-router";
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
   
const UploadNft = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  const [state1, setState1] = useState('Choose File');
  const [state2, setState2] = useState('Choose File');
  const [formParams, updateFormParams] = useState({ name: '', description: '', price: '' });
  const [fileURL, setFileURL] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [audioDuration, setAudioDuration] = useState(null);
  const ethers = require("ethers");
  const [message, updateMessage] = useState('');
  const location = useLocation();
  // const handleFile = (file, setState) => {
  //   file.click();
  //   file.addEventListener('change', function () {
  //     file.files.length > 0 ? setState(file.files[0].name) : setState('Choose File')
  //   });
  // }
  
  useLogin();

  //This function uploads the NFT image to IPFS, our decentralized online database
  async function OnChangeFile(e) {
    var file = e.target.files[0];
    //check for file extension
    try {
      //upload the image file to IPFS, only the image
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL)
        setFileURL(response.pinataURL);                               //Sets the 'FileURL' for later retrieval
      }
    }
    catch (e) {
      console.log("Error during file upload", e);
    }
  }

  //This function uploads the NFT audio to database
  async function OnChangeMusicFile(e) {
    var file = e.target.files[0];
    // Check for file extension
  
    try {
      const audio = new Audio();
      audio.addEventListener('loadedmetadata', function() {
        const audioDuration = audio.duration;
        setAudioDuration(audioDuration);
      });
      audio.src = URL.createObjectURL(file);
      audio.load();
  
      // Upload the audio file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded audio to Pinata: ", response.pinataURL)
        setAudioURL(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during audio upload", e);
    }
  }
  
  async function uploadMetadataToIPFS() {
    const { name, description, price } = formParams;
    if (!name || !description || !price || !fileURL || !audioURL || !audioDuration) {
      return;
    }
  
    const nftJSON = {
      name,
      description,
      price,
      image: fileURL,
      audio: audioURL,
      duration: audioDuration
    };
  
    try {
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("Error uploading JSON metadata:", e);
    }
  }
  

  //This function lists the NFT on the blockchain, handles payments and upload
  async function listNFT(e) {
    e.preventDefault();

    //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      updateMessage("Please wait.. uploading (upto 5 mins)")          //Blockchain might be busy, usually takes a few seconds

      //Pull the deployed contract instance
      let contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer)

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, 'ether')
      let listingPrice = await contract.getListPrice()
      listingPrice = listingPrice.toString()

      //actually create the NFT to be listed
      let transaction = await contract.createToken(metadataURL, price, { value: listingPrice })
      await transaction.wait()

      alert("Successfully listed your NFT!");
      updateMessage("");
      updateFormParams({ name: '', description: '', price: '' });         //Clears the upload form
      window.location.replace("/")
    }
    catch (e) {
      alert("Upload error" + e)
    }
  }

  return (
    <Sheet>
      <div className='rounded-[20px] bg-[#EEEEEE66] relative mb-10 wow bounceIn'>
        <div className='w-[90%] mx-auto'>
          <form>
            <Text type={'title'} className={'w-fit mb-10 pt-10 mx-auto text-[#15265C]'}>Upload your NFT to the marketplace</Text>
            <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>NFT Name</Text>
            <input
              type={'text'}
              className='bg-[#D9D9D9] opacity-30 rounded-[18px] text-white w-full pl-[15px] mb-[20px] py-[10px]'
              placeholder='Name'
              onChange={(e) => updateFormParams({ ...formParams, name: e.target.value })}
              value={formParams.name}
            />
            <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>NFT Description</Text>
            <textarea
              cols='30'
              rows={'5'}
              className='bg-[#D9D9D9] opacity-30 rounded-[18px] text-white w-full pl-[15px] mb-[20px]'
              placeholder='Description'
              onChange={(e) => updateFormParams({ ...formParams, description: e.target.value })}
              value={formParams.description}
            ></textarea>
            <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>Price (ETH)</Text>
            <input
              type={'number'}
              min={'0.001'}
              className='bg-[#D9D9D9] opacity-30 rounded-[18px] text-white w-full pl-[15px] mb-[20px] py-[10px]'
              placeholder='min price 0.001 eth'
              onChange={(e) => updateFormParams({ ...formParams, price: e.target.value })}
              value={formParams.price}
            />
            <div className='flex gap-40 mb-10'>
              <div>
                <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>Upload Image</Text>
                {/* <div className='flex'><Button onClick={() => { handleFile(document.getElementById('input'), setState1) }} onChange={OnChangeFile}>Choose File</Button><input type={'file'} id={'input'} className='hidden'></input><Text type={'text'}>{state1}</Text></div> */}
                <input type={"file"} accept="video/*|image/*" onChange={OnChangeFile}></input>
              </div>
              <div><Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>Upload Audio</Text>
                {/* <div className='flex'><Button onClick={() => { handleFile(document.getElementById('input1'), setState2) }} onChange={OnChangeMusicFile}>Choose File</Button><input type={'file'} id={'input1'} className='hidden'></input><Text type={'text'}>{state2}</Text></div> */}
                <input type={"file"} accept="audio/*" onChange={OnChangeMusicFile}></input>
              </div>
            </div>
            <div className='w-full flex justify-center pb-10'><Button padding={'py-[7px] px-20'} type={'submit'} onClick={listNFT}>Save NFT</Button></div>
          </form>
        </div>
      </div>
    </Sheet>
  )
}

export default UploadNft