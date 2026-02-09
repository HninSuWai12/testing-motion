import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import { GradualSpacing } from "./components/motion/GardulSpacing";
import { HeaderNavbar } from "./components/pages/HeaderNavbar";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
import SlideDownText from "./components/motion/SlideDownText";
export default function ScrollTwoLayer() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll → animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div ref={containerRef} className="relative w-full ">
      {/* FIRST LAYER (UNDER) */}
      <section className="sticky top-0 h-screen">
        <GradualSpacing />
      </section>

      <motion.section
        style={{
          y,

          background: "linear-gradient(to bottom, #0c0c0b, #C7FF00)",
        }}
        className="
          relative
          w-full
          min-h-screen
          overflow-visible
          rounded-xl
          flex
          flex-col
          gap-24
          py-32
        "
      >
        <About />
        <SlideDownText />
      </motion.section>

      {/* <Footer /> */}

      {/* SECOND LAYER (TOP) */}
    </div>
  );
}
