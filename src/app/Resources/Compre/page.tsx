"use client";
import React, { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const supportServices = [
  {
    number: "01",
    title: "Addiction Severity Index",
    subtitle:"Click here to apply",
    imageSrc: "Frame90.png",
  },
  {
    number: "02",
    title: "Community Service Block Grantt",
      subtitle:"Click here to apply",
    imageSrc: "Frame98.png",
  },
  {
    number: "03",
    title: "Jeff Smith Outdoorsman Fund ",
    subtitle:"Click here to apply",
    extras:"The Jeff Smith Outdoorsman Fund honors the life of Jeff Smith, an avid outdoorsman who found peace, connection, and joy in the Rocky Mountain outdoors. After losing his battle with alcohol addiction, this fund was created in his memory to help others in recovery experience the healing power of nature and movement.  The fund provides financial support for individuals in recovery to participate in outdoor activities, sports, and community events throughout the Rocky Mountain region. By removing financial barriers, the Jeff Smith Outdoorsman Fund encourages active, meaningful connection and supports recovery beyond abstinence.  If you are active in recovery and would benefit from support to participate in outdoor or recreational activities, we encourage you to apply.",
    imageSrc: "Frame100.png",
  },
];

const Compre = () => {
  const containerRef = useRef(null);
   const isInView = useInView(containerRef, { once: true, margin: "-100px" })

 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start 80%", "end 20%"], // 👈 starts when top of section hits 80% of viewport height
});

  return (
    <div className="w-full bg-[#fff] relative ">
      <section
        ref={containerRef}
          id="Comprehensive-Support"
        className="w-full min-h-screen bg-[#fff] relative  flex flex-col items-center justify-start py-20 md:py-32 px-6 md:px-12"
      >
       
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
                className={`flex flex-col   md:flex-row `}
              >
                {/* Text Section */}
                <div className="flex-1  gap-4   flex md:items-start text-center md:text-left space-y-4 ">
                  <div className="flex flex-col py-2">
                  <h3 className="font-serif font-[400]  text-[#2c2c2c] text-[20px] md:text-[47px] leading-tight">
                    {service.title}
                  </h3>
                  <Link href="https://docs.google.com/document/d/1UALw-XbJuXYkByPqfzr4aGayja2oPhTbWSv_aQhhDEg/edit?tab=t.0#heading=h.vg62idl7d3v9">
                    <motion.p className="text-start  md:mt-10 text-[#2c2c2c] underline text-[16px] md:text-lg font-['Sora'] cursor-pointer">
                    {service.subtitle}
                  </motion.p>
                  </Link>
                  <h3 className="text-[#2c2c2c] text-[16px] md:text-lg font-['Sora'] mt-4 pr-3">
                    {service.extras}
                  </h3>
            
                  </div>
                  
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

      </section>
    </div>
  );
};

export default Compre;
