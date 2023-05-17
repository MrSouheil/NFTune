import React,{ useState} from 'react'
import Sheet from './basic/sheet/Sheet';
import Text from './basic/text/Text';
import Button from '../components/basic/button/Button'
import useLogin from '../hooks/useLogin';

const UploadNft = () => {
  const [state1,setState1]=useState('Choose File');
  const [state2,setState2]=useState('Choose File');
  const handleFile = (file,setState) => {
    file.click();
    file.addEventListener('change', function() {
      file.files.length > 0 ? setState(file.files[0].name) :setState('Choose File')
      
    });
  }
  useLogin();
  return (
    <Sheet>
    <div className='rounded-[20px] bg-[#EEEEEE66] relative mb-10'>
        <div className='w-[90%] mx-auto'>
        <form>
            <Text type={'title'} className={'w-fit mb-10 pt-10 mx-auto text-[#15265C]'}>Upload your NFT to the marketplace</Text>
            <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>NFT Name</Text>
            <input type={'text'} className='bg-[#D9D9D9] opacity-30 rounded-[18px] text-white w-full pl-[15px] mb-[20px] py-[10px]' placeholder='Name'></input>
            <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>NFT Description</Text>
            <textarea cols='30' rows={'5'} className='bg-[#D9D9D9] opacity-30 rounded-[18px] text-white w-full pl-[15px] mb-[20px]' placeholder='Name'></textarea>
            <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>Price (ETH)</Text>
            <input type={'number'} min={'0.001'} className='bg-[#D9D9D9] opacity-30 rounded-[18px] text-white w-full pl-[15px] mb-[20px] py-[10px]' placeholder='min price 0.001 eth'></input>
            <div className='flex gap-40 mb-10'>
              <div>
                <Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>Upload Image</Text>
                <div className='flex'><Button onClick={()=>{handleFile(document.getElementById('input'),setState1)}}>Choose File</Button><input type={'file'} id={'input'} className='hidden'></input><Text type={'text'}>{state1}</Text></div>
              </div>
              <div><Text type={'subtitle'} className={'text-[#15265C] pb-[10px]'}>Upload Audio</Text>
              <div className='flex'><Button onClick={()=>{handleFile(document.getElementById('input1'),setState2)}}>Choose File</Button><input type={'file'} id={'input1'} className='hidden'></input><Text type={'text'}>{state1}</Text></div>
              </div>
            </div>
            <div className='w-full flex justify-center pb-10'><Button padding={'py-[7px] px-20'} type={'submit'}>Save NFT</Button></div>
        </form>
        </div>
    </div>
    </Sheet>
  )
}

export default UploadNft