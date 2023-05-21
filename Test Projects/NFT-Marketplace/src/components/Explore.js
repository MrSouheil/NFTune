import React, { useState } from 'react';
import Card from './basic/Cards/Card';
import Sheet from './basic/sheet/Sheet';
import Text from './basic/text/Text';
import Grid from './basic/grid/Grid';
import useLogin from '../hooks/useLogin';

import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";

const Explore = () => {
  const [data, updateData] = useState(null);
  const [dataFetched, updateFetched] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  useLogin();
  
  //This function fetches all NFTs on our blockchain and makes them ready to display
  async function getAllNFTs() {
    const ethers = require("ethers");
    //After adding Goerli network to metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    let transaction = await contract.getAllNFTs()

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(transaction.map(async i => {
      const tokenURI = await contract.tokenURI(i.tokenId);
      let meta = await axios.get(tokenURI);
      meta = meta.data;

      //We give 'item' which is the actual NFT object it's data and return it
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
      let item = {
        price,
        tokenId: i.tokenId.toNumber(), //Unique
        seller: i.seller,
        owner: i.owner,
        image: meta.image,
        audio: meta.audio,
        name: meta.name,
        description: meta.description,
      }
      return item;
    }))

    updateFetched(true);            //Tells the code that the fetch was successfull
    updateData(items);              //Updates the NFTs
  }

  //If fetching wasn't successfull, retry
  if (!dataFetched)
    getAllNFTs();

  return (
    <section className='relative'>
      <Sheet>
        <Text type={'title'} className={'text-white mx-auto w-fit '}>Exclusive this week!</Text>
        <Text className={'w-fit text-white text-center mx-auto mb-5'} type={'subTitle'}>Check now the top trending NFT songs for this week!<br />Discover a new way to own and experience music with our exclusive NFT songs</Text>
        <Grid className='gap-20'>
    {data&&data.slice(0, 3).map((item, index) => {
    return (
      <Card
        disabled={index % 2 === 0 ? 'true' : ''}
        className={index % 2 === 0 ? 'w-[373px] h-[434px] place-self-center' : 'h-[556px] place-self-center'}
      ></Card>
    );
  })}
  <Card disabled='true' className='w-[373px] h-[434px] place-self-center'></Card>
  <Card className='h-[556px]'></Card>
  <Card disabled='true' className='w-[373px] h-[434px] place-self-center'></Card>
</Grid>

        <Text type={'title'} className={'text-white mx-auto w-fit  pt-20 '}>Explore our NFT collection!</Text>
        <Text className={'w-fit text-white text-center mx-auto mb-[20px]'} type={'subTitle'}>Discover rare recordings, limited-edition merchandise, <br />exclusive digital artwork, and concert experiences.</Text>
        <div className='relative rounded-[20px] w-[300px] mx-auto mb-20'><input className='w-full h-full rounded-[20px] bg-[#EEEEEE66] py-[10px] pl-[36px]' placeholder='Search'></input></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 relative mb-20'>
          <Card></Card>
          <Card></Card>
          <Card ></Card>
          <Card></Card>
          <Card></Card>
          <Card ></Card>
          {!loadMore ? <div onClick={() => { setLoadMore(true) }} className='lg:col-span-3 md:col-span-2 flex flex-col gap-[5px] justify-center items-center'>
            <div className='flex gap-[20px]'><div className='w-[15px] h-[15px] rounded-[50%] bg-[#e4e7f1]'></div><div className='w-[15px] h-[15px] rounded-[50%] bg-[#e4e7f1]'></div><div className='w-[15px] h-[15px] rounded-[50%] bg-[#e4e7f1]'></div> </div>
            <Text type='text' >Load More</Text>
          </div> :
            <>
              <Card></Card>
              <Card></Card>
              <Card ></Card>
              <Card></Card>
              <Card></Card>
              <Card ></Card>
            </>
          }
        </div>
      </Sheet>
    </section>
  )
}

export default Explore