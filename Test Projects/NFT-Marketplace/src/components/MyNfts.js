import React from 'react'
import Text from './basic/text/Text'
import Sheet from './basic/sheet/Sheet'
import Grid from './basic/grid/Grid'
import Cards from './Profiles/Cards'
import Playing from './NowPlaying/Playing'
import ListCard from './AllList/ListCard'
import useLogin from '../hooks/useLogin'
import { useLocation, useParams } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

const MyNfts = () => {
  useLogin();

  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");

  //This function will retrieve NFT data from the smart contract
  async function getNFTData(tokenId) {
    const ethers = require("ethers");
    let sumPrice = 0;
    //After adding Goerli network to metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();

    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)

    //create an NFT Token (NFT Object in smart contract)
    let transaction = await contract.getMyNFTs()

    /*
    * Below function takes the metadata from tokenURI and the data returned by getMyNFTs() contract function
    * and creates an object of information that is to be displayed
    */

    //TokenURI is the link of the NFT with it's metadata attached. Serves to get and display the requested NFT
    const items = await Promise.all(transaction.map(async i => {
      const tokenURI = await contract.tokenURI(i.tokenId);
      console.log("tokenURI", tokenURI);
      let meta = await axios.get(tokenURI);   //Pulling the metadata of the NFT
      console.log("meta", meta);
      meta = meta.data;                       //Taking the data and giving it back in another form
      console.log("meta.data", meta.data);

      //We give 'item' which is the actual NFT object it's data and return it
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),        //Unique
        seller: i.seller,
        owner: i.owner,
        image: meta.image,
        name: meta.name,
        description: meta.description,
        duration: meta.duration,
      }
      sumPrice += Number(price);
      return item;
    }))

    //Retrieve NFT transactions, bought and sold
    async function getNFTTransactionEvents() {
      const filter = contract.filters.Transfer();
      const events = await contract.queryFilter(filter);

      return events;
    }

    // Calculate the counts of NFTs bought and sold
    async function calculateNFTCounts() {
      const events = await getNFTTransactionEvents();

      // Filter events for NFT purchases and sales
      const nftPurchases = events.filter((event) => event.args.to === address);
      const nftSales = events.filter((event) => event.args.from === address);

      const numNFTsBought = nftPurchases.length;

      return numNFTsBought;
    }

    //Logging the NFTs bought and sold still in development
    calculateNFTCounts()
      .then((result) => {
        console.log('Number of NFTs bought:', result.numNFTsBought);
        console.log('Number of NFTs sold:', result.numNFTsSold);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    updateData(items);        //Updates the NFTs
    updateFetched(true);      //Tells the code that the fetch was successfull
    updateAddress(addr);      //Updates the user address
    updateTotalPrice(sumPrice.toPrecision(3));
  }

  const params = useParams();
  const tokenId = params.tokenId;
  const [active,setActive]=useState(0);
  const [datas,setData]=useState({image:'',description:'',audio:'',name:''});
  //If fetching wasn't successfull, retry
  if (!dataFetched)
    getNFTData(tokenId);

  
    const saveData=(Data)=>{
      setData(Data)
      
    }
  return (
    <section className="w-screen relative h-fit mb-10">
      <Sheet>
        <Text type={'title'} className={'text-white mx-auto w-fit mb-[20px]'}>Welcome to your profile!</Text>
        <Grid className={'gap-[20px] mb-[20px]'} lg='3' md='2' def='1'>
          <Cards title='Wallet Address'><Text type={'text'} className='text-white'>{address}</Text></Cards>
          <Cards title='Number Of NFTS'><div className='flex gap-[20px] items-center'><svg className='w-[24px]' style={{ fill: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg><Text type={'text'} className='text-white'>{data.length}</Text></div></Cards>
          <Cards title='Total Value'><div className='flex gap-5'><div className='flex gap-[20px] items-center justify-center'><svg className='w-[24px]' style={{ fill: 'green' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg><Text type={'text'} className='text-white'>{totalPrice} ETH</Text></div></div></Cards>
          <Cards title='Total Balance'><Text type={'text'} className={'text-white'}>{totalPrice} ETH </Text></Cards>
        </Grid>
        <Text type={'title'} className={'text-white mx-auto w-fit mb-[20px]'}>My playlist</Text>
        <Text type={'subTitle'} className={'text-white mb-[20px]'}>Now Playing</Text>
        <Playing data={datas}></Playing>
        <Text type={'subTitle'} className={'text-white mb-5'} View All List></Text>
        <Grid className='gap-y-[20px] gap-x-[20px] mb-[20px]' lg={'3'} md='2' def='1'>
          {data.map((value, index) => {
            return <ListCard onDataChanged={saveData} active={index===active?'true':''} className={`${active}`} onClick={()=>{setActive(index);}} data={value} key={index}></ListCard>;
          })}
        </Grid>

        {/* <Text className='text-white mb-[20px]' type='subTitle'>Uploaded NFTs</Text> */}
        {/* <div className='flex gap-[250px] items-center overflow-scroll'>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
          <Cards_Uploaded></Cards_Uploaded>
        </div> */}

      </Sheet>
    </section>
  )
}

export default MyNfts