import React from 'react';
import Card from './basic/Cards/Card';
import Sheet from './basic/sheet/Sheet';

const Explore = () => {
  return (
    <section>
        <Sheet>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-[450px] gap-20'>
                <Card></Card>
                <Card></Card>
                <Card className={'sm:max-lg:col-span-2'}></Card>
            </div>
        </Sheet>
    </section>
  )
}

export default Explore