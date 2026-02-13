import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const headingText =
    "Every small details matter to us. Your colors, Typefaces? How does your customer service handle complaints? All of the above and More?";
  const headingWords = headingText.split(" ");

  const subText =
    "Every small details matter to us. Your colors, Typefaces? How does your customer service handle complaints? All of the above and More?";
  const subWords = headingText.split(" ");

  const xMove = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, #00acc1 0%, #000000 70%)",
            opacity: 0.2,
          }}
        />

        <div className="relative z-10 px-6 md:px-20 w-full flex flex-col gap-12">
          <div>
            <p className="text-white text-2xl font-bold uppercase mb-8 ">
              What do we do?
            </p>

            {/* The Animated "Reading" Heading */}
            <motion.h2
              style={{ x: xMove }}
              className="flex flex-wrap text-5xl  font-medium  max-w-6xl"
            >
              {headingWords.map((word, i) => {
                // Adjust these numbers to make the reading faster or slower
                const start = (i / headingWords.length) * 0.7;
                const end = start + 0.1;

                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </motion.h2>
          </div>

          <div className="flex justify-end w-full">
            <motion.p className="text-white text-sm md:text-lg max-w-md ">
              Our job is to make it more human. To build digital products, that
              help businesses do better, be better and show up in a way that
              makes our consumers' lives better.
            </motion.p>
          </div>
        </div>

        {/* Floating UI Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]">
            <div className="absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative mr-[0.25em]">
      <motion.span style={{ opacity }} className={"text-cyan-400"}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextSection;
