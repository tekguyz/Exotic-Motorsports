"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICE_PROTOCOLS } from "@/lib/constants";
import { Activity, Droplets, Crosshair, Wrench } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Droplets,
  Crosshair,
  Wrench,
};

export function MechanicalMatrix() {
  return (
    <section id="services" className="bg-onyx py-24 px-4 border-t border-carbon relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="mb-16 md:w-2/3">
          <h2 className="font-heading text-3xl md:text-4xl text-titanium uppercase tracking-tight">
            Diagnostic <span className="text-acid-green">Services</span>
          </h2>
          <p className="text-grey-bore mt-4 max-w-2xl text-lg">
            Factory-level Leonardo and TEXA diagnostics, exact specification differential fluid changes, and complete carbon-ceramic brake system overhauls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_PROTOCOLS.map((protocol, idx) => {
            const Icon = iconMap[protocol.icon];
            
            return (
              <motion.div
                key={idx}
                className={protocol.span}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="bg-carbon border-white/5 p-8 rounded-none relative overflow-hidden group h-full hover:border-acid-green/30 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
                    {Icon && <Icon className="w-32 h-32 text-titanium" strokeWidth={1} />}
                  </div>
                  
                  <CardContent className="p-0 relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="h-12 w-12 bg-onyx border border-white/10 flex items-center justify-center mb-6 text-acid-green">
                         {Icon && <Icon className="w-5 h-5" />}
                      </div>
                      <h3 className="font-heading text-xl text-titanium uppercase tracking-wide mb-3">
                        {protocol.title}
                      </h3>
                      <p className="text-grey-bore text-sm leading-relaxed max-w-sm">
                        {protocol.description}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-2 text-acid-green font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>VIEW DETAILS</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
