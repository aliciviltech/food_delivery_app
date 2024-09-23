import React from 'react'
import './Feedback.css'
import SectionTitle from '../../commonComponents/SectionTitle/SectionTitle'
import quotes_img from '../../asset/images/quotes_colored.png'
import arrow_left from '../../asset/images/arrow_left.png'
import arrow_right from '../../asset/images/arrow_right.png'


const Feedback = () => {
    return (
        <div className='Feedback'>
            <SectionTitle text={'Our Clients Feedback'} />
            <div className="feedbackContent">
                <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.</p>
                <img src={quotes_img} alt="" />
                <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</h3>
                <div className="user">
                <h4>Mitchell Marsh</h4>
                <p>CEO, Bexon Agency</p>
                </div>
                <div className="navigationArrows">
                    <img src={arrow_left} alt="" />
                    <img src={arrow_right} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feedback