import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import { GradualSpacing } from "./components/motion/text-animation";

export default function ScrollTwoLayer() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll → animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* FIRST LAYER (UNDER) */}
      <motion.section
        style={{ y, opacity, scale }}
        className="sticky top-0 flex flex-col gap-12 h-screen flex items-center justify-center bg-white z-10"
      >
        <h1
          className="text-5xl font-bold"
          style={{
            color: "transparent",
            WebkitTextStrokeWidth: "2px", // thickness of the outline
            WebkitTextStrokeColor: "black", // outline color
          }}
        >
          Second Layer (Scroll Away)
        </h1>

        <GradualSpacing
          id="hero-section"
          style={{ y, opacity, scale }}
          className="sticky top-0 flex flex-col gap-12 h-screen items-center justify-center bg-white z-10"
        />
      </motion.section>

      <motion.section
        style={{ y, opacity, scale }}
        className="sticky top-0 h-screen flex items-center justify-center bg-white z-10"
      >
        <h1 className="text-5xl font-bold text-black">
          Sub Layer (Scroll Away)
        </h1>
      </motion.section>
      <section className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-0">
        <h1 className="text-5xl font-bold bg-blue-400">
          First Layer (Revealed) <p className="text-red-500"></p>
        </h1>
      </section>

      {/* SECOND LAYER (TOP) */}
    </div>
  );
}
