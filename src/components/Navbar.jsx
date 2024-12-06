import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [profileMenuIsOpened, setProfileMenuIsOpened] = useState(false);

  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  const toggleProfileMenu = () => {
    setProfileMenuIsOpened((isOpened) => !isOpened);
  };

  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
          setProfileMenuIsOpened(false); // Close profile dropdown when clicking outside
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />

      <header className="sticky left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          {/* Logo */}
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

          {/* Links */}
          <div
            className={`absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 ease-linear ${
              navIsOpened
                ? "translate-y-0 opacity-100 visible"
                : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              {["Home", "About", "Add Restaurant", "Menu", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Right Section: Shopping Cart and Profile */}
            <div className="flex items-center gap-6 lg:min-w-max mt-10 lg:mt-0 justify-center ">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-pink-600 cursor-pointer" />

              {/* Profile Icon with Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProfileMenu();
                  }}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <UserCircleIcon className="h-8 w-8 text-gray-600 hover:text-pink-600 cursor-pointer" />
                </button>

                {/* Dropdown Menu */}
                {profileMenuIsOpened && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <ul className="py-2">
                      <li>
                        <a
                          href="#login"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                          Login / Signup
                        </a>
                      </li>
                     
                      <li>
                        <a
                          href="#settings"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navbar Toggle Button for Mobile */}
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
                className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""
                }`}
              />
              <span
                aria-hidden={true}
                className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
