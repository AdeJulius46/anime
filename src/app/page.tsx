"use client";
import { useEffect, useRef } from "react";
import About from "./Landing/Aboutus/page";
import Comprehensive from "./Landing/Comprehensive/page";
import Hero from "./Landing/Hero/page";
import Ourpartner from "./Landing/Ourpartnership/page";
import Ourmission from "./Landing/Ourmission/page";
import Lenis from "lenis";
import Building from "./Landing/Building/page";
import Advocating from "./Landing/Advocating/page";
import Believe from "./Landing/Believe/page";
import Support from "./Landing/Support/page";
import Money from "./Landing/Money/page";
import Hero2 from "./Landing/Hero2/page";
import Activenews from "./Landing/Activenews/page";
export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time: any){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf)
  },[]);


  return (
    <div className="relative  bg-[#fff]">
      {/* <Hero /> */}
      <Hero2 />

        <section className="bg-[#fff]  mt-[-285px] md:mt-[-150px]">
         <About /> 
        <Ourmission/>
        <Comprehensive />
        <Building /> 
        <Ourpartner /> 
        <Believe /> 
        <Advocating /> 
        <Activenews />
        <Support />
       <Money /> 
      </section>   
    </div>
  );
}
