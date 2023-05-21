import React from 'react';
import Text from '../basic/text/Text';

const ListCard = (data) => {
  function formatDuration(duration) {
    if (!duration) {
      return '0:00';
    }
  
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return formattedDuration;
  }  
  return (
    <div className='flex gap-[20px] w-max'>
        <div className='flex flex-col gap-[5px] items-center justify-center h-[full]'>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[25px] h-[1px] border border-solid border-white'></div>
        </div>
        <div className='rounded-[10px] w-[80px] bg-[#D9D9D9] aspect-square border-hidden '>
            <img className='w-full h-full rounded-[10px] object-cover' src={data.data.image}></img>
        </div>
        <div>
            <Text type='text' className='text-white w-max'><strong>Nft Name:</strong> {data.data.name?data.data.name:'unknown'}</Text>
            <Text type='text' className='text-white w-max'><strong>Artist:</strong> {data.data.description?data.data.description:'unknown'}</Text>
            <Text type='text' className='text-white w-max'><strong>Duration:</strong> {formatDuration(data.data.duration?data.data.duration:'0:00')}</Text>
        </div>
    </div>
  )
}

export default ListCard