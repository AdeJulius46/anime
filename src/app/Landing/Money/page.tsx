"use client";
import React from "react";
import { motion } from "framer-motion";

function Money() {
  const words = ["Where Grit", "Meets", "Giving"];

  return (
    <section className="w-full relative self-center flex flex-col  items-center justify-center md:h-[100vh] bg-[url('/first.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated Heading */}
      <h2 className="relative w-full  z-10 flex flex-col md:flex-row justify-around items-center gap-2 text-white [font-family:'DM_Serif_Text',Helvetica] font-normal text-[40px] md:text-[56px] text-center tracking-[0] leading-normal">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 2.2, // slower, smooth motion
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.8, // wave-like stagger
            }}
            viewport={{ once: true, amount: 0.4 }} // trigger when 40% in view
            style={{ willChange: "transform, opacity, filter",
               marginLeft: `${i * 80}px`,
              marginTop: `${i * 25}px`

            }}
            
            className="md:ml-0"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <p className="  px-8  py-4  md:w-[800px]  pt-[30px]  md:pt-[190px] text-[#FFFFFF] text-[14px] md:text-[18px] z-10 text-center ">
        As a grassroots organization, Active in Recovery relies on community support to sustain and grow our impact. Together, we're creating a Wyoming where recovery is celebrated, supported, and accessible to all.
      </p>
    </section>
  );
}

export default Money;
