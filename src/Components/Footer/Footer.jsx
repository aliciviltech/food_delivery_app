import React from 'react'
import './Footer.css'

// import images
import google_icon from '../asset/images/google_play_icon.png'
import apple_icon from '../asset/images/apple_icon.png'
import main_logo from '../asset/images/main_logo.png'

// import components
import { TertiaryButton } from '../commonComponents/Buttons/Button'


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="row1">
        <div className="col1">
          <div className="logo">
            <img src={main_logo} alt="logo" />
          </div>
          <div className="socialButtons">
            <TertiaryButton icon={google_icon} lightText={"GET IT ON"} boldText={'Google Play'} />
            <TertiaryButton icon={apple_icon} lightText={"Download on the"} boldText={'APP Store'} />
          </div>
        </div>
        <div className="col2">

          <div className="links">
            <h3>Quick links</h3>
            <p>Features</p>
            <p> Menu</p>
            <p> Offer</p>
            <p> Review</p>
            <p> Rider</p>
          </div>
          <div className="links">
            <h3>Quick links</h3>
            <p>Features</p>
            <p> Menu</p>
            <p> Offer</p>
            <p> Review</p>
            <p> Rider</p>
          </div>
          <div className="links">
            <h3>Quick links</h3>
            <p>Features</p>
            <p> Menu</p>
            <p> Offer</p>
            <p> Review</p>
            <p> Rider</p>
          </div>
          <div className="links">
            <h3>Quick links</h3>
            <p>Features</p>
            <p> Menu</p>
            <p> Offer</p>
            <p> Review</p>
            <p> Rider</p>
          </div>

        </div>
      </div>
      <div className="row2">
        <p>© 2023 pizza.All right reserved</p>
        <p>
          <span>Privacy</span>
          <span>Policy</span>
          <span>Terms</span>
          <span>Services</span>
        </p>
      </div>

    </div>
  )
}

export default Footer