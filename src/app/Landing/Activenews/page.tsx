import React from 'react'

function Activenews() {
  return (
    <div className='relative bg-white'>
        <div className='flex flex-col items-center gap-4  px-4 bg-white '>
            <h1 className=' text-[24px] font-[400] md:text-[32px]'>
              Active in Recovery in the News
            </h1>
            <div className='flex flex-col  md:flex-row  gap-8  px-4'>
                <div className='flex flex-col  gap-2'>
                    <img  src="/Frame.png"/>
                    <p className='font-[600]  md:text-[20px] underline  cursor-pointer'>Of course, I said no</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <img  src="/Frame.png"/>
                    <p className='font-[600]  md:text-[20px] underline  cursor-pointer'>A helping hand up to start again: <br/>  Jackie Fales</p>
                </div>
            </div>

            <p className='md:w-6xl px-4 text-center '>
                The impact of our advocacy extends beyond policy changes. Through engagement with decision-makers and strategic coalition building, we're creating a Wyoming where recovery is not just possible but fully supported by our systems, policies, and communities.
            </p>
        </div>
    </div>
  )
}

export default Activenews