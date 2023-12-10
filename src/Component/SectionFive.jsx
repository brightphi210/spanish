import React from 'react'
import './sectionFive.css'

import logo from './images/SPANISH LOGO WHITE.png'

import { Link } from 'react-router-dom'

const SectionFive = () => {
  return (
    <div>
        <section className='sectionFive'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>

              <div className='oficeDiv'>
                <h2> BRANCH OFFICE:</h2>
                <p>A71G up Fancy & Furniture Alaba Int'l Mkt, Ojo Alaba, Lagos, Nigeria.</p>
              </div>

              <div className='oficeDiv'>
                <h2>HEAD OFFICE:</h2>  
                <p>MTN Office by Mosque Road/Elelenwo Portharcourt,  Rivers State, Nigeria.</p>
              </div>

              <div className='oficeDiv'>
                <h2>+8613078835695</h2>
                <h2>+2349066862255</h2>
              </div>
            </div>

            <div>
              <Link to={'https://www.facebook.com/profile.php?id=100070235585093'}><i class="uil uil-facebook icons"></i></Link>
              <Link to={'https://www.instagram.com/spanish_accessories/'}><i class="uil uil-instagram icons"></i></Link>
            </div>
        </section>
    </div>
  )
}

export default SectionFive