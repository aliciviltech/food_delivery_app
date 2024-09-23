import React from 'react'
import './Subscription.css'
import SectionTitle from '../../commonComponents/SectionTitle/SectionTitle'
import { PrimaryButton } from '../../commonComponents/Buttons/Button'

const Subscription = () => {
    return (
        <div className='Subscription'>
            <div className='textSide'>
                <h1>Subscribe our newsletter</h1>
                <p>Browse local restaurants and businesses for delivery by entering your address blow.</p>
            </div>
            <div className="inputSide">
                <div className="emailInput">
                    <input type="text" />
                    <PrimaryButton text={'Send'} />
                </div>
            </div>
        </div>
    )
}

export default Subscription