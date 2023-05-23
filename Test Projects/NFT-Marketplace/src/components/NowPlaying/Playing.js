import React,{useState} from 'react'
import Text from '../basic/text/Text'
import next from '../../assets/controls/skip-forward.png';
const Playing = (props) => {
    const[url,setUrl]=useState('/pause.png');
  return (
    <div className='w-full bg-[#EEEEEE66] rounded-[20px] h-[267px] mb-[20px]'>
        <div className='h-full w-[85%] mx-auto py-[20px] flex flex-column justify-between'>
            <div className='w-fit mx-auto'>
                <Text type={'subTitle'} className='text-[#15265C] w-fit mx-auto'>{props.data.name?props.data.name:'Music Name'}</Text>
                <Text type={'text'} className={'text-white w-fit mx-auto'}>{props.data.description?props.data.description:'Description'}</Text>
            </div>
            <div>
                <div className='w-full h-[1px] border-[1px] border-solid border-[#D9D9D9] mb-[10px]'></div>
                <div className='w-fit mx-auto flex gap-5 max-w-[42px] justify-center  items-center'>
                    <img onClick={()=>{props.onPrev()}} className='-scale-x-100 h-min max-w-[34px]'  src={next} alt='next'></img>
                    <img onClick={()=>{props.onPause();if(url==='/play.png'){setUrl('/pause.png')}else{setUrl('/play.png')}}} className='max-w-[51px]' src={url} alt='pause'></img>
                    <img onClick={()=>{props.onNext()}} className='max-w-[34px] h-min max-w-[42px]' src={next} alt='next'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playing