import React from 'react'
import './sectionFour.css'
const SectionFour = () => {
  return (
    <div id='sec4'>
      <form action="">
        <input type="text" placeholder='Enter Name . . .'  required/>
        <input type="email" placeholder='Enter Email . . .' required />
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description' required></textarea>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default SectionFour
