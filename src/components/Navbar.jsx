import React from "react";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md w-full">
//       <div className="w-full mx-auto px-4 flex justify-between items-center h-16">
//         <div className="text-xl font-bold text-green-500">GrubHub</div>
//         <div className="hidden md:flex space-x-6">
//           {/* Updated Nav Links */}
//           {["Home", "Menu", "About", "Contact"].map((tab) => (
//             <a
//               href="#"
//               key={tab}
//               className="relative text-gray-800 hover:text-green-500 font-medium group"
//             >
//               {tab}
//               {/* Hover Effect Border */}
//               <span
//                 className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"
//               ></span>
//             </a>
//           ))}
//         </div>
//         <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-green-500 cursor-pointer" />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

function Navbar() {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };

  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />
      
      <header className="sticky left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <a
              href="#"
              className="text-xl font-semibold flex items-center gap-x-2"
            >
              <span className="flex">
                <span className="w-3 h-6 rounded-l-full flex bg-red-500" />
                <span className="w-3 h-6 rounded-r-full flex bg-pink-700 mt-2" />
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                GrubHub
              </span>
            </a>
          </div>
          <div
            className={`
          absolute top-full  left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
          ${
            navIsOpened
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
          }
        `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
              flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}
              />
              <span
                aria-hidden={true}
                className={`
              mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
