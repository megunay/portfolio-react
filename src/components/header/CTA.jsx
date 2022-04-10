import React from 'react'
import CV from '../../assets/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download CV</a> {/* Probably there is an error with this section because this should download the cv when it clicked instead it is opening it on the browser. */}
        <a href='#contact' className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA
