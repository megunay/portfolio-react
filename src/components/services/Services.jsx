import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services =() => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            {/* UI/UX Design Part */}
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Product Design</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>UX Web Design</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Frontend Development</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Custom-Tailored Design</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Creative Solutions</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">

            {/* Web Development */}
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Web Application Development</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Content Management System</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Web Portals</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Mobile-optimized Website</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>E-Commerce Systems</p>
            </li>
          </ul>
        </article>

        {/*<article className="service">
          <div className="service__head">

             Content Creation 
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>*/}
      </div> 
    </section>
  )
}

export default Services