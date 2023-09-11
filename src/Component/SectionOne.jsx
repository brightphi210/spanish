
import React from 'react'
import './sectionOne.css'
import im1 from './images/name (1).jpg'
import im2 from './images/name (2).jpg'
import im3 from './images/name (3).jpg'
import im4 from './images/name (4).jpg'

const SectionOne = () => {
  return (
    <div>
      <section className='sectionOne'>
        <div className='sectionOneDiv'>
            <h3>Quality <br /> Products</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                Perferendis sequi, <br /> ut atque aut iste nemo
                sapiente illum! Soluta, adipisci laborum! Fugiat, <br />
            </p>
            <a href="#sec4"><button>Contact Us</button></a>
        </div>

        <div className='testimony'>
          <h2>Clients Review</h2>
          <div className='testDiv'>
            <img src={im1} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum, totam. Nihil reiciendis suscipit similique quibusdam 
            </p>
          </div>

          <div className='testDiv'>
            <img src={im2} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum, totam. Nihil reiciendis suscipit similique quibusdam 
            </p>
          </div>

          <div className='testDiv'>
            <img src={im3} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum, totam. Nihil reiciendis suscipit similique quibusdam 
            </p>
          </div>

          <div className='testDiv'>
            <img src={im4} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorum, totam. Nihil reiciendis suscipit similiquse quibusdam 
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionOne
