import React from "react";
import img2 from "../assets/images/img2.jpg";

function TopRestaurants() {
  const restaurants = [
    {
      name: "Sizzle Delight",
      image: img2,
      rating: "4.8",
      category: "Italian, Pizza",
      deliveryTime: "30 mins",
    },
    {
      name: "Spice Symphony",
      image: img2,
      rating: "4.6",
      category: "Indian, Curry",
      deliveryTime: "25 mins",
    },
    {
      name: "Burger Bliss",
      image: img2,
      rating: "4.7",
      category: "American, Burgers",
      deliveryTime: "20 mins",
    },
    {
      name: "Sushi Spot",
      image: img2,
      rating: "4.9",
      category: "Japanese, Sushi",
      deliveryTime: "40 mins",
    },
    {
      name: "Sushi Spot",
      image: img2,
      rating: "4.9",
      category: "Japanese, Sushi",
      deliveryTime: "40 mins",
    },
    {
      name: "Sushi Spot",
      image: img2,
      rating: "4.9",
      category: "Japanese, Sushi",
      deliveryTime: "40 mins",
    },
    {
      name: "Sushi Spot",
      image: img2,
      rating: "4.9",
      category: "Japanese, Sushi",
      deliveryTime: "40 mins",
    },
    {
      name: "Sushi Spot",
      image: img2,
      rating: "4.9",
      category: "Japanese, Sushi",
      deliveryTime: "40 mins",
    },
  ];

  return (
    <div className="bg-gray-0 py-10 mt-10">
      {/* Heading with "View All" button */}
      <div className="flex justify-between items-center px-5 sm:px-10 mb-8">
        <h2 className="text-3xl font-bold text-pink-0">
          Top Restaurants in Your City
        </h2>
        <button
          className="text-pink-700 border border-pink-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 hover:text-white transition"
          onClick={() => {
            // Navigate to view all restaurants page or implement functionality here
            console.log("View All clicked");
          }}
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-10">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Restaurant Image */}
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />

            {/* Restaurant Details */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-pink-700">
                {restaurant.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {restaurant.category}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354l1.046 3.22a1 1 0 00.958.691h3.382l-2.89 2.1a1 1 0 00-.364 1.118l1.046 3.22-2.89-2.1a1 1 0 00-1.176 0l-2.89 2.1 1.046-3.22a1 1 0 00-.364-1.118l-2.89-2.1h3.382a1 1 0 00.958-.691L12 4.354z"
                    />
                  </svg>
                  {restaurant.rating}
                </span>
                <span>{restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRestaurants;
