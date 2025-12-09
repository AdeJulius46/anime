"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const partnershipItems = [
  {
    title: "Treatment Faculties",
    description:
      "Creating seamless referral pathways with rehab centers and mental health facilities across Wyoming.",
    image: "/Frame 14.png",
  },
  {
    title: "Healthcare Providers",
    description:
      "Working with doctors, nurses, therapists, and mental health professionals to ensure quality care throughout the recovery journey.",
   image: "/Frame14(4).png",
  },
  {
    title: "Community Organizations",
    description:
      "Partnering with local groups to extend our reach into every Wyoming community, including faith-based organizations, schools, employers, and grassroots coalitions.",
    image: "/Frame14(3).png",
  },
  {
    title: "Government Agencies",
    description:
      "Collaborating with state and local agencies to improve access to services for all Wyoming residents.",
       image: "/Frame 60.png",
   
  },
];

export default function OurPartner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1); // start inactive

  // IntersectionObserver to trigger image change only when item fully in view
  useEffect(() => {
    const elements = document.querySelectorAll(".partner-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      {
        threshold: 0.7, // require 60% of the item visible
        rootMargin: "0px 0px -20% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="Our-Strategic-Partnership"
      className="relative w-full bg-white flex flex-col items-center md:py-16"
    >
      <h2 className="text-[32px] w-64 mt-[20px] md:w-full md:text-[56px] font-serif text-[#2D2D2D] text-center mb-16"
      id="white-section"
      >
        Our Strategic Partnerships
      </h2>

      <div
        ref={containerRef}
        className="relative flex w-full max-w-[1352px] gap-[46px]  min-h-[60vh] md:min-h-[140vh]"
      >
        {/* Left pinned image */}
        <div className="flex-1 flex justify-center">
          <div className="sticky top-24 w-[529px] h-[647px] hidden md:flex overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={
                  activeIndex >= 0
                    ? partnershipItems[activeIndex].image
                    : partnershipItems[0].image
                }
                alt={
                  activeIndex >= 0
                    ? partnershipItems[activeIndex].title
                    : partnershipItems[0].title
                }
                initial={{ opacity: 0, scale: 1.05, y: 20 }}
                animate={{
                  opacity: activeIndex >= 0 ? 1 : 0,
                  scale: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right scroll column */}
        <div className="w-[677px] flex flex-col">
          {partnershipItems.map((item, index) => (
            <motion.div
              key={index}
              data-index={index}
              className="partner-item flex flex-col py-8  md:py-12 px-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.25,
                y: activeIndex === index ? 0 : 10,
                scale: activeIndex === index ? 1 : 0.98,
              }}
              transition={{
                duration: 0.7, // slightly slower for smoothness
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-[20px] md:text-[32px] font-serif text-[#2c2c2c]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[18px] text-[#2c2c2c] leading-relaxed [font-family:'Sora',Helvetica] px-2">
                {item.description}
              </p>
              {index < partnershipItems.length - 1 && (
                <div className="h-[1px] bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
