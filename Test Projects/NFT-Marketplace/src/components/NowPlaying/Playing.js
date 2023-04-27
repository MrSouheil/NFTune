import React from 'react'
import Text from '../basic/text/Text'
import pause from '../../assets/controls/pause-circle.png';
import next from '../../assets/controls/skip-forward.png';
const Playing = () => {
  return (
    <div className='w-full bg-[#EEEEEE66] rounded-[20px] h-[267px] mb-[20px]'>
        <div className='h-full w-[85%] mx-auto py-[20px] flex flex-column justify-between'>
            <div className='w-fit mx-auto'>
                <Text type={'subTitle'} className='text-[#15265C]'>Music Name</Text>
                <Text type={'text'} className={'text-white w-fit mx-auto'}>Artist Name</Text>
            </div>
            <div>
                <div className='w-full h-[1px] border-[1px] border-solid border-[#D9D9D9] mb-[10px]'></div>
                <div className='w-fit mx-auto flex gap-5 max-w-[42px] justify-center  items-center'>
                    <img className='-scale-x-100 h-min max-w-[34px]'  src={next} alt='next'></img>
                    <img className='max-w-[51px]' src={pause} alt='pause'></img>
                    <img className='max-w-[34px] h-min max-w-[42px]' src={next} alt='next'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playing