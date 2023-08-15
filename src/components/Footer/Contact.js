import React,{useEffect} from 'react';
import Sheet from '../basic/sheet/Sheet';
import { Button } from 'react-bootstrap';
import Text from '../basic/text/Text';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

  
const Contact = (props) => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  const emailjs = require('emailjs-com');

  const sendEmail = () => {
    const email = document.querySelector('.email').value;
    emailjs
      .send(
        'service_zsi5ndc',
        'template_5pfvxet',
        {
          email: email,
        },
        'rd668aiA-9thrEpAH'
      )
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email. Please try again later.');
      });
  };

  return (
    <Sheet className={`${props.className ? props.className : ''}`}>
      <div id='Contact' className='w-full bg-[#EEEEEE66] rounded-[20px] md:py-10 py-[1rem] wow fadeInUp px-[1rem] md:px-[30px]' data-wow-offset='400'>
        <Text className='mx-auto w-fit text-[#15265C]' type={'title'}>
          Never Miss A Drop!
        </Text>
        <Text
          type={'text'}
          className={'text-center mx-auto mb-[30px] md:mb-5 text-[#15265C] max-w-[716px]'}
        >
          Join our community today and be the first to know about our latest exclusive NFT songs, artist collaborations, and special promotions. Subscribe now to stay up-to-date and never miss out on the latest news and releases!
        </Text>
        <div className='mx-auto md:flex w-fit gap-5'>
          <div>
            <input
              className='email bg-[#D9D9D966] rounded-[20px] h-full pl-5 max-md:py-[5px] md:pr-[100px]'
              type='text'
              placeholder='Enter your email address'
            />
          </div>
          <div>
            <Button className='mx-auto max-md:mt-[20px] max-md:w-full' onClick={sendEmail}>Subscribe</Button>
          </div>
        </div>
        
      </div>
    </Sheet>
  );
};

export default Contact;
