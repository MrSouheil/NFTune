import React from 'react'
import Contact from './Contact'
import GetInTouch from './GetInTouch'
import Copyrights from './Copyrights'

const Footer = () => {
  return (
    <footer className='relative'>
        <Contact className={'mb-10'}></Contact>
        <GetInTouch className={'mb-10'}></GetInTouch>
        <Copyrights></Copyrights>
    </footer>
  )
}

export default Footer