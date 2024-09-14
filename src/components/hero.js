import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[url('/heroBg.jpg')] bg-cover bg-center">
      <Navbar />
      <div className="container mx-auto pt-32 text-center md:text-left lg:text-left">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
          No Road Too Rough
        </h1>
        <p className="md:text-xl sm:text-lg text-muted-foreground mx-2 mt-2">
          Durable Tyres for Unstoppable Performance
        </p>
        <div className="flex justify-center md:justify-start mt-2 lg:justify-start pb-10">
          <a href="#contact">
            <button className="bg-black text-white px-8 py-1 md:py-2 sm:px-6 rounded-3xl">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
