import React from 'react'
import Nav from '../Component/Nav'
import SectionOne from '../Component/SectionOne'
import SecTwo from '../Component/SectionTwo'
import SectionThree from '../Component/SectionThree'
import SectionFour from '../Component/SectionFour'
import SectionFive from '../Component/SectionFive'



const Home = () => {
  return (
    <div>
        <Nav />
        <SectionOne />
        <SectionThree />
        <SecTwo />
        <SectionFour/>
        <SectionFive /> 
    </div>
  )
}

export default Home
