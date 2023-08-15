import React,{useEffect} from 'react';
import Text from '../basic/text/Text';

const ListCard = (data) => {
  useEffect(()=>{
    if(data.active){
      console.log(data.data)
      data.onDataChanged({audio:data.data.audio,image:data.data.image,name:data.data.name,description:data.data.description,duration:data.data.duration});
    }
  },[data.active])
  
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
    
    <div onClick={data.onClick} className={`flex items-center gap-[20px]  hover:bg-[#ffffff7d] ${data.active?'bg-[#ffffff9d]':'max-md:bg-[#ffffff2d] '} rounded-[20px] w-full py-[13px]  w-full px-[16px] transition-all ease-in ${data.className}`}>
        <div className='flex flex-col gap-[3px] md:gap-[5px] items-center justify-center h-[full]  '>
            <div className='w-[15px] md:w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[15px] md:w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[15px] md:w-[25px] h-[1px] border border-solid border-white'></div>
            <div className='w-[15px] md:w-[25px] h-[1px] border border-solid border-white'></div>
        </div>
        <div className='rounded-[10px]  w-[50px] h-[50px] md:h-[80px]  md:w-[80px] bg-[#D9D9D9] aspect-square border-hidden '>
            <img className='w-full md:h-full h-auto rounded-[10px] object-cover' src={data.data.image?data.data.image:'https://tse2.mm.bing.net/th?id=OIP.kRSxqqns41UFBXWO3_q-iQHaHa&pid=Api&P=0'}></img>
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