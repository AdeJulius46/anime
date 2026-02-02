import React from 'react'
import Hero from '../Landing/Hero/page'
import Hero2 from '../Landing/Hero2/page'
import Hero1 from './Hero1/page'
import Hero3 from './Hero3/page'
import Comprehensive from '../Landing/Comprehensive/page'
import Compre from './Compre/page'

// This is the main page component for src/app/Resources/page.tsx
// It imports Hero and Hero2 components and renders them along with Comprehensive section
const page = () => {
  return (
    <div className='bg-[#fff] relative '>
        {/* <Hero2 />
    <Hero /> */}
    <Hero1 />
    <Hero3 />

    <section className="bg-[#fff]  md:mt-[-150px]">
            <Compre />
          </section>   

    
    </div>
  )
}

export default page