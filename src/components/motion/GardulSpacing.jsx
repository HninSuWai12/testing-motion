"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export function GradualSpacing() {
  const [homeText, setHomeText] = useState(0);

  const texts = [
    "|",
    "What is Next",
    "Opportunities",
    "Growth",
    "Experience",
    "Accessibility",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeText((prev) => ((prev - 1 + 1) % (texts.length - 1)) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const cursor = texts[0];

  return (
    <div className="  flex flex-col gap-12 h-[100vh] flex items-center justify-center   bg-neutral-950 ">
      <h1 className=" my-0 text-8xl font-bold text-transparent [-webkit-text-stroke:2px_white] z-10">
        Creating
      </h1>
      <div className="flex justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[homeText]}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-1 select-none caret-transparent"
          >
            {texts[homeText].split("").map((char, i) => {
              const isThin = char === "|";
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-xl sm:text-4xl md:text-6xl tracking-tight text-yellow-500 ${
                    isThin ? "font-thin" : "font-bold"
                  }`}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
            {homeText !== 0 && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="ml-1 text-yellow-500 font-thin text-xl sm:text-4xl md:text-6xl"
              >
                {cursor}
              </motion.span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
