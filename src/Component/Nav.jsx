import React from 'react'
import './nav.css'
import logo from './images/SPANISH LOGO PNG GREEN...png'
const Nav = () => {
  return (
    <div>
        <nav className='navSection'>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Products</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav