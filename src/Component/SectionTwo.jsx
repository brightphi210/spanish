import React from 'react'
import images1 from './images/2.jpg'
import images2 from './images/5.jpg'
import images3 from './images/6.jpg'
import images4 from './images/1.jpg'
import images5 from './images/11.png'
import images6 from './images/3.jpg'
import images9 from './images/9.jpg'
import images10 from './images/10.jpg'
import images11 from './images/11.jpg'
import images12 from './images/12.jpg'

import './sectionTwo.css'
const SecTwo = () => {
    return (
        <div id='sec2'>
            <h2 className='h2'>Samples <i class="uil uil-box"></i></h2>
            <section className='sectionTwo'>
                <div className='image-container'>
                    <img src={images6} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images1} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images2} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images3} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images4} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images5} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images9} alt="" />
                </div>

                <div className='image-container'>
                    <img src={images10} alt="" />
                </div>


                <div className='image-container'>
                    <img src={images11} alt="" />
                </div>


                <div className='image-container'>
                    <img src={images12} alt="" />
                </div>

            </section>
        </div>
    )
}

export default SecTwo