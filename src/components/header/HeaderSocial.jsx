import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial