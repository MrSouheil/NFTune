import React from 'react'
import Text from './basic/text/Text'
import Sheet from './basic/sheet/Sheet'
import Grid from './basic/grid/Grid'
import Cards from './Profiles/Cards'
import Playing from './NowPlaying/Playing'
import ListCard from './AllList/ListCard'
import Cards_Uploaded from './Profiles/Cards_Uploaded'
import useLogin from '../hooks/useLogin'
const MyNfts = () => {
  useLogin();
  return (
    <section className="w-screen relative h-fit mb-10">
        <Sheet>
            <Text type={'title'} className={'text-white mx-auto w-fit mb-[20px]'}>Welcome to your profile!</Text>
            <Grid className={'gap-[20px] mb-[20px]'} lg='3' md='2' def='1'>
                <Cards title='Wallet Address'><Text type={'text'} className='text-white'>0x2afaea8db07d7d97f99b68d67e173f</Text></Cards>
                <Cards title='Number Of NFTS'><div className='flex gap-5'><div className='flex gap-[20px] items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" style={{fill:'white'}} className='w-[24px]' viewBox="0 0 512 512"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg><Text type={'text'} className='text-white'>20</Text></div>      <div className='flex gap-[20px] items-center justify-center'><svg className='w-[24px]'  style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg><Text type={'text'} className='text-white'>52</Text></div></div></Cards>
                <Cards title='Total Value'><div className='flex gap-5'><div className='flex gap-[20px] items-center justify-center'><svg className='w-[24px]' style={{fill:'green'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg><Text type={'text'} className='text-white'>3 eth</Text></div>      <div className='flex gap-[20px] items-center justify-center'><svg className='w-[24px]' style={{fill:'red'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg><Text type={'text'} className='text-white'>5 eth</Text></div></div></Cards>
                <Cards title='Total Balance'><Text type={'text'} className={'text-white'}>20 ETH  </Text></Cards>
            </Grid>
            <Text type={'title'} className={'text-white mx-auto w-fit mb-[20px]'}>My playlist</Text>
            <Text type={'subTitle'} className={'text-white mb-[20px]'}>Now Playing</Text>
            <Playing></Playing>
            <Text type={'subTitle'} className={'text-white mb-5'}View All List></Text>
            <Grid className='gap-y-[20px] mb-[20px]' lg={'3'} md='2' def='1'>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
              <ListCard NFT='Escapism' Artist='Unknown' Duration='2:00'></ListCard>
            </Grid>
            <Text className='text-white mb-[20px]' type='subTitle'>Uploaded NFTs</Text>
            <div className='flex gap-[250px] items-center overflow-scroll'>
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
            </div>
            
        </Sheet>
    </section>
  )
}

export default MyNfts