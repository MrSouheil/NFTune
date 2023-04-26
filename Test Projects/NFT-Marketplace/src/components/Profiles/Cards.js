import React from 'react'
import Text from '../basic/text/Text'

const Cards = (props) => {
  return (
    <div className='bg-[#EEEEEE66]  rounded-[20px]'>
        <div className='flex flex-col w-[85%] mx-auto py-[20px]'>
        <Text type={'subtitle'} className={'text-[#15265C]'}>{props.title?props.title:'Untitled'}</Text>
        {props.children?props.children:'empty'}
        </div>
    </div>
  )
}

export default Cards