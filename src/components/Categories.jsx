import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Categories() {
    const categories = [
        { name: 'Pizza', icon: '🍕' },
        { name: 'Burgers', icon: '🍔' },
        { name: 'Sushi', icon: '🍣' },
        { name: 'Desserts', icon: '🍰' },
        { name: 'Indian', icon: '🍛' },
        { name: 'Chinese', icon: '🥡' },
        { name: 'Mexican', icon: '🌮' },
        { name: 'Salads', icon: '🥗' },
        { name: 'Beverages', icon: '🥤' },
        { name: 'Seafood', icon: '🦞' },
      ];
    
      return (
        <div className="bg-gray-50 py-8 p-5 md:py-10 md:p-10 mt-5">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-900">Explore Categories</h2>
          <div className="flex flex-wrap gap-3">
          <Swiper
            modules={[Navigation,Autoplay]}
            navigation
            autoplay={{
              delay: 3000, // 3 seconds for each slide
              disableOnInteraction: false, // keep autoplay running after interactions
            }}
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              320: { slidesPerView: 2 }, // Show 2 slides on very small screens
              480: { slidesPerView: 3 }, // Show 3 slides on small screens
              768: { slidesPerView: 4 }, // Show 4 slides on tablets
              1024: { slidesPerView: 6 }, // Show 6 slides on larger screens
            }}
          >
            
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-5xl">{category.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">{category.name}</h3>
                </div>
              </SwiperSlide>
            ))}
           
          </Swiper>
          </div>
        </div>
      );
    };

export default Categories