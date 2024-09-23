import React from 'react'
import './Card.css'

const Card = ({cardNumber, small, img, text}) => {
    return (
        <div className={small ? "SmallCardContainer" : "CardContainer"}>
            {cardNumber && <h1>{cardNumber}</h1>}
            <div className='card'>
                <img src={img} alt="" />
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default Card