import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Offers() {
  const offers = [
    {
      image: "https://via.placeholder.com/200", // Replace with your image
      discount: "55%",
      title: "Explore Irresistible Promotions!",
      description:
        "Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.",
      buttonText: "Order Today",
    },
    {
      image: "https://via.placeholder.com/200",
      discount: "30%",
      title: "Save Big on Salads!",
      description:
        "Enjoy fresh salads at discounted prices. Grab this limited-time offer now!",
      buttonText: "Order Now",
    },
    {
      image: "https://via.placeholder.com/200",
      discount: "40%",
      title: "Special Steak Offers!",
      description:
        "Savor our finest steaks with amazing discounts. Don’t miss out!",
      buttonText: "Order Today",
    },
  ];

  return (
    <div className="bg-yellow-100 rounded-lg p-8">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                  <span className="text-sm font-semibold text-pink-600">
                    Save {offer.discount}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
                <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                  {offer.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default Offers;
