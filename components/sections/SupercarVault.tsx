"use client";

import { motion } from "motion/react";

interface BrandSpecialization {
  brand: string;
  subtitle: string;
  description: string;
}

export function SupercarVault() {
  const brands: BrandSpecialization[] = [
    {
      brand: "Ferrari",
      subtitle: "Maranello V8 & V12 Platforms",
      description: "Factory-authorized diagnostic tooling and model-specific specification sheets."
    },
    {
      brand: "Lamborghini",
      subtitle: "Sant'Agata V10 & V12 Engineering",
      description: "Factory-authorized diagnostic tooling and model-specific specification sheets."
    },
    {
      brand: "Rolls Royce",
      subtitle: "Goodwood Twelve-Cylinder Refinement",
      description: "Factory-authorized diagnostic tooling and model-specific specification sheets."
    },
    {
      brand: "Bentley",
      subtitle: "Crewe W12 & V8 Powertrains",
      description: "Factory-authorized diagnostic tooling and model-specific specification sheets."
    },
    {
      brand: "McLaren",
      subtitle: "Woking Carbon Monocell & Twin-Turbo",
      description: "Factory-authorized diagnostic tooling and model-specific specification sheets."
    },
    {
      brand: "Porsche",
      subtitle: "Stuttgart Flat-6 & GT Department",
      description: "Factory-authorized diagnostic tooling and model-specific specification sheets."
    }
  ];

  return (
    <section id="showroom" className="bg-[#050505] py-24 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-acid-green blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-acid-green blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-acid-green font-medium mb-3"
          >
            Elite Specialization
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl text-titanium uppercase tracking-wider"
          >
            Supported <span className="text-acid-green">Manufacturers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-grey-bore mt-4 max-w-lg mx-auto leading-relaxed"
          >
            We maintain absolute adherence to factory guidelines across Miami&apos;s most demanding automotive assets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((item, idx) => (
            <motion.div
              key={item.brand}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#111113]/40 backdrop-blur-sm border border-white/5 p-8 rounded-lg transition-all duration-300 hover:border-acid-green/30 hover:shadow-[0_0_30px_rgba(16,255,0,0.03)]"
            >
              {/* Symmetrical border glow effect */}
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-acid-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-acid-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl text-titanium uppercase tracking-widest transition-colors duration-300 group-hover:text-acid-green">
                      {item.brand}
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest text-grey-bore uppercase group-hover:text-titanium transition-colors duration-300">
                      [ {String(idx + 1).padStart(2, '0')} ]
                    </span>
                  </div>
                  
                  <p className="text-[10px] uppercase tracking-widest text-acid-green/70 mb-4 font-semibold">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-xs tracking-wider text-grey-bore leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
