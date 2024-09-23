import React, { useState } from 'react'
import './Header.css'
import main_logo from '../asset/images/main_logo.png'
import { PrimaryButton, SecondaryButton } from '../commonComponents/Buttons/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='Header'>
      <div className="logo">
        <img src={main_logo} alt="" />
      </div>
      <div className={`anchors ${isMenuOpen ? 'active' : ''}`}>
        <a href="">Restaurants</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Page <i className='fa-solid fa-caret-down'></i> </a>
        <div className="buttons">
          <SecondaryButton />
          <PrimaryButton text={'Signup'} />
        </div>
      </div>
      <div className="menuBars" onClick={toggleMenu}>
        {isMenuOpen ? <i className='fa-solid fa-close' ></i> : <i className='fa-solid fa-bars' ></i>}
      </div>
    </div>
  )
}

export default Header