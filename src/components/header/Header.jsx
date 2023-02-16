import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hao Gu</h1>
        <h5 className="text-light">A NiuBi Person</h5>
        <CTA />
        <HeaderSocial />
        
        <div className="me">
            <div className="me-image">
              <img src={ME} alt="me" />
            </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header