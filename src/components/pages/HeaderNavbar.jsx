import React, { useState, useEffect } from "react";

export const HeaderNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Cases", "Contact Us"];

  return (
    <>
      <nav className="relative z-50 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* LeftNavItem */}
            {/* <div className="flex h-16 items-center justify-between"> */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-current="page"
                className={`text-lg font-bold ${isMenuOpen ? "text-netural-950" : "text-yellow-500"}`}
              >
                <span className="text-2xl font-bold text-lime-300">onenex</span>
              </a>
            </div>
            {/* </div> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex flex-row gap-6">
                <a
                  href="#"
                  aria-current="page"
                  className=" text-lg font-medium text-lime-300"
                >
                  Services
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className=" text-lg font-medium text-lime-300"
                >
                  Cases
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className=" text-lg font-medium text-lime-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              aria-expanded={isMenuOpen}
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`sm:hidden transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } bg-yellow-500 px-4 py-3 space-y-2`}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-lg font-medium text-netural-950 "
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-[999] sm:hidden
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
          bg-lime-300
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-bold text-blue-600">onenex</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-blue-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-8 mt-8 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-xl font-semibold text-blue-600"
            >
              ↗ {item.toUpperCase()}
            </a>
          ))}
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center space-y-4">
          <div className="flex justify-center gap-4 text-blue-600 text-xl">
            ● ● ● ●
          </div>
          <p className="text-sm text-black">
            Copyrighted 2023 all rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
