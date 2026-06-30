"use client";

import { MANUFACTURERS } from "@/lib/constants";

export function SupercarVault() {
  return (
    <section id="showroom" className="bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-4 text-[10px] md:text-base font-bold tracking-widest text-center bg-[#050505] border-y border-white/5">
        {MANUFACTURERS.map((brand) => (
          <div key={brand} className="text-grey-bore hover:text-[#10FF00] duration-200 uppercase transition-colors">
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
