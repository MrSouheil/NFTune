import React from 'react'
import Text from '../basic/text/Text';

const Cards_Uploaded = (props) => {
    const {
        image,
        NftName='unknown',
        duration='2:00',
        price='5',
        downloads=200
    }=props;
  return (
    <div>
        <div className='rounded-[10px] bg-[#D9D9D9] aspect-square border-hidden w-[81px] mb-[10px]'>
            <img  className='w-full h-full rounded-[10px]' src={image}></img>
        </div>
        <Text className='w-max' type='text'>NFT name: {NftName}</Text>
        <Text type='text' className='w-max'>Duration: {duration}</Text>
        <div className='flex gap-[20px] w-max'><div className='flex gap-[5px]'><svg className='w-[12px]' style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg><Text type='text'>{price}</Text></div><div className='flex gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" style={{fill:'white'}} className='w-[12px]' viewBox="0 0 512 512"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg><Text type='text'>{downloads}</Text></div></div>

    </div>
  )
}

export default Cards_Uploaded