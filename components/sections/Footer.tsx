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
            <span className="font-heading text-sm uppercase tracking-widest text-acid-green leading-none">MOTORSPORTS</span>
          </Link>
          <p className="text-grey-bore text-sm max-w-sm">
            Miami's premier clinical service facility for high-net-worth supercar assets. Precision. Experience. Detail.
          </p>
          <ul className="flex flex-col gap-4 text-sm text-grey-bore mt-4">
            <li>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                <span className="max-w-[200px] leading-relaxed">1300 NW 29th Street<br/>Miami, Florida 33142</span>
              </div>
            </li>
            <li>
              <a href="mailto:service@theexoticmotorsports.com" className="flex items-center gap-3 hover:text-acid-green transition-colors">
                <Mail className="w-4 h-4" />
                <span>service@theexoticmotorsports.com</span>
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-acid-green transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@TheExoticMotorsports</span>
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
                <span>Monday - Friday</span>
                <span className="text-titanium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Saturday - Sunday</span>
                <span className="text-acid-green">Closed</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm text-titanium uppercase tracking-widest">Specializations</h4>
            <ul className="flex flex-col gap-2 text-sm text-grey-bore">
              <li>Ferrari</li>
              <li>Lamborghini</li>
              <li>Rolls-Royce</li>
            </ul>
          </div>
        </div>

        {/* Column 3: Google Maps iframe */}
        <div className="flex flex-col h-full w-full">
          <div className="w-full aspect-video md:aspect-auto md:h-full min-h-[250px] bg-carbon border border-white/5 relative overflow-hidden grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.954605988019!2d-80.22271872365288!3d25.79720490895521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6c00cfd02c7%3A0xa12604ce2d914ab!2s1300%20NW%2029th%20St%2C%20Miami%2C%20FL%2033142!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
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
        <p>&copy; {currentYear} {CONTACT_INFO.businessName}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-acid-green">PRIVACY POLICY</a>
          <a href="#" className="hover:text-acid-green">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
