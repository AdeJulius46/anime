"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const partnershipItems = [
  {
    title: "Funding Initiatives",
    description:
      "Advocating for increased public and private funding for substance abuse and mental health programs throughout Wyoming. ",
    image:
      "/Frame 14 (4).png",
  },
  {
    title: "Educational Campaigns",
    description:
      "Creating awareness campaigns that reduce stigma and promote understanding of addiction and mental health disorders. ",
    image:
      "/Frame 14 (5).png",
  },
  {
    title: "Community Mobilization",
    description:
      "Engaging communities across Wyoming to support recovery initiatives and create welcoming environments for those in recovery. ",
    image:
      "/Frame 14 (6).png",
  },
];

export default function OurPartner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ activeIndex, setActiveIndex] = useState(0);

  // track scroll progress of the right column
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // map scroll progress to index changes
  const total = partnershipItems.length;
  const sectionPoints = partnershipItems.map((_, i) => i / (total - 1));

  useEffect(() => {
  const unsubscribe = scrollYProgress.on("change", (v) => {
    const sectionHeight = 1 / total;
    const index = Math.floor(v / (sectionHeight * 0.5)); // trigger sooner (0.5 = 50% threshold)
    const clamped = Math.max(0, Math.min(index, total - 1));
    setActiveIndex(clamped);
  });
  return () => unsubscribe();
}, [scrollYProgress, total]);

  return (
    <section
      id="white-section Our-Strategic-Partnership"
      className="relative w-full bg-white flex flex-col items-center py-16"
    >
      <h2 className="text-[32px] mt-[15px] w-64 md:w-full md:text-[56px] font-serif text-[#2D2D2D] text-center mb-16">
       Advocating for Change
      </h2>

      <div
        ref={containerRef}
        className="relative flex w-full max-w-[1352px] gap-[46px] md:min-h-[250vh]"
      >
        {/* Left pinned image */}
        <div className="flex-1 flex justify-center">
          
          <div className="sticky top-24 w-[529px] h-[547px] hidden md:flex overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={partnershipItems[activeIndex].image}
                alt={partnershipItems[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right scroll column */}
        <div className="w-[677px] flex flex-col px-4">
          {partnershipItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity:
                  activeIndex === index || activeIndex > index ? 1 : 0.25,
                y: activeIndex === index ? 0 : 5,
                scale: activeIndex === index ? 1 : 0.98,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col   gap-0    h-[26vh] md:h-[40vh]"
            >
              <h3 className="text-[20px] md:text-[32px] font-serif text-[#2c2c2c]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[18px] text-[#2c2c2c] leading-relaxed [font-family:'Sora',Helvetica] px-2">
                {item.description}
              </p>
              {index < partnershipItems.length - 1 && (
                <div className="h-[1px] bg-gray-200 " />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
