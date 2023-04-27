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
        <Text className={'w-fit text-white text-center mx-auto mb-[20px]'} type={'subTitle'}>Check now the top trending NFT songs for this week!<br/>Discover a new way to own and experience music with our exclusive NFT songs</Text>
        <Grid className={'gap-10'}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </Grid>
                
          {/* 
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-[450px] gap-20'>
                <Card></Card>
                <Card></Card>
                <Card className={'sm:max-lg:col-span-2'}></Card>
            </div>
            */}
        </Sheet>
    </section>
  )
}

export default Explore