import React from "react";
import Sheet from "./basic/sheet/Sheet";
import Text from "./basic/text/Text";
import mobile from '../assets/mobile.png'
import metamask from '../assets/metamask.png'


const Homepage = () =>{
    return(
        
        <section className="w-screen relative h-full">
            <div className="absolute right-0 bottom-0"><img className="max-w-[44rem]" src={mobile}></img></div>
            <Sheet className=''>
                <div className="absolute top-[150px]">
                <Text className={'max-w-[943px] leading-[70px]'} type={'title'}>Discover,Collect,Buy and sell EXTRAORDINARY NFTsongs!</Text>
                <Text className={'mb-[20px]'} type={'subTitle'}>Buy NFT songs and make it yours for eternity</Text>
                <Text className={'max-w-[639px]'} type={'text'}>A website for buying NFT songs where users can purchase unique, non-fungible tokens (NFTs) that represent ownership rights to specific songs or pieces of music.  </Text>
                </div>
                <div className="absolute bottom-[50px]">
                    <Text type={'text'}>powered by</Text>
                    <img src={metamask} alt='Metamask-Logo'></img>
                </div>
            </Sheet>
                
        </section>
       
    )
}
export default Homepage;