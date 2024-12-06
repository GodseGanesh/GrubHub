import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/Herosection'
import Categories from './components/Categories'


function App() {
 

  return (
    <div className='w-full'>
    
     <Navbar />
    <HeroSection />
    <Categories />
     <Footer />

    </div>
  )
}

export default App
