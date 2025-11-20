"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useTransform,useScroll } from "framer-motion";


const Hero2 = () => {

//   const height = useTransform(scrollYProgress, [0, 1], ["100vh", "40vh"]);

const container = useRef(null);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
});

// const scale4 = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [14, 1]); // zooms out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1.5], [0, 1, 1]);
 
  return (
    <section  ref={container}  className="hidden md:block  h-[130vh] relative ">

    <section  className=" sticky  top-0 h-screen bg-[url('/landing.png')] bg-cover bg-center bg-no-repeat flex justify-center  items-center" >
     <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-lg" />
      {/* Hero content */}
      <div className=" flex flex-col items-center justify-end    md:justify-center text-center text-white  mt-[550px] md:mt-[390px]  md:px-[45px]  ">
        <h3 className="font-[400] text-[16px]   [font-family:'Sora',Helvetica]   w-64 md:w-full  md:text-[24px] "     
        >
          Empowering individuals to reduce stigma and build a stronger.
        </h3>
        <h1 className="text-[60px] z-10 mt-[40px] font-[400] md:mt-[0] leading-none text-center  md:leading-[1.5] font-serif  uppercase md:text-[126px] "
        
        >Active in Recovery</h1>

      </div>

    <div className="el z-20">
        <motion.div 
        style={{ scale: scale4, opacity: opacity }} 
         className="w-full h-[100vh] relative items-center  bg-white  flex justify-center ">

            <div  className="   text-[#000] text-[25px] md:text-[30px] items-center justify-center flex jul">
                <h1 className="md:text-[140px] text-center md:leading-[1.5] font-serif uppercase 
             bg-[url('/landing.png')] bg-cover bg-center 
             text-transparent bg-clip-text">
                  Active in Recovery
                </h1>

            </div>
        {/* <Image src="/Frame3.png" alt="Landing Image" layout="fill"   /> */}
        </motion.div>
    </div>

    </section>
    </section>
  );
};

export default Hero2;