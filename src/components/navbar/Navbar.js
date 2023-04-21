import React from 'react'
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from '../../constants/images'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.gericht} alt="grcht_img" />
      </div>
      <ul className='app_navbar-links'>
        <li className='p_opensans'><a href="#home">Home</a></li>
        <li className='p_opensans'><a href="#about">About</a></li>
        <li className='p_opensans'><a href="#menu">Menu</a></li>
        <li className='p_opensans'><a href="#awards">Awards</a></li>
        <li className='p_opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="app_navbar-login">
        <a href="#login" className='p_opensans'>Login/Register</a>
        <div />
        <a href="/" className='p_opensans'>Book Table</a>
      </div>
      <div className="app_navbar-smallScreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className="app_navbar-smallScreen_overlay flex_center slide-bottom">
              <MdOutlineRestaurantMenu className="overlay__close" fontSize={27} onClick={() =>setToggleMenu(false)} />
              <ul className='app_navbar-links-smallScreen-links'>
                <li className='p_opensans'><a onClick={()=>setToggleMenu(false)} href="#home">Home</a></li>
                <li className='p_opensans'><a onClick={()=>setToggleMenu(false)} href="#about">About</a></li>
                <li className='p_opensans'><a onClick={()=>setToggleMenu(false)} href="#menu">Menu</a></li>
                <li className='p_opensans'><a onClick={()=>setToggleMenu(false)} href="#awards">Awards</a></li>
                <li className='p_opensans'><a onClick={()=>setToggleMenu(false)} href="#contact">Contact</a></li>
              </ul>
            </div>
          )
        }

      </div>
    </nav>
  )
}

export default Navbar