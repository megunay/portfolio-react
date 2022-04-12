import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
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
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <FaRegHandshake className='about__icon'/>
              <h5>Clients</h5>
              <small>5+</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>12+</small>
            </article>
          </div>

            <p>
              Hello, my name is Erkan. I'm a frontend developer from Turkey. I really like to learn and try new things. My passion is creating dynamic user experiences and UI effects.
              <br /><br />              
              Well organised person, problem solver and great team player. Fan of chess, basketball and learning.
              <br /><br />
              I develop websites with HTML, CSS, JavaScript, React and VUE. I have top skills in using design softwares like Figma, Adobe XD and PhotoShop.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          
        </div>
      </div>
    </section>
  )
}

export default About