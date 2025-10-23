import React from 'react'

function comingSoon() {
  return (
    <div className="flex items-center h-screen   bg-white  bg-[url('/OBJECTS.png')] bg-cover bg-center bg-no-repeat flex justify-center " >
        <div className="absolute inset-0 bg-white/70" />
        <h1 className='font-[400]  z-10 text-[#2D2D2D] text-[24px] md:text-[50px]'>
           Coming Soon...

        </h1>
    </div>
  )
}

export default comingSoon