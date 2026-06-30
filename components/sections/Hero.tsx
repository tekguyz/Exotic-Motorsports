"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  const scrollToAppointment = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("appointment-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-onyx py-16 md:py-28 px-4 min-h-[80vh] md:min-h-[90vh] flex items-center border-b border-white/5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Aggressive Typography Stack */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-titanium leading-[0.9] sm:leading-[0.85]">
              Exotic cars<br/>
              <span className="text-[#10FF00]">demand more</span><br/>
              than basic<br/>
              service.
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 font-heading text-sm sm:text-lg md:text-xl tracking-[0.25em] text-grey-bore uppercase border-l-2 border-[#10FF00] pl-4"
          >
            <span className="text-titanium font-bold">PRECISION</span>
            <span className="text-white/20">•</span>
            <span className="text-titanium font-bold">EXPERIENCE</span>
            <span className="text-white/20">•</span>
            <span className="text-titanium font-bold">DETAIL</span>
          </motion.div>

          {/* Action Row: Immediate Mobile/Desktop Conversion Click Path */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2"
          >
            <button
              onClick={scrollToAppointment}
              className="px-8 h-14 bg-[#10FF00] text-black font-heading font-bold text-base uppercase tracking-wider hover:bg-opacity-90 active:scale-[0.98] transition-all rounded-md flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(16,255,0,0.15)]"
            >
              Request Appointment
            </button>
            <a
              href="tel:7866069493"
              className="px-8 h-14 border border-white/10 hover:border-white/20 text-titanium font-heading font-bold text-base uppercase tracking-wider active:scale-[0.98] transition-all rounded-md flex items-center justify-center gap-2 bg-carbon/40 backdrop-blur-sm"
            >
              Call Shop: 786.606.9493
            </a>
          </motion.div>
        </div>

        {/* Right Column: High-End Asymmetric Supercar Visual Showcase */}
        <div className="lg:col-span-5 w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full h-full absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-carbon"
          >
            {/* Smooth Vignette Overlay to enhance luxury contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent z-10 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx/40 to-transparent z-10 lg:block hidden" />
            
            <Image
              src="/gt3.webp"
              alt="Luxury Supercar Diagnostic Maintenance Facility"
              fill
              priority
              sizes="(max-w-1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

      </div>
      
      {/* Background Architectural Geometry Grid Lines */}
      <div className="absolute top-1/3 -right-1/4 w-[140vw] h-[1px] bg-white/[0.02] rotate-12 pointer-events-none" />
      <div className="absolute bottom-1/3 -left-1/4 w-[140vw] h-[1px] bg-white/[0.02] -rotate-12 pointer-events-none" />
    </section>
  );
}