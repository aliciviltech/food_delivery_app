import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import './Home.css'
import DishesMenu from '../Sections/DishesMenu/DishesMenu'
import HowToOrder from '../Sections/HowToOrder/HowToOrder'
import Feedback from '../Sections/Feedback/Feedback'
import Subscription from '../Sections/Subscription/Subscription'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Banner></Banner>
        <DishesMenu/>
        <HowToOrder />
        <Feedback/>
        <Subscription/>
        <Footer/>
    </div>
  )
}

export default Home