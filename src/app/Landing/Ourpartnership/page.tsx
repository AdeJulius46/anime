import React from 'react'



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


export default function Ourpartner(){
  return (
  <div  className='w-full relative bg-[#fff]   h-[769px]  gap-[45px]'>
 <h2 className="ml-px h-[77px]  px-4 [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[56px] text-center tracking-[0] leading-[normal] ">              Our Strategic Partnerships 
        </h2>

        <div className="flex w-[1352px] h-screen items-center gap-[46px] ">
          <div>
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=529" alt="Strategic partnerships" className="relative w-[529px] h-[647px] object-cover" />
          </div>

          <div className="flex flex-col w-[777px] items-start gap-[45px]  overflow-y-auto">
            {partnershipItems.map((item, index) => (
              <div
                key={`partnership-${index}`}
                className={`flex flex-col items-start gap-[25px] relative self-stretch w-full flex-[0_0_auto] ${item.opacity}`}
              >
                <div className="flex flex-col w-[641px] items-start gap-2.5 relative flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#2c2c2c] text-[32px] tracking-[0] leading-[normal]">
                    {item.title}
                  </h3>
                  <p
                    className={`relative self-stretch ${index === 2 ? "h-[86px]" : "h-[45px]"} [font-family:'Sora',Helvetica] font-normal text-[#2c2c2c] text-lg tracking-[0] leading-[normal]`}
                  >
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <img
                    className="relative self-stretch w-full h-px object-cover"
                    alt="Line"
                    src="/line-4-1.svg"
                  />
                )}
              </div>
            ))}
          </div>

        </div>
        </div>


  )
}
