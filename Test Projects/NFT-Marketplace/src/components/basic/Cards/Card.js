import React from 'react'
import profile1 from '../../../assets/profile1.png';
import profile2 from '../../../assets/profile2.png';
import profile3 from '../../../assets/profile3.png';
import Button from '../button/Button';
import Text from '../text/Text';
import MarketplaceJSON from '../../../Marketplace.json'

const Card = (props) => {
    const {disabled,price='unknown',NftName='unknown',Artist='unknown',Duration='unknown',image='https://tse2.mm.bing.net/th?id=OIP.kRSxqqns41UFBXWO3_q-iQHaHa&pid=Api&P=0'}=props
    async function buyNFT(tokenId) {
        try {
            const ethers = require("ethers");
            //After adding Hardhat network to metamask, this code will get providers and signers
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
    
            //Pull the deployed contract instance
            let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);
            const salePrice = ethers.utils.parseUnits(price, 'ether')
            alert("Buying the NFT... Please Wait (Upto 5 mins)")
            //run the executeSale function
            let transaction = await contract.executeSale(tokenId, {value:salePrice});
            await transaction.wait();
    
            alert('You successfully bought the NFT!');
            
        }
        catch(e) {
            alert("Upload Error"+e)
        }
    }
  return (
    <div className={`relative overflow-hidden rounded-[20px] ${props.className} drop-shadow-[-16px_4px_9px_rgba(0,0,0,0.25)] h-[453px] bg-[#EEEEEE66]`}>
        <img onError={(event) => {
    event.target.src = "https://tse2.mm.bing.net/th?id=OIP.kRSxqqns41UFBXWO3_q-iQHaHa&pid=Api&P=0"; // Replace with the path to your placeholder image
  }} className='h-full w-full' src={image} alt={'token image'}></img>
        <div  className={`absolute bottom-0 h-[35%] ${disabled?'bg-[#ebebea40] hover:bg-[rgb(255 255 255 / 60%)':'bg-[rgb(255 255 255 / 60%)]'} hover:bg-[rgb(255 255 255 / 60%)] w-full rounded-[20px] bg-white/[.6]`}>
            <div className='w-[90%] mx-auto h-full relative'>
                <div className='absolute -translate-y-1/2 flex'>
                    <img alt={'profile'} src={profile1}></img>
                    <img alt={'profile'} src={profile2}></img>
                    <img alt={'profile'} src={profile3}></img>
                </div>
                <div className='flex justify-between h-full items-center'>
                    <div>
                        <Text type={'text'}>NFT: {NftName}</Text>
                        <Text type={'text'}>Description: {Artist}</Text>
                        <Text type={'text'}>Duration: {Duration}</Text>
                    </div>
                    <div className='flex flex-col gap-[1rem]'>
                        <Button onClick={()=>{buyNFT(props.tokenId)}} bgColor={`${disabled?'#ACACAC':'#2EE09A'}`}>Buy Now</Button>
                        <Button bgColor={`${disabled?'#ACACAC':'#426AF2'}`} >{price}</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card