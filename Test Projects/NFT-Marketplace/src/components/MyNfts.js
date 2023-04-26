import React from 'react'
import Text from './basic/text/Text'
import Sheet from './basic/sheet/Sheet'
import Grid from './basic/grid/Grid'
import Cards from './Profiles/Cards'
import Playing from './NowPlaying/Playing'
const MyNfts = () => {
  return (
    <section className="w-screen relative h-fit mb-10">
        <Sheet>
            <Text type={'title'} className={'text-white mx-auto w-fit mb-[20px]'}>Welcome to your profile!</Text>
            <Grid className={'gap-[20px] mb-[20px]'} lg='3' md='2' def='1'>
                <Cards title='Wallet Address'><Text type={'text'} className='text-white'>0x2afaea8db07d7d97f99b68d67e173f</Text></Cards>
                <Cards title='Number Of NFTS'></Cards>
                <Cards title='Total Value'></Cards>
                <Cards title='Total Balance'><Text type={'text'} className={'text-white'}>20 ETH  </Text></Cards>
            </Grid>
            <Text type={'title'} className={'text-white mx-auto w-fit mb-[20px]'}>My playlist</Text>
            <Text type={'subtitle'} className={'text-white mb-[20px]'}>Now Playing</Text>
            <Playing></Playing>
        </Sheet>
    </section>
  )
}

export default MyNfts