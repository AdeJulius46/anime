import React from 'react'

function Ourmission() {

    
const missionItems = [
  {
    title: "Empower Lives",
    description: "Providing the tools and support needed for lasting recovery",
    imageSrc: "Frame 4.png",
    iconSrc: "Frame 5.png",
    imageTop: "top-[122px]",
    imageLeft: "left-[653px]",
    iconTop: "top-[579px]",
    iconLeft: "left-[278px]",
    titleTop: "top-[122px]",
    descTop: "top-[196px]",
  },
  {
    title: "Reduce Stigma",
    description:
      "Transforming perception through awareness, action and education",
    imageSrc: "Frame 6.png",
    iconSrc: "Frame7.png",
    imageTop: "top-[885px]",
    imageLeft: "left-[653px]",
    iconTop: "top-[1342px]",
    iconLeft: "left-[278px]",
    titleTop: "top-[885px]",
    descTop: "top-[959px]",
  },
  {
    title: "Build a Stronger Wyoming",
    description: "Empowering individuals to heal communities",
    imageSrc: "Frame 8.png ",
    iconSrc: "Frame 9.png",
    imageTop: "top-[1648px]",
    imageLeft: "left-[653px]",
    iconTop: "top-[2105px]",
    iconLeft: "left-[278px]",
    titleTop: "top-[1648px]",
    descTop: "top-[1786px]",
  },
];

  return (
    <div className='w-full  bg-[#fff] h-[330vh] relative '>
        <section className=" w-full  bg-[#fff]">
        <h2 className="absolute top-0 left-[calc(50.00%_-_212px)] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[56px] tracking-[0] leading-[normal]">
          Our Mission &amp; Vision
        </h2>

        {missionItems.map((item, index) => (
          <React.Fragment key={`mission-${index}`}>
            <img
              src={item.imageSrc}
              alt={`${item.title} image`}
              className={`absolute ${item.imageTop} ${item.imageLeft} w-[759px] h-[703px] object-cover`}
            />
            <img
              src={item.iconSrc}
              alt={`${item.title} icon`}
              className={`absolute ${item.iconTop} ${item.iconLeft} w-[346px] h-[246px] object-cover`}
            />
            <h3
              className={`absolute ${item.titleTop} left-[calc(50.00%_-_676px)] ${index === 2 ? "w-[351px]" : ""} [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[47px] tracking-[0] leading-[normal]`}
            >
              {item.title}
            </h3>
            <p
              className={`absolute ${item.descTop} left-[calc(50.00%_-_670px)] w-[425px] [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg tracking-[0] leading-[normal]`}
            >
              {item.description}
            </p>
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}

export default Ourmission