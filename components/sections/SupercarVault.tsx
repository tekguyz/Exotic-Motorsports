"use client";

import { MANUFACTURERS } from "@/lib/constants";

export function SupercarVault() {
  return (
    <section id="showroom" className="bg-[#030303] relative overflow-hidden">
      {/* Pure, Minimalist Brand Strip Matrix */}
      <div className="max-w-7xl mx-auto border-x border-white/5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-y border-white/5 divide-x divide-y divide-white/5 lg:divide-y-0 text-center">
          {MANUFACTURERS.map((brand) => (
            <div 
              key={brand} 
              className="flex items-center justify-center p-5 font-heading text-xs sm:text-sm lg:text-base font-bold tracking-[0.25em] text-grey-bore/60 hover:text-[#10FF00] bg-[#050505]/30 hover:bg-[#10FF00]/[0.02] transition-all duration-300 uppercase cursor-default select-none group relative"
            >
              {brand}
              {/* Micro Indicator Accent Tracking Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-[#10FF00] group-hover:w-1/3 transition-all duration-300 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}