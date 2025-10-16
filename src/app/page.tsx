"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "./Landing/Header/Header";
// import Hero from "./Landing/Hero";
import About from "./Landing/Aboutus/page";
import Comprehensive from "./Landing/Comprehensive/page";
import Hero from "./Landing/Hero/page";
export default function Home() {


  return (
    <div className="relative h-[1000vh]">
      <Header />
      {/* ✅ Correct prop name + syntax */}
      <Hero />



      <section>
        <About />
        <Comprehensive />
      </section>
    </div>
  );
}
