import React from 'react'
import Text from '../text/Text'
const Button = (props) => {
    const {
        type='button',
        bgColor='#426AF2',
        borderRadius='10px',
        hoverBg='',
        borderColor='#426AF2',
        hoverBorderColor='',
        padding='px-[13px] py-[7px]',
        className=''

    }=props
  return (
    <button onClick={props.onClick} type={type} style={{borderColor:borderColor,backgroundColor:bgColor,borderRadius:borderRadius}} className={` border-1 border-solid ${padding} ${className? className : ''}`}>
        <Text className={`text-white`} type={'button'}><strong>{props.children}</strong></Text>
    </button>
  )
}

export default Button