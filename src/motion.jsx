import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./App.css";
import { GradualSpacing } from "./components/motion/GardulSpacing";
import { HeaderNavbar } from "./components/pages/HeaderNavbar";
import About from "./components/pages/About";
import SlideDownText from "./components/motion/SlideDownText";
import { useCursor } from "./Context/CursorContext";
export default function ScrollTwoLayer() {
  const containerRef = useRef(null);
  const { setCursorType } = useCursor();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll → animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div
      ref={containerRef}
      className="relative w-full pb-[28.5vh]"
      onMouseEnter={() => setCursorType("first")}
      onMouseLeave={() => setCursorType("first")} // 🔑 KEY FIX
    >
      {/* FIRST LAYER */}
      <section className="sticky top-0 h-screen">
        <GradualSpacing />
      </section>

      {/* SECOND LAYER */}
      <motion.section
        style={{
          y,
          background: "linear-gradient(to bottom, #0c0c0b, #C7FF00)",
        }}
        className="
          relative
          w-full
          min-h-screen
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
    </div>
  );
}
