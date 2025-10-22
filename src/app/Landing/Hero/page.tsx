"use client"
import React, { use } from "react";
import { motion, MotionValue, useTransform,useScroll } from "framer-motion";


const Hero = () => {
  // Example scroll-based animation: fade & slight parallax
 const { scrollYProgress } = useScroll();

  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "40vh"]);


  return (
    

    <motion.section
      style={{ height}}
         initial={{ scale: 1.2}}
        animate={{ scale: 1 }}
        transition={{
          delay:1,
          duration:2,
          ease: [0.25, 1, 0.5, 1], // smooth cinematic ease
        }}
      className="sticky  top-0 h-screen bg-[url('/landing.png')] bg-cover bg-center bg-no-repeat flex justify-center  items-center"
    >
 
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-lg" />
      {/* Hero content */}
      <div className=" flex flex-col items-center   justify-center text-center text-white  mt-[390px] md:mt-[390px]  md:px-[45px]  ">
        <motion.h3 className="font-[400] text-[16px]   [font-family:'Sora',Helvetica]   w-64 md:w-full  md:text-[24px] "
        initial={{ opacity: 0  }} // starts lower and invisible
      animate={{ opacity: 1, y:68}}  // fades in and slides up
      transition={{
         delay: 2,                        // ⏳ wait 3 seconds before starting
         duration: 2,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}        
        >
          Empowering individuals to reduce stigma and build a stronger.
        </motion.h3>
        <motion.h1 className="text-[60px] mt-[80px] font-[400] md:mt-[0] leading-none text-center  md:leading-[1.5] font-serif  uppercase md:text-[126px] z-10"
         initial={{ opacity: 0, y: 90 }} // starts lower and invisible
      animate={{ opacity: 1, y: 30 }}  // fades in and slides up
      transition={{
        duration:1,  
        delay:2,      // animation speed
        ease: "easeOut",    // smooth easing
      }}
        
        >Active in Recovery</motion.h1>

      </div>
    </motion.section>
  );
};

export default Hero;
