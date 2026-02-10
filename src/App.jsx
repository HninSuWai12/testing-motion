import { Accordion, AccordionItem } from "@heroui/react";
import ScrollTwoLayer from "./motion";
import NeonCursor from "./components/motion/NeonCousor.jsx";
import About from "./components/pages/About.jsx";
import Footer from "./components/pages/Footer.jsx";
import { GradualSpacing } from "./components/motion/GardulSpacing.jsx";
import { HeaderNavbar } from "./components/pages/HeaderNavbar.jsx";
import SlideDownText from "./components/motion/SlideDownText.jsx";
import OurClient from "./components/pages/OurClient.jsx";
import Award from "./components/pages/Award.jsx";

export default function App() {
  return (
    <>
      <NeonCursor />
      <HeaderNavbar />

      <ScrollTwoLayer />
      <OurClient />
      <Award />

      <Footer />
    </>
  );
}
