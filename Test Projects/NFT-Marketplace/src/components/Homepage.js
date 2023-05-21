import React,{useEffect} from "react";
import Sheet from "./basic/sheet/Sheet";
import Text from "./basic/text/Text";
import mobile from '../assets/mobile.png'
import metamask from '../assets/metamask.png'
import Button from "./basic/button/Button";
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
const Homepage = () =>{
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return(
        <>
        
        <section className="w-screen relative h-fit mb-10">
            
            
            <Sheet className=''>
                <div className="grid grid-cols-2 items-center">
                <div className="align-self-start wow fadeInLeft">
                <div className="">
                <Text className={'max-w-[509px] leading-[40px] text-white'} type={'title'}>Discover,Collect,Buy and sell EXTRAORDINARY NFTsongs!</Text>
                <Text className={'mb-[10px] text-white'} type={'subTitle'}>Buy NFT songs and make it yours for eternity</Text>
                <Text className={'max-w-[453px] mb-[30px]'} type={'text'}>A website for buying NFT songs where users can purchase unique, non-fungible tokens (NFTs) that represent ownership rights to specific songs or pieces of music.  </Text>
                <div className="flex gap-x-[3.3125rem] items-center mb-[50px]">
                    <Link to='/Explore'><Button >Explore</Button></Link> 
                    <Link className="text-decoration-none" to="/Explore"><Text className={'text-white'} type={'button'}>learn more</Text></Link>       
                </div>
                <div className="flex gap-[70px]">
                    <div className="flex items-center justify-center flex-col">
                        <Text type={'data'}>100k</Text>
                        <Text type={'text'}>Total Songs</Text>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <Text type={'data'}>40k</Text>
                        <Text type={'text'}>Transactions</Text>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <Text type={'data'}>32k</Text>
                        <Text type={'text'}>Users</Text>
                    </div>
                </div>
                </div>
                </div>
                <img className="max-w-[37rem] wow fadeInRight" src={mobile}></img>
                </div>
                <div >
                    <Text type={'text'}>powered by</Text>
                    <img src={metamask} alt='Metamask-Logo'></img>
                </div>
            </Sheet>
            
        </section>
        </>
       
    )
}
export default Homepage;