import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const data = [
  {
    avatar: AVTR1,
    name: "Guldehan Bato",
    review: "Gocam diye demiyom coh galiteli dizaynirdir."
  },
  {
    avatar: AVTR2,
    name: "Berk Ergun",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consectetur quaerat repudiandae officiis perspiciatis itaque soluta neque, beatae optio hic veniam quia cum ipsam. Similique at reprehenderit explicabo sequi voluptas."
  },
  {
    avatar: AVTR3,
    name: "Ibrahim Ejder GUNAY",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consectetur quaerat repudiandae officiis perspiciatis itaque soluta neque, beatae optio hic veniam quia cum ipsam. Similique at reprehenderit explicabo sequi voluptas."
  },
  {
    avatar: AVTR4,
    name: "Jen Nash",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consectetur quaerat repudiandae officiis perspiciatis itaque soluta neque, beatae optio hic veniam quia cum ipsam. Similique at reprehenderit explicabo sequi voluptas."
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper" pagination={{dynamicBullets: true,}} modules={[Pagination]}>
        {
        data.map(({id, avatar, name, review}, index) => {
          return(
          <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials