import React, { useEffect } from 'react'
import Sheet from './basic/sheet/Sheet'
import Text from './basic/text/Text'
import Background from '../assets/abt-us-footage.png'
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

const AboutUs = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <Sheet>
      <div className='relative grid grid-cols-2'>
        <div className='wow fadeInLeft'>
          <Text className={'text-white leading-[40px]'} type={'title'}>About us</Text>
          <Text className={'mb-[20px] text-white'} type={'subTitle'}>Get to know more about us!!</Text>
          <Text className={'max-w-[808px] mb-[20px]'} type={'text'}>Welcome to our website, the premier online marketplace for buying and selling song NFTs. We are a team of music enthusiasts who share a passion for rare and unique music-related digital assets. Our platform was created to provide a space where music lovers, collectors, and artists can come together to buy, sell, and trade song NFTs.</Text>
          <Text className={'max-w-[808px] mb-[20px]'} type={'text'}>At our website, we believe that music has the power to connect people from all walks of life. That's why we strive to create a community of like-minded individuals who appreciate the artistry and creativity behind every song. We understand that music has the ability to evoke emotions, inspire change, and bring people together, and we are committed to providing a platform that allows for the discovery of new and exciting music-related NFTs</Text>
        </div>
        <div className='wow fadeInRight'>
          <img className='w-full h-full' src={Background} alt={'Mobile Image'}></img>
        </div>
      </div>
    </Sheet>
  )
}

export default AboutUs
