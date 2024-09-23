import React from 'react'
import './Banner.css'

// import images
import banner_image from '../asset/images/banner_img.png';
import apple_icon from '../asset/images/apple_icon.png';
import google_icon from '../asset/images/google_play_icon.png';
// import components
import { PrimaryButton, TertiaryButton } from '../commonComponents/Buttons/Button';

const Banner = () => {
  return (
    <div className='Banner'>
        <div className="textSide">
            <h1>Your Favorite Food Delivery Partner</h1>
            <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. </p>
            <div className="search">
                <input type="search" placeholder='Enter your delivery location' />
                <PrimaryButton text={'Order Now'} />
            </div>
            <div className="socialButtons">
            <TertiaryButton icon={google_icon} lightText={"GET IT ON"} boldText={'Google Play'} />
            <TertiaryButton icon={apple_icon} lightText={"Download on the"} boldText={'APP Store'} />
            </div>
        </div>
        <div className="imageSide">
            <img src={banner_image} alt="" />
        </div>
    </div>
  )
}

export default Banner