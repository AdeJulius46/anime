"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOnWhite, setIsOnWhite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle internal (#) navigation
 const handleSectionNavigation = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  setMenuOpen(false);

  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`;
  } else {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  }
};


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
      <header className="fixed top-0 w-full h-[68px] z-[50] flex" id="white-section">
        <div className="w-full flex justify-between backdrop-blur-[21px] bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
          <div className="px-4 py-2">
            <img className="w-[52px]" src="/Frame 107 (1).svg" />
          </div>
          <Button
            variant="ghost"
            className="transition-colors duration-500"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <img
              className="w-[42px] object-cover transition-all"
              alt="Menu icon"
              src={isOnWhite ? "/Group 1 (1).svg" : "/Group 1.svg"}
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
            className="fixed inset-0 z-[100] bg-white text-black bg-opacity-90 text-white flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col items-center gap-8 font-medium"
            >
              <div className="flex flex-col items-center gap-4 text-[#000] text-[18px]">
                <label>
                  <p className="text-[#8A8A8A] text-[14px]">Menu</p>
                </label>

                {/* Normal Links */}
                <a href="/" onClick={() => setMenuOpen(false)}>Home</a>

                {/* Fixed Hash Links */}
                <a href="#about" onClick={(e) => handleSectionNavigation(e, "about")}>About</a>
                <a href="#Our-Mission" onClick={(e) => handleSectionNavigation(e, "Our-Mission")}>Our Mission & Vision</a>
                <a href="#Comprehensive-Support" onClick={(e) => handleSectionNavigation(e, "Comprehensive-Support")}>Comprehensive Support Services</a>
                <a href="#Our-Strategic-Partnership" onClick={(e) => handleSectionNavigation(e, "Our-Strategic-Partnership")}>Our Strategic Partnership</a>
                <a href="#Advocating-for-Change" onClick={(e) => handleSectionNavigation(e, "Advocating-for-Change")}>Advocating for Change</a>
                <a href="#How-you-can-Support-our-Work" onClick={(e) => handleSectionNavigation(e, "How-you-can-Support-our-Work")}>How you can Support our Work</a>
                <a href="#Our-Strategic-Partnership" onClick={(e) => handleSectionNavigation(e, "Our-Strategic-Partnership")}>Our Strategic Partnership</a>
              </div>

              <div className="flex flex-col items-center text-[18px] text-[#000]">
                <label>
                  <p className="text-[#8A8A8A] text-[14px]">Store</p>
                </label>
                <a href="/Coming-soon" onClick={() => setMenuOpen(false)}>Buy Merchandise</a>
              </div>
            </motion.div>

            {/* CLOSE BUTTON */}
            <Button
              onClick={() => setMenuOpen(false)}
              variant="ghost"
              className="absolute top-8 right-8 text-[#000] text-xl"
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
