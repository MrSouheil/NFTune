import React from 'react'
import Sheet from './basic/sheet/Sheet'
import Text from './basic/text/Text'

const AboutUs = () => {
  return (
    <Sheet>
        <div className="absolute top-[200px]">
                <Text className={' leading-[70px]'} type={'title'}>About us</Text>
                <Text className={'mb-[20px]'} type={'subTitle'}>Get to know more about us!!</Text>
                <Text className={'max-w-[903px] mb-[20px]'} type={'text'}>Welcome to our website, the premier online marketplace for buying and selling song NFTs. We are a team of music enthusiasts who share a passion for rare and unique music-related digital assets. Our platform was created to provide a space where music lovers, collectors, and artists can come together to buy, sell, and trade song NFTs.</Text>
                <Text className={'max-w-[903px] mb-[20px]'} type={'text'}>At our website, we believe that music has the power to connect people from all walks of life. That's why we strive to create a community of like-minded individuals who appreciate the artistry and creativity behind every song. We understand that music has the ability to evoke emotions, inspire change, and bring people together, and we are committed to providing a platform that allows for the discovery of new and exciting music-related NFTs</Text>
        </div>
    </Sheet>
  )
}

export default AboutUs