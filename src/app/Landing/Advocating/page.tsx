"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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

export default function Advocating() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Properly typed ref for multiple div elements
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, i) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative w-full bg-white flex flex-col items-center py-16 "   id="white-section">
      <h2 className=" text-[30px]    md:w-full  md:text-[56px] font-serif text-[#2D2D2D] text-center mb-16">
       Advocating for Change
      </h2>

      <div className="relative flex w-full max-w-[1352px] gap-[26px]">
        {/* Left sticky image */}
        <div className="flex-1 flex justify-center">
          <div className="sticky top-24 w-[529px] h-[537px] hidden md:flex  overflow-hidden ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={partnershipItems[activeIndex].image}
                alt={partnershipItems[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="  absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right content */}
        <div className="w-[677px] flex flex-col space-y-2">
          {partnershipItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.25,
                y: activeIndex === index ? 0 : 10,
                scale: activeIndex === index ? 1 : 0.99,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-2  h-35vh   md:min-h-[35vh]"
            >
              <h3 className="text-[20px] md:text-[32px] font-serif text-[#2c2c2c]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[18px] text-[#2c2c2c] leading-relaxed [font-family:'Sora',Helvetica] px-2">
                {item.description}
              </p>
              {index < partnershipItems.length - 1 && (
                <div className="h-[1px] bg-gray-200 mt-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
