"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const partnershipItems = [
  {
    title: "Treatment Facilities",
    description:
      "Creating seamless referral pathways with rehab centers and mental health facilities across Wyoming.",
    image:
      "/Frame 14.png",
  },
  {
    title: "Healthcare Providers",
    description:
      "Working with doctors, nurses, therapists, and mental health professionals to ensure quality care throughout the recovery journey.",
    image:
      "/Frame 14 (1).png",
  },
  {
    title: "Community Organizations",
    description:
      "Partnering with local groups to extend our reach into every Wyoming community, including faith-based organizations, schools, employers, and grassroots coalitions.",
    image:
      "/Frame 14 (2).png",
  },
  {
    title: "Government Agencies",
    description:
      "Collaborating with state and local agencies to improve access to services for all Wyoming residents.",
    image:
      "/Frame 14 (3).png",
  },
];

export default function OurPartner() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Properly typed ref for multiple div elements
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

useEffect(() => {
  const observers: IntersectionObserver[] = [];
  const seenIndices = new Set<number>(); // ✅ track which items have been revealed

  itemRefs.current.forEach((ref, i) => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex((prev) => {
              // mark this item as seen
              seenIndices.add(i);
              return i;
            });
          }
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
    <section className="relative w-full bg-white flex flex-col items-center py-16"   id="white-section">
      <h2 className=" text-[30px] w-64  md:w-full  md:text-[56px] font-serif text-[#2D2D2D] text-center mb-16">
        Our Strategic Partnerships
      </h2>

      <div className="relative flex w-full max-w-[1352px] gap-[46px]">
        {/* Left sticky image */}
        <div className="flex-1 flex justify-center">
          <div className="sticky top-24 w-[529px] h-[647px] hidden md:flex  overflow-hidden ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={partnershipItems[activeIndex].image}
                alt={partnershipItems[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 1, scale: 0.98, y: -20 }}
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
                        opacity: activeIndex === index || activeIndex > index ? 1 : 0.25,
                        y: activeIndex === index ? 0 : 10,
                        scale: activeIndex === index ? 1 : 0.99,
                      }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-2     md:min-h-[35vh]"
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
