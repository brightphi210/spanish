import React from 'react'
import images1 from './images/2.jpg'
import images2 from './images/5.jpg'
import images3 from './images/6.jpg'
import images4 from './images/1.jpg'
import images5 from './images/11.png'
import images6 from './images/3.jpg'
// import images5 from './images/11.png'

import './sectionTwo.css'
const SecTwo = () => {
    return (
        <div>
            <h2 className='h2'>Some Products <i class="uil uil-box"></i></h2>
            <section className='sectionTwo'>
                <div className='image-container'>
                    <img src={images6} alt="" />
                    <div class="image-description">
                        <p>This is the image description.</p>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={images1} alt="" />
                    <div class="image-description">
                        <p>This is the image description.</p>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={images2} alt="" />
                    <div class="image-description">
                        <p>This is the image description.</p>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={images3} alt="" />
                    <div class="image-description">
                        <p>This is the image description.</p>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={images4} alt="" />
                    <div class="image-description">
                        <p>This is the image description.</p>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={images5} alt="" />
                    <div class="image-description">
                        <p>This is the image description.</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default SecTwo