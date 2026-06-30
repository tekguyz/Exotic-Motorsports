"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "@/lib/constants";
import { PhoneCall, Menu, X } from "lucide-react";

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Showroom", href: "#showroom" },
    { name: "Location", href: "#location" },
  ];

  const scrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById("appointment-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-onyx/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
          
          {/* Left Block: Logo vector & text */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <svg width="40" height="24" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#10FF00] transition-transform group-hover:scale-105 w-8 h-5 md:w-10 md:h-6">
              <path d="M10 50L30 20H70L90 50H75L60 28H40L25 50H10Z" fill="currentColor"/>
              <path d="M35 50L45 35H55L65 50H35Z" fill="currentColor" className="text-titanium"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-heading text-lg md:text-xl uppercase tracking-tighter text-titanium leading-none">EXOTIC</span>
              <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest text-[#10FF00] leading-none">MOTORSPORTS</span>
            </div>
          </Link>
          
          {/* Center Block: Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-mono tracking-widest uppercase text-grey-bore hover:text-[#10FF00] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Block: Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href={CONTACT_INFO.phoneLink} className="flex items-center gap-2 text-sm font-medium text-titanium hover:text-[#10FF00] transition-colors">
              <PhoneCall className="h-4 w-4" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href="#appointment-section" onClick={scrollToAppointment} className="bg-[#10FF00] text-onyx font-semibold hover:bg-opacity-90 rounded-md uppercase tracking-wide text-xs px-6 py-4 inline-flex items-center justify-center transition-all min-h-[44px]">
              SCHEDULE SERVICE
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden flex items-center justify-center w-11 h-11 text-titanium relative z-50 hover:text-[#10FF00] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-onyx/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full justify-center px-8">
              <nav className="flex flex-col gap-8 mb-12">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-4xl text-titanium uppercase tracking-tight hover:text-[#10FF00] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-6 pt-8 border-t border-carbon"
              >
                <a href={CONTACT_INFO.phoneLink} className="flex items-center gap-3 text-xl font-mono text-[#10FF00]">
                  <PhoneCall className="h-5 w-5" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a 
                  href="#appointment-section" 
                  onClick={scrollToAppointment}
                  className="bg-[#10FF00] text-onyx font-heading text-sm text-center font-semibold rounded-md uppercase tracking-widest w-full py-4 min-h-[44px]"
                >
                  Schedule Service
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
