import React from 'react'




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
  return (
    <div className='w-full  bg-[#fff] overflow-hidden '>
 <section className="w-full  h-[2149px] relative  w-full  bg-[#fff] ">
        <p className="absolute  mt-[40px]  top-[87px] left-[calc(50.00%_-_400px)] w-[800px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg text-center tracking-[0] leading-[normal]">
          At Active in Recovery, we understand that navigating the path to
          recovery can be overwhelming. Our comprehensive services are
          accessible throughout Wyoming, ensuring that no matter where you are
          in the state, help is always within reach.
        </p>

        <p className="absolute top-[2127px] left-[calc(50.00%_-_83px)] w-[166px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg text-center tracking-[0] leading-[normal] underline">
          View Resource
        </p>

        <h2 className="absolute  mt-[40px] top-0 left-[calc(50.00%_-_406px)] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[56px] tracking-[0] leading-[normal]">
          Comprehensive Support Services
        </h2>

        <p className="absolute top-[1979px] left-[calc(50.00%_-_344px)] w-[688px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[32px] text-center tracking-[0] leading-[normal]">
          Support services are designed to complement each other, creating a
          continuum of care that evolves with individuals changing needs.
        </p>

        {supportServices.map((service, index) => (
          <React.Fragment key={`service-${index}`}>
            <h3
              className={`absolute ${service.image.top} left-[calc(50.00%_-_564px)] ${index === 2 ? "w-[392px] text-[47px]" : ""} [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[47px] tracking-[0] leading-[normal]`}
            >
              {service.title}
            </h3>
            <img
              src={service.imageSrc}
              alt={`${service.title} image`}
              className={`absolute ${service.image.top} ${service.image.left} w-[759px] h-[508px] object-cover`}
            />
            <div
              className={`${service.image.top} absolute left-[33px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-2xl tracking-[0] leading-[normal]`}
            >
              {service.number}
            </div>
          </React.Fragment>
        ))}

        <img
          className="absolute top-[-5457px] left-[calc(50.00%_-_6399px)] w-[1310px] h-px object-cover"
          alt="Line"
          src="/line-4.svg"
        />
        <img
          className="absolute top-[-5457px] left-[190px] w-[1310px] h-px object-cover"
          alt="Line"
          src="/line-4.svg"
        />
        <img
          className="absolute top-[-5457px] left-[calc(50.00%_-_6399px)] w-[1310px] h-px object-cover"
          alt="Line"
          src="/line-4.svg"
        />
      </section> 




    </div>
  )
}

export default Comprehensive