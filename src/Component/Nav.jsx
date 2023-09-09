import React from 'react'
import './nav.css'

import { useState } from 'react'

import SecTwo from './SectionTwo'


import logo from './images/SPANISH LOGO PNG GREEN...png'
const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)


  const openMenu = () => {
    setIsNavOpen(true)
  };


  const closeMenu = () => {
    setIsNavOpen(false)
  };


  return (
    <div>
        <nav className='navSection'>
            <a href="/"><img src={logo} alt="" /></a>
            <ul className={`nav-ul ${isNavOpen ? "open" :"close"} `}>
                <a href="/"><li>Home</li></a>
                <a href="#sec3"><li>Services</li></a>
                <a href="#sec2"><li>Products</li></a>
                <a href="#sec4"><li>Contact</li></a>
                <i class="uil uil-multiply closebtn" onClick={closeMenu}></i>
            </ul>
            <i class="uil uil-apps openbtn" onClick={openMenu}></i>
        </nav>
    </div>
  )
}

export default Nav