"use client"
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

const Header = () => {
  const [isOnWhite, setIsOnWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Select ALL elements with id="white-section"
      const whiteSections = document.querySelectorAll("#white-section");
      const headerHeight = 58;
      let isOverWhite = false;

      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Detect if header overlaps any white section
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          isOverWhite = true;
        }
      });

      setIsOnWhite(isOverWhite);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="  md:hidden lg:hidden    fixed top-0 w-full   h-[58px] z-[12] flex justify-end">
      <div className=" md:hidden lg:hidden   w-full flex justify-end backdrop-blur-[21px] backdrop-brightness-[100%] bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
        <Button
          variant="ghost"
          className="transition-colors duration-500"
          aria-label="Menu"
        >
          <div className="h-2 flex flex-col gap-[7px] transition-all duration-500">
            <img
              className="w-[42px] -mt-px object-cover transition-all duration-500"
              alt="Menu"
              src={isOnWhite ? "/Group 1 (1).svg" : "/Group 1.svg"}
            />
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
