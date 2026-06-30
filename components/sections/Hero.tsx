"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
              EXOTIC CARS<br/>
              <span className="text-carbon/0" style={{WebkitTextStroke: "1px var(--color-titanium)"}}>DEMAND</span> MORE<br/>
              THAN BASIC<br/>
              SERVICE.
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
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-12 px-4"
              >
                <div className="w-16 h-16 rounded-full border border-acid-green flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-acid-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p className="text-lg text-titanium leading-relaxed max-w-sm">
                  Thank you. Your request has been received. A master technician will contact you directly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="mb-2">
                  <h3 className="font-heading text-2xl uppercase tracking-wider text-titanium">Schedule Consultation</h3>
                  <p className="text-sm text-grey-bore mt-1">Provide your details and we will secure your appointment.</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-titanium/80">Full Name</label>
                  <input required type="text" id="name" className="bg-onyx border border-white/10 h-12 px-4 text-titanium focus:outline-none focus:border-acid-green rounded-md" placeholder="e.g. John Doe" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-titanium/80">Phone Number</label>
                  <input required type="tel" id="phone" className="bg-onyx border border-white/10 h-12 px-4 text-titanium focus:outline-none focus:border-acid-green rounded-md" placeholder="e.g. (555) 555-5555" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label htmlFor="vehicle" className="text-xs uppercase tracking-widest text-titanium/80">Vehicle Make / Model</label>
                  <input required type="text" id="vehicle" className="bg-onyx border border-white/10 h-12 px-4 text-titanium focus:outline-none focus:border-acid-green rounded-md" placeholder="e.g. Ferrari F8 Tributo" />
                </div>

                <button type="submit" className="w-full bg-acid-green text-black font-bold h-12 uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-md mt-4">
                  Request Consultation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background Structural Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[120vw] h-[1px] bg-carbon rotate-12 -z-0" />
      <div className="absolute bottom-1/4 -left-1/4 w-[120vw] h-[1px] bg-carbon -rotate-12 -z-0" />
    </section>
  );
}
