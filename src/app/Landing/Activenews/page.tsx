import React from 'react'
import Link from 'next/link'

function Activenews() {
  return (
    <div className='relative bg-white'>
        <div className='flex flex-col items-center gap-4  px-4 bg-white '>
            <h1 className=' text-[24px] font-[400] text-black md:text-[32px]'>
              Active in Recovery in the News
            </h1>
            <div className='flex flex-col  md:flex-row  gap-8  px-4'>
                <div className='flex flex-col  gap-2'>
                    <img  src="/Frame.png"/>
                    <Link href="https://www.powelltribune.com/stories/of-course-i-said-no,171151">
                    <p className='font-[600] text-black  md:text-[20px] underline  cursor-pointer'>Of course, I said no</p>
                    </Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <img  src="/Frame 22.png"/>
                    <Link href="https://www.powelltribune.com/stories/a-helping-hand-up-to-start-again-jackie-fales,168499">
                    <p className='font-[600] text-black  md:text-[20px] underline  cursor-pointer'>A helping hand up to start again: <br/>  Jackie Fales</p>
                    </Link>
                </div>
            </div>

            <p className='md:w-6xl px-4 text-center  text-black'>
                The impact of our advocacy extends beyond policy changes. Through engagement with decision-makers and strategic coalition building, we're creating a Wyoming where recovery is not just possible but fully supported by our systems, policies, and communities.
            </p>



              <Link href="https://www.paypal.com/donate?token=TjsTRkz1xqnD1HI34RA80yIbnp-NP2pa8tcZ9BqBjQ7z6HDpvU700OyVauYN_zStfrmg81yPVcxCCaXW">
                    <button className="bg-black text-white px-12  text-[18px] font-[400] py-3  cursor-pointer">
                      Donate
                    </button>  
                        </Link>
        </div>
    </div>
  )
}

export default Activenews