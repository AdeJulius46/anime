"use client";
import React, { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";

const supportServices = [
  {
    number: "01",
    title: "Resource Database",
    imageSrc: "Frame 10.png",
  },
  {
    number: "02",
    title: "Peer Support",
    imageSrc: "Frame 11.png",
  },
  {
    number: "03",
    title: "Educational Resources",
    imageSrc: "Frame 12.png",
  },
];

const Comprehensive = () => {
  const containerRef = useRef(null);
   const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="w-full bg-[#fff] relative ">
      <section
        ref={containerRef}
          id="white-section"
        className="w-full min-h-screen bg-[#fff] relative  flex flex-col items-center justify-start py-20 md:py-32 px-6 md:px-12"
      >
        {/* Section Heading */}
        <motion.h2
           initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}

          className="text-center font-serif  text-[#2c2c2c] text-[32px] md:text-[56px] mb-6"
        >
          Comprehensive Support Services
        </motion.h2>

        <motion.p
        initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 1,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
          className="text-center  [font-family:'Sora',Helvetica] text-[14px]  text-[#2c2c2c] md:text-[18px] text-base md:text-lg max-w-2xl mb-16"
        >
          At Active in Recovery, we understand that navigating the path to
          recovery can be overwhelming. Our comprehensive services are accessible
          throughout Wyoming, ensuring that no matter where you are in the state,
          help is always within reach.
        </motion.p>

        {/* Services */}
        <div className="flex flex-col w-full  ">
          {supportServices.map((service, index) => {
            const start = 0.1 + index * 0.25;
            const end = start + 0.25;

            const serviceProgress = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );

            const y = useTransform(serviceProgress, [0, 1], [10 + index * 50, 0]);
            const opacity = useTransform(serviceProgress, [0, 0.3, 1], [0, 0.5, 1]);
            const scale = useTransform(serviceProgress, [0, 1], [0.85, 1]);

            return (
              <motion.div
                key={`service-${index}`}
                style={{ y, opacity, scale }}
                className={`flex flex-col  border-t border-t-black  md:flex-row  py-6`}
              >
                {/* Text Section */}
                <div className="flex-1  gap-2   flex md:items-start text-center md:text-left space-y-4">
                  <span className="font-['Sora'] text-[#2c2c2c] text-2xl">
                    {service.number}
                  </span> 
                  <h3 className="font-serif font-[400]  text-[#2c2c2c] text-[20px] md:text-[47px] leading-tight">
                    {service.title}
                  </h3>
                  
                </div>

                {/* Image */}
                <motion.img
                  src={service.imageSrc}
                  alt={service.title}
                  className="flex-1 w-full max-w-[500px] md:max-w-[759px] h-auto object-cover shadow-lg"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Footer text */}
        <motion.p className="text-center mt-24 font-['DM_Serif_Text'] text-[#2c2c2c] text-[24px] md:text-[32px] max-w-3xl">
          Support services are designed to complement each other, creating a
          continuum of care that evolves with individuals’ changing needs.
        </motion.p>

        <motion.p className="mt-10 text-[#2c2c2c] underline text-lg font-['Sora'] cursor-pointer">
          View Resource
        </motion.p>
      </section>
    </div>
  );
};

export default Comprehensive;
