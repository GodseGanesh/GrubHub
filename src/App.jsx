import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/Herosection'
import Categories from './components/Categories'
import TopRestaurants from './components/TopRestaurant'
import MobileApp from './components/MobileApp'
import Offers from './components/Offers'


function App() {
 

  return (
    <div className='w-full'>
    
     <Navbar />
    <HeroSection />
    <Categories />
    <TopRestaurants />

    <MobileApp />
    <Offers />
     <Footer />

    </div>
  )
}

export default App
