"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "./Landing/Header/Header";
// import Hero from "./Landing/Hero";
import About from "./Landing/Aboutus/page";
import Comprehensive from "./Landing/Comprehensive/page";
import Hero from "./Landing/Hero/page";
export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  const {scrollYProgress }:any = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[1000vh]">
      <Header />
      {/* ✅ Correct prop name + syntax */}
      <Hero  scrollYProgress={scrollYProgress} />



      <section>
        <About />
        <Comprehensive />
      </section>
    </div>
  );
}
