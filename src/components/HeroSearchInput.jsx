import React from "react";

function HeroSearchInput() {
  const [location, setLocation] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Find Delicious Food Near You</h1>
      <div className="w-full max-w-4xl mx-auto flex flex-wrap gap-4">
        {/* Dropdown */}
        <select
          className="border rounded-md p-2 w-full sm:w-1/4 bg-white text-gray-700"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="" disabled>
            Select Location
          </option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Chicago">Chicago</option>
        </select>

        {/* Input with Icon */}
        <div className="flex flex-grow items-center border rounded-md  w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for food or restaurants"
            className="flex-grow p-2 outline-none"
          />
        </div>

        {/* Button */}
        <div className="relative inline-block mx-auto">
          <button className="relative px-4 py-2 bg-pink-700 text-white font-semibold text-md rounded-md overflow-hidden shadow-md group">
            <span className="absolute inset-0 bg-white transition-all duration-500 group-hover:left-0 group-hover:w-full w-0"></span>
            <span className="relative z-10 group-hover:text-pink-700 transition-all duration-300">
              ORDER NOW
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSearchInput;
