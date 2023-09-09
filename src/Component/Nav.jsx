import React from 'react'
import './nav.css'


import logo from './images/SPANISH LOGO PNG GREEN...png'
const Nav = () => {

  // const [isNavOpen, setIsNavOpen] = useState(false)


  // const openMenu = () => {
  //   setIsNavOpen(true)
  // };


  // const closeMenu = () => {
  //   setIsNavOpen(false)
  // };


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