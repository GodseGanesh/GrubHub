import React from 'react';

const MobileApp = () => {
  return (
    <div className=" bg-orange-100 bg-opacity-10 text-gray-800 rounded-lg p-6 w-full mx-auto flex items-center">
      {/* App Image */}
      <img
        src="https://via.placeholder.com/150" // Replace with your app's image
        alt="Mobile App"
        className="w-1/2 h-60 object-cover rounded-lg mr-6"
      />

      {/* Content */}
      <div className="flex flex-col items-start md:align-middle">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Download Our App</h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">
          Get our mobile app to order food faster, discover new places, and enjoy exclusive offers!
        </p>

        {/* Download Buttons */}
        <div className="flex gap-4">
          {/* iOS Button */}
          <button className="bg-gray-950 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-pink-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
            <span className="text-sm">App Store</span>
          </button>

          {/* Android Button */}
          <button className="bg-gray-950 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-pink-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4l4 4m0 0l-4 4m4-4H4"
              />
            </svg>
            <span className="text-sm">Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
