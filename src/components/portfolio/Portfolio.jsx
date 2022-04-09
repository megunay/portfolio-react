import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/megunay',
    demo: 'https://github.com/megunay'
  },
  {
    id: 2,
    image: img2,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/megunay',
    demo: 'https://github.com/megunay'
  },
  {
    id: 3,
    image: img3,
    title: 'Templates for Startups / Eclipse UI KIT',
    github: 'https://github.com/megunay',
    demo: 'https://github.com/megunay'
  },
  {
    id: 4,
    image: img4,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/megunay',
    demo: 'https://github.com/megunay'
  },
  {
    id: 5,
    image: img5,
    title: 'High-quality dashboard templates for startups',
    github: 'https://github.com/megunay',
    demo: 'https://github.com/megunay'
  },
  {
    id: 6,
    image: img6,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/megunay',
    demo: 'https://github.com/megunay'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a> {/* This link will be my project repo link */}
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </div>
            </article>
            )
          })
        } 
      </div>
      
    </section>
  )
}

export default Portfolio
