import React from 'react'
import './Button.css'

const PrimaryButton = ({text}) => {
  return (
    <button className='PrimaryButton'>{text}</button>
  )
}
const SecondaryButton = ({text}) => {
    return (
      <button className='SecondaryButton'>{text}</button>
    )
}
const TertiaryButton = ({icon, lightText, boldText}) => {
  return (
    <div className='TertiaryButton'>
        <div className="icon">
            <img src={icon} alt="google_icon" />
        </div>
        <div className="text">
            <p>{lightText}</p>
            <h3>{boldText}</h3>
        </div>

    </div>
  )
}
export {PrimaryButton, SecondaryButton, TertiaryButton}