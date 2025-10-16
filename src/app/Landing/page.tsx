import React from "react";
// import { Button } from "../../components/ui/button";
import { Button } from "../components/ui/button";
import Header from "./Header/Header";
import Ourpartner from "./Ourpartnership/page";
import About from "./Aboutus/page";
import Comprehensive from "./Comprehensive/page";
import Hero from "./Hero/page";

const missionItems = [
  {
    title: "Empower Lives",
    description: "Providing the tools and support needed for lasting recovery",
    imageSrc: "Frame 4.png",
    iconSrc: "Frame 5.png",
    imageTop: "top-[122px]",
    imageLeft: "left-[593px]",
    iconTop: "top-[579px]",
    iconLeft: "left-[218px]",
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
    imageLeft: "left-[593px]",
    iconTop: "top-[1342px]",
    iconLeft: "left-[218px]",
    titleTop: "top-[885px]",
    descTop: "top-[959px]",
  },
  {
    title: "Build a Stronger Wyoming",
    description: "Empowering individuals to heal communities",
    imageSrc: "Frame 8.png ",
    iconSrc: "Frame 9.png",
    imageTop: "top-[1648px]",
    imageLeft: "left-[593px]",
    iconTop: "top-[2105px]",
    iconLeft: "left-[218px]",
    titleTop: "top-[1648px]",
    descTop: "top-[1786px]",
  },
];







const partnershipItems = [
  {
    title: "Treatment Faculties",
    description:
      "Creating seamless referral pathways with rehab centers and mental health facilities across Wyoming.",
    opacity: "",
  },
  {
    title: "Healthcare Providers",
    description:
      "Working with doctors, nurses, therapists, and mental health professionals to ensure quality care throughout the recovery journey.",
    opacity: "opacity-50",
  },
  {
    title: "Community Organizations",
    description:
      "Partnering with local groups to extend our reach into every Wyoming community, including faith-based organizations, schools, employers, and grassroots coalitions.",
    opacity: "opacity-50",
  },
  {
    title: "Government Agencies",
    description:
      "Collaborating with state and local agencies to improve access to services for all Wyoming residents.",
    opacity: "opacity-50",
  },
];




const partnershipImages = [
  {
    src: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1204",
    alt: "Partnership image 1",
    className:
      "ml-[-26px] w-[1204px] h-[703px] mt-[45px] bg-cover bg-[50%_50%]",
  },
  {
    src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1178",
    alt: "Partnership image 2",
    className:
      "ml-[334px] w-[1178px] h-[703px] mt-[45px] bg-cover bg-[50%_50%]",
  },
];

const advocacyItems = [
  {
    title: "Funding Initiatives",
    description:
      "Advocating for increased public and private funding for substance abuse and mental health programs throughout Wyoming.",
    opacity: "",
  },
  {
    title: "Educational Campaigns",
    description:
      "Creating awareness campaigns that reduce stigma and promote understanding of addiction and mental health disorders.",
    opacity: "opacity-50",
  },
  {
    title: "Community Mobilization",
    description:
      "Engaging communities across Wyoming to support recovery initiatives and create welcoming environments for those in recovery.",
    opacity: "opacity-50",
  },
];

const supportWays = [
  {
    number: "01",
    title: "Financial Contributions",
    description:
      "Your donations directly fund our helpline, peer support programs, educational resources, and advocacy efforts. Every dollar makes a difference in someone's recovery journey. \n\nWe offer monthly giving options, annual memberships, and legacy giving opportunities. Even small recurring donations help sustain our vital services throughout Wyoming.",
    imageSrc: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=759",
    top: "top-[172px]",
  },
  {
    number: "02",
    title: "Volunteer Opportunities",
    description:
      "Share your time. Whether you can give a few hours weekly or help with special events, your involvement strengthens our community. Contact us as to how you can help.",
    imageSrc: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=759",
    top: "top-[760px]",
  },
  {
    number: "03",
    title: "Corporate Partnerships",
    description:
      "Businesses can support through sponsorships, employee matching programs, in-kind donations, or hosting awareness events. We proudly recognize our corporate partners in our communications and events.",
    imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=759",
    top: "top-[1348px]",
  },
  {
    number: "04",
    title: "Spread Awareness",
    description:
      "Help reduce stigma by sharing our message on social media, hosting community conversations, or inviting us to speak at your organization. Becoming a recovery advocate in your personal and professional networks creates ripple effects throughout Wyoming. \n\nContact us for educational materials, presentation templates, and speaking points to help you confidently share accurate information about recovery. Your voice matters in changing public perception.",
    imageSrc: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=759",
    top: "top-[1936px]",
  },
];

export default function  LandingPage () {
  return (
    <div className="bg-[#fffefa] overflow-hidden  w-full min-w-full flex flex-col relative h-[200vh]"
    >
      {/* <Hero />  */}
      <About />
     


      {/* <section className="z-[4] ml-20 w-[1352px] h-[2351px] relative mt-20">
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
      </section> */}


      {/* <section className="">
        <Comprehensive />  
      </section>  */}


      {/* <section className="w-full  self-center mt-20 flex items-center justify-center h-[100vh]  bg-[url('/Frame13.png')]  bg-cover bg-center bg-no-repeat"> */}
        {/* <h2 className="mt-px h-[77px] ml-px w-[1333px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-[56px] text-center tracking-[0] leading-[normal]">
          Building&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a
          Stronger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wyoming
        </h2> */}
      {/* </section> */}

       {/* <section className="">
        <Ourpartner />
      </section>

      <section className=" mt-[100px]">
        <About />
      </section>

      <section className="z-[5] ml-20 w-[1352px] h-[672px] relative mt-20">
        <Ourpartner />
      </section>

      <section className="z-[6] ml-[101px] w-[1310px] h-[2149px] relative mt-28">
        <Comprehensive />  
      </section>  */}

  
{/* 
      <footer className="z-10 h-[333px] w-full self-center flex flex-col items-center gap-3 bg-[#170900]">
        <p className="ml-px h-[132px] w-[869px] mt-[84px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]">
          Contact our development coordinator at air.activeinrecovery@gmail.com
          to discuss how you can get involved in ways that match your interests
          and capacity.
        </p>

        <p className="ml-px h-[22px] w-[615px] [font-family:'Sora',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
          We're grateful for your partnership in this important work.
        </p>
      </footer> */}
    </div>
  );
};
