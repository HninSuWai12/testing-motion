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
import OurWork from "./components/pages/OurWork.jsx";
import TechStack from "./components/pages/TechStack.jsx";
import Idea from "./components/pages/Idea.jsx";
import TechIdea from "./components/motion/TechIdea.jsx";

export default function App() {
  return (
    <>
      <NeonCursor />
      <HeaderNavbar />

      <div className="relative z-10 bg-white shadow-xl">
        <ScrollTwoLayer />
        <OurClient />
        <Award />
        <OurWork />
        <TechStack />
        <Idea />
      </div>

      <footer className="sticky bottom-0 z-0 h-screen">
        <Footer />
      </footer>
    </>
  );
}
