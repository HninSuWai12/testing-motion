import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import { GradualSpacing } from "./components/motion/GardulSpacing";
import { HeaderNavbar } from "./components/pages/HeaderNavbar";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
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
      <HeaderNavbar />
      <motion.section style={{ y, opacity, scale }} className=" ">
        <motion.div className="sticky top-0 flex flex-col gap-12 h-screen flex items-center justify-center  z-10 bg-neutral-950 h-[100vh]">
          <h1 className="hidden md:block my-0 text-8xl font-bold text-transparent [-webkit-text-stroke:2px_white] z-10">
            Creating
          </h1>

          <GradualSpacing
            id="hero-section"
            style={{ y, opacity, scale }}
            className="sticky top-0 flex flex-col gap-12 h-screen items-center justify-center bg-white z-10"
          />
        </motion.div>
        <motion.div>
          <About />
        </motion.div>
      </motion.section>

      <Footer />

      {/* SECOND LAYER (TOP) */}
    </div>
  );
}
