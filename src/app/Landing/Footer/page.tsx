"use client"
import React from 'react'
import { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";

function Footer() {
   const containerRef = useRef(null);
       const isInView = useInView(containerRef, { once: true, margin: "-100px" })
       
         const { scrollYProgress } = useScroll({
           target: containerRef,
           offset: ["start start", "end end"],
         });
       
    
  return (
    <div className='w-full'>

        <motion.footer 
           ref={containerRef}
       
        className=" relative h-[257px] w-full self-center flex flex-col justify-center  items-center  bg-[#170900]">
        <motion.p 
          initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 1,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
        className="  font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
          Contact our development coordinator
        </motion.p>

        <motion.p
          initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 2,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
        className='px-8  font-normal text-white text-[21px] md:text-[32px] text-center tracking-[0] leading-[normal]'>
            air.activeinrecovery@gmail.com
        </motion.p>
        <motion.div 
          initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 3,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
        className=' px-8 md:px-0  gap-2  mt-[20px] md:mt-[40px]'>
        <p className="[font-family:'Sora',Helvetica] text-white text-[14px] md:text-lg text-center tracking-[0] leading-[normal]">
          We’re grateful to walk this road with you- Wyoming spirit
            </p>
        <p className=" [font-family:'Sora',Helvetica]  text-[14px] md:text-lg  [font-family:'Sora',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
         and straight-shooting support included.
        </p>
        </motion.div>
      </motion.footer>
    </div>
  )
}

export default Footer