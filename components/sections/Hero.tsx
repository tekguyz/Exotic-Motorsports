"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  const scrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("appointment-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-onyx py-12 md:py-24 px-4 min-h-[75vh] md:min-h-[85vh] flex items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Text Stack */}
        <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-titanium leading-[0.95]">
              Exotic cars<br/>demand more<br/>than basic<br/>service.
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-1.5 font-heading text-lg md:text-2xl tracking-widest text-acid-green uppercase"
          >
            <span>PRECISION.</span>
            <span>EXPERIENCE.</span>
            <span>DETAIL.</span>
          </motion.div>
        </div>

        {/* Right Column: Appointment Intake */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="bg-carbon border border-white/5 p-8 rounded-xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="mb-2 text-center md:text-left">
                <h3 className="font-heading text-2xl uppercase tracking-wider text-titanium">Schedule Service</h3>
                <p className="text-sm text-grey-bore mt-2">Request an appointment with our master technicians.</p>
              </div>
              
              <a 
                href="#appointment-section" 
                onClick={scrollToAppointment}
                className="w-full bg-[#10FF00] text-black font-bold h-12 uppercase tracking-wide hover:bg-opacity-90 transition-all rounded-md mt-4 flex items-center justify-center"
              >
                Schedule Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Structural Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[120vw] h-[1px] bg-carbon rotate-12 -z-0" />
      <div className="absolute bottom-1/4 -left-1/4 w-[120vw] h-[1px] bg-carbon -rotate-12 -z-0" />
    </section>
  );
}
