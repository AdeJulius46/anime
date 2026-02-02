"use client";
import React, { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const supportServices = [
  {
    number: "01",
    title: "Resources",
    subtitle:"View resources",
    imageSrc: "Frame 10.png",
    link:"/Resources"
  },
  {
    number: "02",
    title: "Peer Support",
      subtitle:"View resources",
    imageSrc: "Frame 11.png",
     link:"https://docs.google.com/document/d/1UALw-XbJuXYkByPqfzr4aGayja2oPhTbWSv_aQhhDEg/edit?tab=t.0#heading=h.vg62idl7d3v9"
  },
  {
    number: "03",
    title: "Educational Resources",
    subtitle:"View resources",
    imageSrc: "Frame 12.png",
     link:"https://docs.google.com/document/d/1UALw-XbJuXYkByPqfzr4aGayja2oPhTbWSv_aQhhDEg/edit?tab=t.0#heading=h.vg62idl7d3v9"
  },
];

const Comprehensive = () => {
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
        {/* Section Heading */}
        <motion.h2
             id="white-section"
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
          className="  [font-family:'Sora',Helvetica] text-[14px]  text-[#2c2c2c] md:text-[18px] text-base md:text-lg max-w-3xl mb-5"
        >Navigating the path to recovery can be overwhelming. Active in Recovery provides comprehensive services accessible throughout Wyoming, ensuring that help is always within reach—no matter where someone is in the state.
        </motion.p>
            <Link href="https://www.paypal.com/donate/?hosted_button_id=3QFXZYJ45DZLA">
        <button className="bg-black text-white px-12  text-[18px] font-[400] py-3 cursor-pointer ">
          Donate
        </button>  
            </Link>

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
                <div className="flex-1  gap-4   flex md:items-start text-center md:text-left space-y-4">
                  <span className="font-['Sora'] text-[#2c2c2c] text-2xl">
                    {service.number}
                  </span> 
                  <div className="flex flex-col py-2">
                  <h3 className="font-serif font-[400]  text-[#2c2c2c] text-[20px] md:text-[47px] leading-tight">
                    {service.title}
                  </h3>
                  <Link href={service.link}>
                    <motion.p className="text-start  md:mt-10 text-[#2c2c2c] underline text-[16px] md:text-lg font-['Sora'] cursor-pointer">
                    {service.subtitle}
                  </motion.p>
                  </Link>
            
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

        {/* Footer text */}
        <p className="mt-10 text-center  text-black text-[13px]  md:text-[18px] font-['Sora'] cursor-pointer">
          If you need information or support, reach out,
        </p>
        <motion.p className="text-center font-['DM_Serif_Text'] text-[#2c2c2c] text-[24px] md:text-[32px] max-w-3xl">
            info@activeinrecovery.org
        </motion.p>
        <motion.p className="text-center mt-4 font-['DM_Serif_Text'] text-[#2c2c2c] text-[24px] md:text-[32px] max-w-3xl">
       Support services are built to work together, providing continuous care that adapts as each person’s recovery journey grows and changes.
        </motion.p>

          <Link href="https://www.paypal.com/donate/?hosted_button_id=3QFXZYJ45DZLA">
        <button className="bg-black text-white px-12  text-[18px] font-[400] py-3  mt-6  cursor-pointer">
          Donate
        </button>  
            </Link>

      </section>
    </div>
  );
};

export default Comprehensive;
