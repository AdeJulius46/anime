"use client";
import React from "react";
import { motion } from "framer-motion";

function Building() { 
  const words = ["Building", "a Stronger", "Wyoming"];

  return (
    <section className="w-full relative self-center flex items-center justify-center h-[40vh]  md:h-[100vh] bg-[url('/Frame 46.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated Heading */}
      <h2 className="relative w-full z-10 flex flex-col md:flex-row justify-around items-center gap-2 text-white [font-family:'DM_Serif_Text',Helvetica] font-normal text-[40px] md:text-[56px] text-center tracking-[0] leading-normal">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 2.2,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.8,
            }}
            viewport={{ once: true, amount: 0.4 }}
            style={{
              willChange: "transform, opacity, filter",
              // Apply staggered indent only on mobile (Tailwind breakpoints handled with media query)
              marginLeft: `${i * 60}px`,
              marginTop: `${i * 10}px`
            }}
            className="md:ml-0" // reset margin on desktop
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </section>
  );
}

export default Building;
