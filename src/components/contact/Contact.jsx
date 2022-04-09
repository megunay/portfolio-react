import React, { useRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c3cpixr', 'template_ixvsyz9', form.current, 'SiEgyeCS0cjX7K2xE')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>erkang91@gmail.com</h5>
            <a href="mailto:erkang91@gmail.com" target="_blank">Send an e-mail.</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+905369947989" target="_blank">Text me on WhatsApp.</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@mustebaerkan</h5>
            <a href="https://www.instagram.com/mustebaerkan/" target="_blank">Contact me on Instagram</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact