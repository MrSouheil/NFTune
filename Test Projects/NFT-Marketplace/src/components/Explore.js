import React from 'react';
import Card from './basic/Cards/Card';
import Sheet from './basic/sheet/Sheet';
import Text from './basic/text/Text';
import Grid from './basic/grid/Grid';

const Explore = () => {
  return (
    <section className='relative'>
        <Sheet>
        <Text type={'title'} className={'text-white mx-auto w-fit '}>Exclusive this week!</Text>
        <Text className={'w-fit text-white text-center mx-auto mb-5'} type={'subTitle'}>Check now the top trending NFT songs for this week!<br/>Discover a new way to own and experience music with our exclusive NFT songs</Text>
        <Grid className={'gap-20'}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
           
        </Grid>
        <Text type={'title'} className={'text-white mx-auto w-fit  pt-20 '}>Explore our NFT collection!</Text>
        <Text className={'w-fit text-white text-center mx-auto mb-[20px]'} type={'subTitle'}>Discover rare recordings, limited-edition merchandise, <br/>exclusive digital artwork, and concert experiences.</Text>
        <div className='relative rounded-[20px] w-[300px] mx-auto mb-20'><input className='w-full h-full rounded-[20px] bg-[#EEEEEE66] py-[10px] pl-[36px]' placeholder='Search'></input></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 relative mb-20'>
                <Card></Card>
                <Card></Card>
                <Card ></Card>
                <Card></Card>
                <Card></Card>
                <Card ></Card>
            </div>
        </Sheet>
    </section>
  )
}

export default Explore