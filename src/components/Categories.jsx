import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Categories() {
  const [categories, SetCategories] = useState([]);
  function getCategories() {
    fetch("http://127.0.0.1:8000/GrubHub/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not ok");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.length > 0) {
          SetCategories(data);
          console.log(data);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }

  useEffect(getCategories, []);
 

  return (
    <div className="bg-gray-50 py-8 p-5 md:py-10 md:p-10 mt-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-900">
        Explore Categories
      </h2>
      <div className="flex flex-wrap gap-3">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000, // 3 seconds for each slide
            disableOnInteraction: false, // keep autoplay running after interactions
          }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 2 }, // Show 2 slides on very small screens
            480: { slidesPerView: 3 }, // Show 3 slides on small screens
            768: { slidesPerView: 2 }, // Show 4 slides on tablets
            1024: { slidesPerView: 4 }, // Show 6 slides on larger screens
          }}
        >
          
          {categories.length > 0 ? (
            categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-5xl">{category.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <h1>No data found</h1>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
