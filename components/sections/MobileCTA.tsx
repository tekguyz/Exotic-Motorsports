"use client";

import { motion, AnimatePresence } from "motion/react";
import { PhoneCall } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useEffect, useState } from "react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-onyx/90 backdrop-blur-md border-t border-white/5"
        >
          <a 
            href={CONTACT_INFO.phoneLink}
            className="flex items-center justify-center gap-2 w-full bg-[#10FF00] text-black font-bold h-14 uppercase tracking-wider rounded-md active:scale-95 transition-transform"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
