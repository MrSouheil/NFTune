import React from 'react'
import profile1 from '../../../assets/profile1.png';
import profile2 from '../../../assets/profile2.png';
import profile3 from '../../../assets/profile3.png';
import Button from '../button/Button';
import Text from '../text/Text';

const Card = (props) => {
  return (
    <div className={`relative overflow-hidden rounded-[20px] ${props.className} drop-shadow-[-16px_4px_9px_rgba(0,0,0,0.25)] h-[453px] bg-[#EEEEEE66]`}>
       {/*} <img className='h-full w-full' src={'https://tse2.mm.bing.net/th?id=OIP.kRSxqqns41UFBXWO3_q-iQHaHa&pid=Api&P=0'} alt={'token image'}></img>*/}
        <div className='absolute bottom-0 h-[35%] bg-[rgb(255 255 255 / 60%)] w-full rounded-[20px] bg-white/[.6]'>
            <div className='w-[90%] mx-auto h-full relative'>
                <div className='absolute -translate-y-1/2 flex'>
                    <img alt={'profile'} src={profile1}></img>
                    <img alt={'profile'} src={profile2}></img>
                    <img alt={'profile'} src={profile3}></img>
                </div>
                <div className='flex justify-between h-full items-center'>
                    <div>
                        <Text type={'text'}>NFT:</Text>
                        <Text type={'text'}>Artist:</Text>
                        <Text type={'text'}>Duration:</Text>
                    </div>
                    <div className='flex flex-col gap-[1rem]'>
                        <Button bgColor={'#2EE09A'}>Buy Now</Button>
                        <Button>More</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card