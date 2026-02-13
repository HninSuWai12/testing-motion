import { motion } from "framer-motion";
import { useCursor } from "../../../Context/CursorContext";
import { FaNoteSticky } from "react-icons/fa6";
import Cards from "./Cards";
import ContactFooter from "./ContactFooter";

const Header = () => {
  const { setCursorType } = useCursor();

  const marqueeDuration = 20;

  const CaseStudyItem = () => (
    <div className="flex items-center gap-6 flex-shrink-0">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "150px" }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-[2px] bg-violet-600 hidden md:block"
      />

      <h1 className="text-6xl md:text-8xl font-bold uppercase flex items-baseline gap-4">
        <span className="text-violet-600">Case</span>
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: "1px #7c3aed",
            fontFamily: "sans-serif",
          }}
        >
          Studies
        </span>
      </h1>
    </div>
  );

  return (
    <div className="bg-[#f8f7f2]">
      <section
        onMouseEnter={() => setCursorType("first")}
        onMouseLeave={() => setCursorType("default")}
        className="relative w-full h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-[#f8f7f2] cursor-none"
      >
        {/* Foreground Content */}
        <div className="relative z-20 text-center px-4 mb-10">
          <h2 className="text-5xl md:text-6xl font-medium text-[#4a4a4a] leading-tight max-w-5xl mx-auto">
            We are in the business of building capabilities for our clients,
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden py-4">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: marqueeDuration,
              repeat: Infinity,
            }}
          >
            <CaseStudyItem />
            <CaseStudyItem />
            <CaseStudyItem />
            <CaseStudyItem />
          </motion.div>
        </div>
        <div className="relative z-20 text-center px-4 mb-10">
          <h2 className="text-5xl md:text-6xl font-medium text-[#4a4a4a] leading-tight max-w-5xl mx-auto">
            from startup to industry leaders
          </h2>
        </div>
      </section>
      <Cards />
      <ContactFooter />
    </div>
  );
};

export default Header;
