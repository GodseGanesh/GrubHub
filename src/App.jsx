import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/Herosection'
import Categories from './components/Categories'
import TopRestaurants from './components/TopRestaurant'
import MobileApp from './components/MobileApp'


function App() {
 

  return (
    <div className='w-full'>
    
     <Navbar />
    <HeroSection />
    <Categories />
    <TopRestaurants />

    <MobileApp />
     <Footer />

    </div>
  )
}

export default App
