import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import LOGO from '../../assets/logo.png'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={LOGO} alt="My Logo" /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FiFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Musteba Erkan GUNAY. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer