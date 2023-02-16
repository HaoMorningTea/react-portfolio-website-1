import React from 'react'
import './about.css'
import ME from '../../assets/newsmile.jpg'
import {FiAward} from 'react-icons/fi'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Coding</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>School</h5>
              <small>GPA 4.0 @UVA</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2 coming up</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla laudantium officiis maxime facilis? Corporis tenetur vero, porro a quaerat pariatur optio impedit iusto ipsam hic velit aspernatur maiores repellendus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About