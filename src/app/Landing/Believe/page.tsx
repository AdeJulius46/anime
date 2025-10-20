"use client"
import { useRef } from 'react'
import { useInView, motion,useScroll,useTransform} from 'framer-motion'
const Believe = () => {
 const ref = useRef(null)

   const isInView = useInView(ref, { once: true, margin: "-100px" })
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
    const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6]);

  return (
    <div>
         <section className="w-full  bg-[#fff] relative   flex flex-col overflow-hidden "
            ref={ref}
              id="white-section"
         >
        {/* < motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        
        className="  mt-[60px]  self-center font-serif    font-normal text-[#2c2c2c] text-[32px]  md:text-[56px] text-center tracking-[0] leading-[normal]">
          About Us
        </motion.h1> */}


        <motion.p 
         initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 1,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
        
        className="h-[92px] md:w-[800px] text-[14px] px-8 text-start md:text-center  md:text-[18px] self-center mt-2.5  px-4 mb-[60px] [font-family:'Sora',Helvetica] font-[400] text-[#2D2D2D] text-lg text-center tracking-[0] leading-[normal]">
         We believe that addressing substance abuse and mental health challenges requires a collaborative approach. By forging strong partnerships with healthcare systems, government agencies, and community organizations, 
         we're building a robust network of support that spans the entire state of Wyoming.
        </motion.p>
        < motion.div
        
        >
            <motion.img  
              style={{scaleY,
          opacity,
          originY: 0.5}}
            
            className="ml-[-26px] w-[1204px] md:h-[703px] mt-[25px] bg-cover bg-[50%_50%]"  src={"/Frame 20.png"}  
             
            />

        </motion.div>

        <motion.p 
        initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 3,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
        className="px-  md:px-4 text-[14px] px-8 text-start md:text-center  md:text-[18px] h-[68px] md:w-[852px] self-center mt-[40px] md:mt-[110px]   md:mb-[40px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg text-center tracking-[0] leading-[normal]">
      These strategic relationships allow us to leverage diverse expertise, 
      share resources efficiently, and create a truly integrated system of care. The result is more comprehensive, accessible services for individuals and families, regardless of where they live or their specific needs. Together with our partners, we're creating lasting systems change that will improve outcomes for generations to come.

        </motion.p>



              < motion.div
              className='mt-[60px]'
      
        >
            <motion.img  
                style={{ scaleY,
          opacity,
          originY: 0.5}}
            
            className=" ml-[30px] md:ml-[294px]  w-[1178px] md:h-[703px] mt-[40px] md:mt-[35px] bg-cover bg-[50%_50%]"  src={"/Frame 19.png"} 
          
            />

        </motion.div>


      </section>  
    </div>
  )
}

export default Believe