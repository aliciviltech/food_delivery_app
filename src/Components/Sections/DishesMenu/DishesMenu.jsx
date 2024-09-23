import React from 'react'
import './DishesMenu.css'
import SectionTitle from '../../commonComponents/SectionTitle/SectionTitle'
import Card from '../../commonComponents/Cards/Card'
import location_icon from '../../asset/images/location_icon.png';
import pizzaImg from '../../asset/images/main_logo.png';
import burgerImg from '../../asset/images/burger.png';
import sushiImg from '../../asset/images/sushi.png';
import saladImg from '../../asset/images/salad.png';
import dessertsImg from '../../asset/images/desserts.png';
import pastaImg from '../../asset/images/pasta.png';
import bikeImg from '../../asset/images/bike.png';
import quotesImg from '../../asset/images/quotes.png';


const DishesMenu = () => {
    return (
        <div className='DishesMenu'>
            <SectionTitle text={'More Than 10,000 Dishes To Order!'} />
            <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
            <div className="row1">
                <div className="cards">
                    <Card small img={pizzaImg} text={'Pizza'} />
                    <Card small img={burgerImg} text={'Burger'} />
                    <Card small img={sushiImg} text={'Sushi'} />
                </div>
                <div className="description">
                    <div className="text"><h3>Find deals, free delivery, and more from our restaurant partners.</h3></div>
                    <div className="image"><img src={bikeImg} alt="" /></div>
                </div>
            </div>
            <div className="row2">
                <div className="description">
                    <div className="image"><img src={quotesImg} alt="" /></div>
                    <div className="text"><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p></div>
                </div>
                <div className="cards">
                    <Card small img={pastaImg} text={'Pasta'} />
                    <Card small img={saladImg} text={'Salad'} />
                    <Card small img={dessertsImg} text={'Desserts'} />
                </div>
            </div>
        </div>
    )
}

export default DishesMenu