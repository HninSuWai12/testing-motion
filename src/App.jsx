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
import { CursorProvider } from "./Context/CursorContext.jsx";
import Header from "./components/pages/Cases/Header.jsx";
import { Router, useLocation } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage.jsx";
import Hero from "./components/pages/Services/Hero.jsx";

export default function App() {
  const location = useLocation();
  console.log("Location", location);

  const isCasesRoute = location.pathname.includes("/cases");
  const isContactRoute = location.pathname.includes("/contact");
  const isServicesRoute = location.pathname.includes("/services");
  console.log("isCasesRoute>>", isCasesRoute);
  return (
    <CursorProvider>
      <NeonCursor />
      <HeaderNavbar />

      <div className="relative z-10 bg-white shadow-xl">
        {isCasesRoute ? (
          <>
            <Header />
          </>
        ) : isContactRoute ? (
          <>
            <ContactPage />
          </>
        ) : isServicesRoute ? (
          <>
            {" "}
            <Hero />{" "}
          </>
        ) : (
          <>
            <ScrollTwoLayer />
            <OurClient />

            <Award />
            <OurWork />
            <TechStack />
            <Idea />
          </>
        )}
      </div>

      <footer
        className={`sticky bottom-0 z-0 h-screen ${isCasesRoute == true ? "bg-[#7038FF]" : "bg-white"}`}
      >
        <Footer />
      </footer>
    </CursorProvider>
  );
}
