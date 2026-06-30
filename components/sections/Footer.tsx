import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="location" className="bg-[#030303] border-t border-carbon pt-16 pb-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
        
        {/* Column 1: Brand Core */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-2xl uppercase tracking-tighter text-titanium leading-none">EXOTIC</span>
            <span className="font-heading text-sm uppercase tracking-widest text-[#10FF00] leading-none">MOTORSPORTS</span>
          </Link>
          <p className="text-grey-bore text-sm max-w-sm">
            Miami&apos;s premier clinical service facility for high-net-worth supercar assets. Precision. Experience. Detail.
          </p>
          <ul className="flex flex-col gap-4 text-sm text-grey-bore mt-4">
            <li>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                <span className="max-w-[200px] leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
            </li>
            <li>
              <a href={CONTACT_INFO.phoneLink} className="flex items-center gap-3 hover:text-[#10FF00] transition-colors">
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </li>
            <li>
              <a href="mailto:service@theexoticmotorsports.com" className="flex items-center gap-3 hover:text-[#10FF00] transition-colors">
                <Mail className="w-4 h-4" />
                <span>service@theexoticmotorsports.com</span>
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#10FF00] transition-colors">
                <Instagram className="w-4 h-4" />
                <span>{CONTACT_INFO.instagramHandle}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Hours & Specs */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm text-titanium uppercase tracking-widest">Operating Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-grey-bore">
              <div className="flex justify-between max-w-[200px]">
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm text-titanium uppercase tracking-widest">Specializations</h4>
            <ul className="flex flex-col gap-2 text-sm text-grey-bore">
              <li>Ferrari</li>
              <li>Lamborghini</li>
              <li>Rolls-Royce</li>
              <li>Bentley</li>
              <li>McLaren</li>
              <li>Porsche</li>
            </ul>
          </div>
        </div>

        {/* Column 3: Google Maps iframe */}
        <div className="flex flex-col h-full w-full">
          <div className="w-full aspect-video md:aspect-auto md:h-full min-h-[250px] bg-carbon border border-white/5 relative overflow-hidden rounded-md">
            <iframe 
              src={CONTACT_INFO.mapEmbedUrl} 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Exotic Motorsports Location"
            />
          </div>
        </div>
        
      </div>

      <div className="container mx-auto pt-8 border-t border-carbon flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-grey-bore tracking-widest uppercase">
        <p>&copy; {currentYear} {CONTACT_INFO.legalName}. All rights reserved. <a href="https://theexoticmotorsports.com" className="hover:text-[#10FF00]">theexoticmotorsports.com</a></p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#10FF00]">PRIVACY POLICY</a>
          <a href="#" className="hover:text-[#10FF00]">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
