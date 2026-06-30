"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MANUFACTURERS } from "@/lib/constants";

export function SupercarVault() {
  return (
    <section id="showroom" className="bg-onyx py-24 px-4 border-t border-carbon">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-titanium uppercase tracking-tight">
            Supported <span className="text-acid-green">Manufacturers</span>
          </h2>
          <div className="h-1 w-24 bg-carbon mt-6 relative">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-acid-green" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MANUFACTURERS.map((mfg, idx) => (
            <motion.div
              key={mfg.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-carbon border-white/5 overflow-hidden group h-full rounded-none">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-onyx/40 z-10 transition-colors group-hover:bg-transparent duration-500" />
                  <Image
                    src={mfg.image}
                    alt={`${mfg.brand} Service`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-6 w-12 h-1 bg-acid-green -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-heading text-2xl text-titanium uppercase tracking-tight mb-3">
                    {mfg.brand}
                  </h3>
                  <p className="text-grey-bore text-sm leading-relaxed">
                    {mfg.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
