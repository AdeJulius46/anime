"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const supportServices = [
  {
    number: "01",
    title: "Resource Database",
    imageSrc: "Frame 10.png",
    image: { top: "top-[255px]", left: "left-[643px]" },
  },
  {
    number: "02",
    title: "Peer Support",
    imageSrc: "Frame 11.png",
    image: { top: "top-[843px]", left: "left-[643px]" },
  },
  {
    number: "03",
    title: "Educational Resources",
    imageSrc: "Frame 12.png",
    image: { top: "top-[1431px]", left: "left-[643px]" },
  },
];

const Comprehensive = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div className='w-full bg-[#fff] overflow-hidden'>
      <section 
        ref={containerRef}
        className="w-full h-[300vh] relative bg-[#fff]"
      >
        <motion.p 
          
          className="absolute mt-[40px] top-[87px] left-[calc(50.00%_-_400px)] w-[800px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg text-center tracking-[0] leading-[normal]"
        >
          At Active in Recovery, we understand that navigating the path to
          recovery can be overwhelming. Our comprehensive services are
          accessible throughout Wyoming, ensuring that no matter where you are
          in the state, help is always within reach.
        </motion.p>

        <motion.p 
          className="absolute top-[2127px] left-[calc(50.00%_-_83px)] w-[166px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg text-center tracking-[0] leading-[normal] underline"
        >
          View Resource
        </motion.p>

        <motion.h2 
    
          className="absolute mt-[40px] top-0 left-[calc(50.00%_-_406px)] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[56px] tracking-[0] leading-[normal]"
        >
          Comprehensive Support Services
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-[1979px] left-[calc(50.00%_-_344px)] w-[688px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[32px] text-center tracking-[0] leading-[normal]"
        >
          Support services are designed to complement each other, creating a
          continuum of care that evolves with individuals changing needs.
        </motion.p>

        {supportServices.map((service, index) => {
          const start = 0.1 + (index * 0.25)
          const end = start + 0.25
          
          const serviceProgress = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
          )

          const y = useTransform(
            serviceProgress,
            [0, 1],
            [100 + (index * 50), 0]
          )

          const opacity = useTransform(
            serviceProgress,
            [0, 0.3, 1],
            [0, 0.5, 1]
          )

          const scale = useTransform(
            serviceProgress,
            [0, 1],
            [0.85, 1]
          )

          return (
            <React.Fragment key={`service-${index}`}>
              <motion.h3
                style={{ y, opacity, scale }}
                className={`absolute ${service.image.top} left-[calc(50.00%_-_564px)] ${index === 2 ? "w-[392px] text-[47px]" : ""} [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[47px] tracking-[0] leading-[normal]`}
              >
                {service.title}
              </motion.h3>
              <motion.img
                style={{ y, opacity, scale }}
                src={service.imageSrc}
                alt={`${service.title} image`}
                className={`absolute ${service.image.top} ${service.image.left} w-[759px] h-[508px] object-cover`}
              />
              <motion.div
                style={{ y, opacity, scale }}
                className={`${service.image.top} absolute left-[33px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-2xl tracking-[0] leading-[normal]`}
              >
                {service.number}
              </motion.div>
            </React.Fragment>
          )
        })}
      </section> 
    </div>
  )
}

export default Comprehensive