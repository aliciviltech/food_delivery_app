import React from 'react'
import './HowToOrder.css'
import SectionTitle from '../../commonComponents/SectionTitle/SectionTitle'
import Card from '../../commonComponents/Cards/Card'
import location_icon from '../../asset/images/location_icon.png';
import boy_icon from '../../asset/images/boy.png';
import house_icon from '../../asset/images/house.png';
import burger_icon from '../../asset/images/burger_with_bg.png';

const HowToOrder = () => {
  return (
    <div className='HowToOrder'>
        <SectionTitle text={'How To Order!'} />
        <div className="allCards">
        <Card cardNumber={'01'} img={location_icon} text={'Choose your location'} />
        <Card cardNumber={'02'} img={boy_icon} text={'Choose what to eat'} />
        <Card cardNumber={'03'} img={burger_icon} text={'May your first order'} />
        <Card cardNumber={'04'} img={house_icon} text={'Now! your food in way'} />
        </div>
    </div>
  )
}

export default HowToOrder