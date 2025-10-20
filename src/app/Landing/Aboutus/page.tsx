"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOnWhite, setIsOnWhite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect white sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("#white-section");
      const headerHeight = 58;
      let overlapping = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          overlapping = true;
        }
      });

      setIsOnWhite(overlapping);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full h-[58px] z-[50] flex justify-end">
        <div className="w-full flex justify-end backdrop-blur-[21px] bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
          <Button
            variant="ghost"
            className="transition-colors duration-500"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <img
              className="w-[42px] object-cover transition-all"
              alt="Menu icon"
              src={isOnWhite ? "/Group 1 (1).svg" : "/Group 1.svg"} // 🟢 swap your icons here
            />
          </Button>
        </div>
      </header>

      {/* FULLSCREEN DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 text-white flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col items-center gap-8 text-3xl font-medium"
            >
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </motion.div>

            {/* CLOSE BUTTON */}
            <Button
              onClick={() => setMenuOpen(false)}
              variant="ghost"
              className="absolute top-8 right-8 text-white text-xl"
            >
              ✕
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
