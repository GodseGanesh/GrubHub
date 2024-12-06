import { useState } from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import HeroSearchInput from './HeroSearchInput';
 
function HeroSection() {
return (
<>
 
  <section className="py-4 mt-14 sm:mt16 lg:mt-0">
    <div className=" mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid md:grid-cols-12 lg:items-center gap-10">
      <div className="md:col-span-7 flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
        <h1 className=" font-semibold leading-tight text-teal-950 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
        Satisfy Your Cravings  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">in Minutes!</span>
        </h1>
        <p className="  text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
        No matter your craving, <span className='font-bold'>GrubHub</span> connects you with a world of flavors. From sizzling street food to gourmet delicacies, we bring together local favorites and popular chains to satisfy every appetite. Explore menus, try new cuisines, 
        right to your doorstep
        </p>
        <div className="w-full">
          <HeroSearchInput />
        </div>
        {/* <div className="mt-5 flex items-center justify-center flex-wrap gap-4 lg:justify-start w-full">
          <a href="#" target="_blank">
            <span className="sr-only">org name</span>
            <img src="/clients/microsoft.svg" alt="client name" className="h-10 w-auto dark:grayscale" />
          </a>
          <a href="#" target="_blank">
            <span className="sr-only">org name</span>
            <img src="/clients/microsoft.svg" alt="client name" className="h-10 w-auto dark:grayscale" />
          </a>
          <a href="#" target="_blank">
            <span className="sr-only">org name</span>
            <img src="/clients/microsoft.svg" alt="client name" className="h-10 w-auto dark:grayscale" />
          </a>
          <a href="#" target="_blank">
            <span className="sr-only">org name</span>
            <img src="/clients/microsoft.svg" alt="client name" className="h-10 w-auto dark:grayscale" />
          </a>
        </div> */}
      </div>
      <div className="md:col-span-5 flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
        <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
          <img src={img1} alt="buildind plan image" width={300} className="w-full h-full object-cover z-30" />
        </div>
        <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
          <img src={img2}  alt="working-on-housing-project" width={300} className="z-10 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  
</>
)
}

export default HeroSection;