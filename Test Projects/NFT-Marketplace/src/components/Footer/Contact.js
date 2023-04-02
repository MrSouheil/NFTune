import React from 'react'
import Sheet from '../basic/sheet/Sheet'
import { Button } from 'react-bootstrap'
import Text from '../basic/text/Text'

const Contact = () => {
  return (
    <Sheet>
        <div className='w-full bg-[#EEEEEE66] rounded-[20px] py-10'>
            <Text className='mx-auto w-fit text-{#15265C]' type={'title'}>Never Miss A Drop!</Text>
            <Text type={'text'} className={'text-center mx-auto mb-5 text-{#15265C] max-w-[716px]'}>Join our community today and be the first to know about our latest exclusive NFT songs, artist collaborations, and special promotions. Subscribe now to stay up-to-date and never miss out on the latest news and releases!</Text>
            <div className='mx-auto flex w-fit gap-5'>
                <div><input placeholder='Enter your email address' className='bg-[#D9D9D966] rounded-[20px] h-full pl-5 pr-[100px]' type={'text'}></input></div>
                <div><Button>Subscribe</Button></div>
            </div>
        </div>
    </Sheet>
  )
}

export default Contact