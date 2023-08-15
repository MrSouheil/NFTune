import React from 'react'
import Contact from './Contact'
import GetInTouch from './GetInTouch'
import Copyrights from './Copyrights'

const Footer = () => {
  return (
    <footer className='relative'>
        <Contact className={'md:mb-10 mb-5' }></Contact>
        <GetInTouch className={'md:mb-10 mb-5'}></GetInTouch>
        <Copyrights></Copyrights>
        
    </footer>
  )
}

export default Footer