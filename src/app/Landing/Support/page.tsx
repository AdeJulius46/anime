"use client";
import React, { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const supportServices = [
  {
    number: "01",
    title: "Financial Contributions",
    Subtitles:"Your donations directly fund our helpline, peer support programs, educational resources, and advocacy efforts. Every dollar makes a difference in someone's recovery journey. We offer monthly giving options, annual memberships, and legacy giving opportunities. Even small recurring donations help sustain our vital services throughout Wyoming.",
    imageSrc: "Frame 10.png",
  },
  {
    number: "02",
    title: "Volunteer Opportunities",
    Subtitles:"Share your time. Whether you can give a few hours weekly or help with special events, your involvement strengthens our community. Contact us as to how you can help.",
    imageSrc: "Frame 12.png",
  },
  {
    number: "03",
    title: "Corporate Partnerships",
    imageSrc: "Frame 25.png",
    Subtitles:"Businesses can support through sponsorships, employee matching programs, in-kind donations, or hosting awareness events. We proudly recognize our corporate partners in our communications and events.",
  },
  {
    number: "04",
    title: "Spread Awareness",
    imageSrc: "Frame 26.png",
    Subtitles:"Help reduce stigma by sharing our message on social media, hosting community conversations, or inviting us to speak at your organization. Becoming a recovery advocate in your personal and professional networks creates ripple effects throughout Wyoming. Contact us for educational materials, presentation templates, and speaking points to help you confidently share accurate information about recovery. Your voice matters in changing public perception.",
  },
];

const Support = () => {
  const containerRef = useRef(null);
   const isInView = useInView(containerRef, { once: true, margin: "10px" })

 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start 80%", "end 20%"], // 👈 starts when top of section hits 80% of viewport height
});

  return (
    <div className="w-full bg-[#fff] relative ">
      <section
        ref={containerRef}
          id="How-You-Can-Support-Our-Work"
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

          className="text-center w-64  md:w-full  font-serif wrap text-[#2c2c2c] text-[32px] md:text-[56px] mb-6"
        >
             How You Can Support Our Work
        </motion.h2>

        {/* Services */}
        <div className="flex flex-col w-full  ">
          {supportServices.map((service, index) => {
            const start = 0.1 + index * 0.15;
            const end = start + 0.15;

            const serviceProgress = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );
            const y = useTransform(serviceProgress, [0, 1], [4 + index * 10, 0]);
            const opacity = useTransform(serviceProgress, [0, 0.3, 1], [0, 0.5, 1]);
            const scale = useTransform(serviceProgress, [0, 1], [0.85, 1]);

            return (
              <motion.div
                key={`service-${index}`}
                style={{ y, opacity, scale }}
                className={`flex flex-col  border-t border-t-black  md:flex-row  py-6`}
              >
                {/* Text Section */}
                <div className="flex-1  gap-2  py-4 flex flex-col md:items-start text-center md:text-left space-y-4">
                    <div className="flex gap-2">
                  <span className="font-['Sora'] text-[#2c2c2c] text-2xl">
                    {service.number}
                  </span> 
                  <h3 className="font-serif font-[400]  text-[#2c2c2c] text-[24px] md:text-[47px] leading-tight">
                    {service.title}
                  </h3>
                    </div>

                  <p className=" md:w-[420px] text-start text-[#2c2c2c] text-[14px] md:text-[18px] md:px-8">
                    {service.Subtitles}
                  </p>


                  
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
        <motion.p className="text-center mt-24 font-['Sora'] text-[#2c2c2c] text-[14px] md:text-[18px] max-w-3xl">
       Support from individuals and organizations across Wyoming enables us to reach more people in need and expand our services into underserved communities. Every contribution, whether time, money, or advocacy, builds a stronger foundation for those seeking recovery. 
        </motion.p>

           <Link  className="mt-6   " href="https://www.paypal.com/donate?token=SmRo4QGVd-pjINY13CnC5PsDFPSgbNXrpsIIHDcplmeG5KxWbHND0UUbLQGc7RISRbj86oSkCZkxpLkX">
                <button className="bg-black text-white px-12  text-[18px] font-[400] py-3">
                  Donate
                </button>  
                    </Link>

      </section>
    </div>
  );
};

export default Support;
