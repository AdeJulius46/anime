"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "./Landing/Header/Header";
// import Hero from "./Landing/Hero";
import About from "./Landing/Aboutus/page";
import Comprehensive from "./Landing/Comprehensive/page";
import Hero from "./Landing/Hero/page";
import Ourpartner from "./Landing/Ourpartnership/page";
import Ourmission from "./Landing/Ourmission/page";
export default function Home() {


  return (
    <div className="relative  bg-[#fff]">
      <Header />
      {/* ✅ Correct prop name + syntax */}
      <Hero />



      <section className="bg-[#ffff]">
        <About />
        <Ourmission/>
        <Ourpartner />
        <Comprehensive />
      </section>
    </div>
  );
}
