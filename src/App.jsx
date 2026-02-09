import { Accordion, AccordionItem } from "@heroui/react";
import ScrollTwoLayer from "./motion";
import NeonCursor from "./components/motion/NeonCousor.jsx";
import About from "./components/pages/About.jsx";
import Footer from "./components/pages/Footer.jsx";
import { GradualSpacing } from "./components/motion/GardulSpacing.jsx";
import { HeaderNavbar } from "./components/pages/HeaderNavbar.jsx";
import SlideDownText from "./components/motion/SlideDownText.jsx";

export default function App() {
  return (
    <>
      <NeonCursor />
      <HeaderNavbar />
      {/* <GradualSpacing />
      <About /> */}
      {/* <GradualSpacing /> */}
      <ScrollTwoLayer />
      {/* <SlideDownText /> */}
      {/* <div
        style={{
          background: "linear-gradient(to bottom, #292b2e, #C7FF00)",
        }}
        className="h-screen w-full flex items-center justify-center rounded-1xl overflow-hidden"
      >
        <About />
      </div> */}
      <Footer />
    </>
  );
}
