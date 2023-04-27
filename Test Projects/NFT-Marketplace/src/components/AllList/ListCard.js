import React from 'react';
import Text from '../basic/text/Text';

const ListCard = (props) => {
  return (
    <div className='flex gap-[20px] w-max'>
        <div className='flex flex-col gap-[5px] items-center justify-center h-[full]'>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
        </div>
        <div className='rounded-[10px] bg-[#D9D9D9] aspect-square border-hidden '>
            <img className='w-full h-full rounded-[10px]' ></img>
        </div>
        <div>
            <Text type='text' className='text-white w-max'><strong>Nft Name:</strong> {props.NFT?props.NFT:'unknown'}</Text>
            <Text type='text' className='text-white w-max'><strong>Artist:</strong> {props.Artist?props.Artist:'unknown'}</Text>
            <Text type='text' className='text-white w-max'><strong>Duration:</strong> {props.Duration?props.Duration:'unknown'}</Text>
        </div>
    </div>
  )
}

export default ListCard