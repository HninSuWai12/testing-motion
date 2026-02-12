import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Idea = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black bg-gradient-to-r from-[#0E5276] to-[#1a7bb1]   h-[120vh]">
      <div className="max-w-5xl">
        {/* Outlined Text Style */}
        <h2
          className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase mb-2"
          style={{ WebkitTextStroke: "1px white", color: "transparent" }}
        >
          Turn your idea into
        </h2>

        {/* Solid Bold Text */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase mb-12">
          Business Solutions
        </h1>

        {/* Call to Action Button */}
        <button className="group relative inline-flex items-center gap-3 px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all duration-300">
          Get in Touch
          <span className="text-xl transition-transform group-hover:translate-x-1">
            <FaArrowAltCircleRight />
          </span>
        </button>
      </div>

      {/* Optional: The small glowing blue dot from your image */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-pulse"></div>
    </div>
  );
};

export default Idea;
