import React from 'react'
import './banner.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import images1 from './images/ban1.jpg'
import images2 from './images/ban2.jpg'
import images3 from './images/ban3.jpg'

const Banner = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.how 
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (

    
    <div>
      <section className='bannerSection'>
      <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            itemClass="carousel-item-padding-60-px"
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
          >

            <img src={images1} alt="" />
            <img src={images2} alt="" />
            <img src={images3} alt="" />
        </Carousel >
      </section>
    </div>
  )
}

export default Banner
