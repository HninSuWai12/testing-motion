import React from "react";
import { motion } from "framer-motion";
import WhatWeDo from "./WhatWeDo";
import ProjectScroll from "./ProjectScroll";
import ServiceSection from "./ServiceSection";
import ServicePage from "./ServicePage";
import ContactFooter from "../Cases/ContactFooter";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Large 'n' Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <img
            src={"src/assets/images/image copy 4.png"}
            alt="Brand Graphic"
            className="w-[80%] max-w-2xl object-contain"
          />
        </div>

        {/* Main Headline */}
        <div className="relative z-10 text-center uppercase">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-6xl md:text-9xl font-bold tracking-tight"
          >
            Boost Your
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#00e5ff] text-6xl md:text-9xl font-bold tracking-tight mt-[-5px] md:mt-[-20px]"
          >
            Growth
          </motion.h1>
        </div>

        {/* Signature Blue Target Icon */}
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-40">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse opacity-50" />
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          </div>
        </div>
      </section>
      <WhatWeDo />
      <ProjectScroll />
      <ServiceSection />
      <ServicePage />
      <ContactFooter />
    </>
  );
};
export default Hero;
