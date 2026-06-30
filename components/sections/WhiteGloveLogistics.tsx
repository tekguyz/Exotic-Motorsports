"use client";

import { motion } from "motion/react";
import { LOGISTICS_STEPS } from "@/lib/constants";

export function WhiteGloveLogistics() {
  return (
    <section className="bg-onyx py-24 px-4 border-t border-carbon">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-titanium uppercase tracking-tight">
              ASSET <span className="text-[#10FF00]">PROTECTION</span> WORKFLOW
            </h2>
            <p className="text-grey-bore mt-4 max-w-xl">
              Strict guidelines governing the handling, evaluation, and execution of service for high-value vehicles.
            </p>
          </div>
          <div className="font-mono text-xs text-titanium/50 uppercase tracking-widest px-4 py-2 border border-carbon">
            Service Workflow
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-carbon">
          {LOGISTICS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-carbon last:border-0 bg-onyx hover:bg-carbon transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#10FF00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              
              <div className="font-heading text-6xl text-titanium/5 mb-8 group-hover:text-[#10FF00]/10 transition-colors">
                {step.step}
              </div>
              
              <h3 className="font-heading text-xl text-titanium uppercase tracking-wide mb-4">
                {step.title}
              </h3>
              
              <p className="text-grey-bore text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
