import React from 'react';
import Sheet from '../basic/sheet/Sheet';
import { Button } from 'react-bootstrap';
import Text from '../basic/text/Text';

const Contact = (props) => {
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
      <div className='w-full bg-[#EEEEEE66] rounded-[20px] py-10'>
        <Text className='mx-auto w-fit text-[#15265C]' type={'title'}>
          Never Miss A Drop!
        </Text>
        <Text
          type={'text'}
          className={'text-center mx-auto mb-5 text-[#15265C] max-w-[716px]'}
        >
          Join our community today and be the first to know about our latest exclusive NFT songs, artist collaborations, and special promotions. Subscribe now to stay up-to-date and never miss out on the latest news and releases!
        </Text>
        <div className='mx-auto flex w-fit gap-5'>
          <div>
            <input
              className='email bg-[#D9D9D966] rounded-[20px] h-full pl-5 pr-[100px]'
              type='text'
              placeholder='Enter your email address'
            />
          </div>
          <div>
            <Button onClick={sendEmail}>Subscribe</Button>
          </div>
        </div>
        
      </div>
    </Sheet>
  );
};

export default Contact;
