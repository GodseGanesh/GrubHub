import React from "react";

function HeroSearchInput() {
  const [location, setLocation] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Find Delicious Food Near You</h1>
      <div className="flex w-full ">
        <select
          className="border rounded-md p-2 w-1/4 bg-white text-gray-700"
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
        <div className="flex flex-grow items-center border rounded-md px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for food or restaurants"
            className="flex-grow p-2 outline-none"
          />
        </div>
        <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Order Now
        </button>
      </div>
    </div>
  );
}
export default HeroSearchInput;
