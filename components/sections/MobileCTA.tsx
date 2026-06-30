"use client";

import { motion, AnimatePresence } from "motion/react";
import { PhoneCall, Calendar } from "lucide-react";
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

  const handleScrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("appointment-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-onyx/90 backdrop-blur-md border-t border-white/5"
        >
          <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
            <a 
              href={CONTACT_INFO.phoneLink}
              className="flex items-center justify-center gap-2 w-full bg-transparent border border-[#10FF00] text-[#10FF00] font-bold h-12 text-xs uppercase tracking-wider rounded-md active:scale-95 transition-transform"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a 
              href="#appointment-section"
              onClick={handleScrollToAppointment}
              className="flex items-center justify-center gap-2 w-full bg-[#10FF00] text-black font-bold h-12 text-xs uppercase tracking-wider rounded-md active:scale-95 transition-transform"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appt</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
