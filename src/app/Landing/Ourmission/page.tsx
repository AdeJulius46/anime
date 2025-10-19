"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function OurMission() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1]);

  const missionItems = [
    {
      title: "Empower Lives",
      description: "Providing the tools and support needed for lasting recovery",
      imageSrc: "Frame 4.png",
      iconSrc: "Frame 5.png",
    },
    {
      title: "Reduce Stigma",
      description:
        "Transforming perception through awareness, action and education",
      imageSrc: "Frame 6.png",
      iconSrc: "Frame7.png",
    },
    {
      title: "Build a Stronger Wyoming",
      description: "Empowering individuals to heal communities",
      imageSrc: "Frame 8.png",
      iconSrc: "Frame 9.png",
    },
  ];

  return (
    <div ref={sectionRef} className="w-full bg-white relative ">
      <section className="max-w-7xl mx-auto ">
        <h2 className="text-center  px-4 md:px-0 py-[20px] md:py-[50px] font-serif  font-[600] text-[#2d2d2d] text-[32px] md:text-[56px] md:mb-16">
          Our Mission &amp; Vision
        </h2>

        <div className="flex flex-col space-y-[30px]   md:space-y-24 px-4 md:px-0">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col  md:flex-row  gap-10"
            >
              {/* Text content */}
              <div className="flex-1 px-4 md:px-0">
                <h3 className="font-serif font-[500] text-[#2d2d2d] text-[20px] md:text-[47px] ">
                  {item.title}
                </h3>
                <p className=" [font-family:'Sora',Helvetica]   text-[#2c2c2c]  text-[14px]    md:text-[18px]  md:text-lg max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>

              {/* Image + icon */}
              <div className="relative flex-1 flex justify-center md:justify-end px-4 md:px-0">
                <motion.img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full md:max-w-[500px] md:max-w-[759px] h-auto object-cover "
                  style={{ scale }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Optional floating icon */}
                <img
                  src={item.iconSrc}
                  alt={`${item.title} icon`}
                  className="hidden md:block absolute bottom-[-10px] left-[-375px] w-[316px] h-[246px] object-contain"
                />
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurMission;
