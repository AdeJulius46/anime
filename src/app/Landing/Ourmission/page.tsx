"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Ourmission() {
  const sectionRef = useRef(null);

  // Track overall scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle scaling effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1]);

  const missionItems = [
    {
      title: "Empower Lives",
      description: "Providing the tools and support needed for lasting recovery",
      imageSrc: "Frame 4.png",
      iconSrc: "Frame 5.png",
      imageTop: "top-[122px]",
      imageLeft: "left-[653px]",
      iconTop: "top-[579px]",
      iconLeft: "left-[278px]",
      titleTop: "top-[122px]",
      descTop: "top-[196px]",
    },
    {
      title: "Reduce Stigma",
      description:
        "Transforming perception through awareness, action and education",
      imageSrc: "Frame 6.png",
      iconSrc: "Frame7.png",
      imageTop: "top-[885px]",
      imageLeft: "left-[653px]",
      iconTop: "top-[1342px]",
      iconLeft: "left-[278px]",
      titleTop: "top-[885px]",
      descTop: "top-[959px]",
    },
    {
      title: "Build a Stronger Wyoming",
      description: "Empowering individuals to heal communities",
      imageSrc: "Frame 8.png",
      iconSrc: "Frame 9.png",
      imageTop: "top-[1648px]",
      imageLeft: "left-[653px]",
      iconTop: "top-[2105px]",
      iconLeft: "left-[278px]",
      titleTop: "top-[1648px]",
      descTop: "top-[1786px]",
    },
  ];

  return (
    <div ref={sectionRef} className="w-full bg-[#fff] h-[330vh] relative overflow-hidden">
      <section className="w-full bg-[#fff] relative">
        <h2 className="absolute top-0 left-[calc(50.00%_-_212px)] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[56px] tracking-[0] leading-[normal]">
          Our Mission &amp; Vision
        </h2>

        {missionItems.map((item, index) => (
          <React.Fragment key={`mission-${index}`}>
            {/* Subtle animated image */}
            <motion.img
              src={item.imageSrc}
              alt={`${item.title} image`}
              className={`absolute ${item.imageTop} ${item.imageLeft} w-[759px] h-[703px] object-cover`}
              style={{ scale }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Static icon */}
            <img
              src={item.iconSrc}
              alt={`${item.title} icon`}
              className={`absolute ${item.iconTop} ${item.iconLeft} w-[346px] h-[246px] object-cover`}
            />

            {/* Title */}
            <h3
              className={`absolute ${item.titleTop} left-[calc(50.00%_-_676px)] ${
                index === 2 ? "w-[351px]" : ""
              } [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[47px] tracking-[0] leading-[normal]`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`absolute ${item.descTop} left-[calc(50.00%_-_670px)] w-[425px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg tracking-[0] leading-[normal]`}
            >
              {item.description}
            </p>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default Ourmission;
