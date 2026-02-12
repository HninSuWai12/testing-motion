import React from "react";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white px-10 py-20 font-sans border-t border-gray-100 h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight max-w-5xl uppercase tracking-tight">
            WE ARE YOUR PARTNER FOR INNOVATION & GROWTH
          </h2>
          <button className="mt-8 md:mt-4 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 text-sm uppercase">
            Get in touch{" "}
            <span>
              <FaArrowAltCircleRight />
            </span>
          </button>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div>
            <h4 className="font-bold text-blue-600 mb-6 uppercase">
              WE ONENEX
            </h4>
            <ul className="space-y-4 text-gray-800 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-6 uppercase">WE OFFER</h4>
            <ul className="space-y-4 text-gray-800 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600">
                  UI/UX Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Android Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  iOS Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-6 uppercase">
              FOLLOW US
            </h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                <FaFacebook />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                <FaInstagram />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                <FaLinkedin />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-blue-200 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 italic">ONENEX</div>
          <div className="text-[10px] text-blue-600 uppercase tracking-widest">
            ONENEX © COPYRIGHT 2026. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
