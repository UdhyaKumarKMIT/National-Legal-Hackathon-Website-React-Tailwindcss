import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Contacts from "./components/contacts";
import Guidelines from "./components/Guidelines";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [smallCursor, setSmallCursor] = useState({ x: 0, y: 0 });
  const [largeCursor, setLargeCursor] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setSmallCursor({ x: e.clientX, y: e.clientY });

      // Smoothly animate the large cursor with a slight delay
      setTimeout(() => {
        setLargeCursor({ x: e.clientX, y: e.clientY });
      }, 80);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "P" || e.target.tagName === "A") {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === "P" || e.target.tagName === "A") {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Small fast-moving cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full pointer-events-none"
        animate={{
          x: smallCursor.x - 8, // Center the cursor
          y: smallCursor.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Larger trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-11 h-11 bg-orange-400 rounded-full pointer-events-none mix-blend-difference"
        animate={{
          x: largeCursor.x - 24, // Center larger cursor
          y: largeCursor.y - 24,
          scale: isHovering ? 1.6 : 1, // Subtle scale effect on hover
        }}
        transition={{ type: "spring", stiffness: 470, damping: 25 }}
      />
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <CustomCursor /> {/* Add the animated cursor */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Guidelines />
        <Workflow />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default App;
