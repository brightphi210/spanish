
import React from 'react'
import './sectionOne.css'
import im1 from './images/a.jpg'

const SectionOne = () => {
  return (
    <div>
      <section className='sectionOne'>
        <div className='sectionOneDiv'>
            <h3>About</h3>
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
            <div className='imDiv'>
              <img src={im1} alt=""/>
            </div>
            <p>
            At first, I didn't want to buy it because the product was new but I have no
             regrets now. Having good quality and affordable at the same time
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionOne
