import React from 'react'
import './footer.css'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
import {RiTwitterLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GUFFY</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><RiFacebookCircleLine/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><RiTwitterLine/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gu Guffy. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer