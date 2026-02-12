import React from "react";
import ApiCard from "./ApiCard";

const OurWork = () => {
  return (
    // We use min-h-screen to ensure the background covers the viewport
    <div className="w-full relative" style={{ background: "#0e5275" }}>
      <div className="max-w-7xl mx-auto pt-20 px-4 flex flex-col gap-6 text-center items-center">
        <h2 className="text-white/70 uppercase tracking-widest text-sm font-semibold">
          Our Works
        </h2>
        <p className="text-white font-bold text-3xl md:text-4xl max-w-4xl">
          We help brands create & foster relationships with their consumers...
        </p>
      </div>

      {/* The horizontal scroll section */}
      <ApiCard />
    </div>
  );
};

export default OurWork;
