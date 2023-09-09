import React from 'react'
import './sectionFive.css'

import logo from './images/SPANISH LOGO WHITE.png'

const SectionFive = () => {
  return (
    <div>
        <section className='sectionFive'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='myUl'>
              <li>Home</li>  
              <li>Services</li>  
              <li>About</li>  
              <li>Contact</li>  
            </ul>
            <div>
                <i class="uil uil-facebook icons"></i>
                <i class="uil uil-twitter icons"></i>
                <i class="uil uil-instagram icons"></i>
            </div>
        </section>
    </div>
  )
}

export default SectionFive