import { Accordion, AccordionItem } from "@heroui/react";
import ScrollTwoLayer from "./motion";
import NeonCursor from "./components/motion/NeonCousor.jsx";
import About from "./components/pages/About.jsx";
import Footer from "./components/pages/Footer.jsx";

export default function App() {
  return (
    <>
      <NeonCursor />
      <ScrollTwoLayer />
      {/* <About /> */}
      {/* <Footer /> */}
    </>
  );
}
