"use client"
import { useRef } from 'react'
import { useInView, motion,useScroll,useTransform} from 'framer-motion'
const About = () => {
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
         <section className="  w-full  bg-[#fff] relative   flex flex-col overflow-hidden "
            ref={ref}
         >
        < motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        
        className="  mt-[60px]  self-center [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[56px] text-center tracking-[0] leading-[normal]">
          About Us
        </motion.h1>


        <motion.p 
         initial={{ opacity: 0  }} // starts lower and invisible
      animate={isInView ? { opacity: 1 } : {}}  // fades in and slides up
      transition={{
         delay: 1,                       // ⏳ wait 3 seconds before starting
         duration: 1,                     // fade in over 1 second
         ease: "easeInOut"    // smooth easing
      }}
        
        className="h-[92px] md:w-[800px] self-center mt-2.5  px-4 mb-[60px] [font-family:'Sora',Helvetica] font-normal text-[#2D2D2D] text-lg text-center tracking-[0] leading-[normal]">
          Since our founding, we've been dedicated to bridging the gap between
          those struggling with addiction and the life-changing resources that
          can help them heal. Our statewide network of resources and recovery
          specialists, counselors, and peer support advocates, work tirelessly
          to ensure no Wyoming resident faces these challenges alone.
        </motion.p>
        < motion.div
        
        >
            <motion.img  
              style={{scaleY,
          opacity,
          originY: 0.5}}
            
            className="ml-[-26px] w-[1204px] md:h-[703px] mt-[45px] bg-cover bg-[50%_50%]"  src={"/Frame2.png"}  
             
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
        className="  px-4  h-[68px] md:w-[852px] self-center mt-[90px]  mb-[40px][font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg text-center tracking-[0] leading-[normal]">
          We understand that recovery isn't just about overcoming addiction—it's
          about rebuilding lives, restoring families, and strengthening
          communities. We're committed to making recovery accessible to
          everyone, regardless of location, financial situation, or background.
        </motion.p>



              < motion.div
              className='mt-[60px]'
      
        >
            <motion.img  
                style={{ scaleY,
          opacity,
          originY: 0.5}}
            
            className=" ml-[30px] md:ml-[294px] w-[1178px] md:h-[703px] mt-[45px] bg-cover bg-[50%_50%]"  src={"/Frame3.png"} 
          
            />

        </motion.div>


      </section>  
    </div>
  )
}

export default About