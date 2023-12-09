
import React from 'react'
import './sectionOne.css'
import im1 from './images/name (1).jpg'
import im2 from './images/name (2).jpg'
import im3 from './images/name (3).jpg'

const SectionOne = () => {
  return (
    <div>
      <section className='sectionOne'>
        <div className='sectionOneDiv'>
            <h3>Quality <br /> Products</h3>
            <p>
            In the year 2015 CEO Spanish started with the production handfree in 
            his company in china and along the line he went ahead to produce fast and 
            reliable chargers, EarPods, Powerbank’s,memory cards  and many more products to the service of mankind
            </p>
            <a href="#sec4"><button>Contact Us</button></a>
        </div>

        <div className='testimony'>
          <div>
          <h2>Clients Review</h2>
          <div className='testDiv'>
            <img src={im1} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum,
            </p>
          </div>

          <div className='testDiv'>
            <img src={im2} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum,
            </p>
          </div>

          <div className='testDiv'>
            <img src={im3} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum,
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionOne
