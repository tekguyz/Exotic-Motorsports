import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { SupercarVault } from "@/components/sections/SupercarVault";
import { MechanicalMatrix } from "@/components/sections/MechanicalMatrix";
import { ShowroomGallery } from "@/components/sections/ShowroomGallery";
import { WhiteGloveLogistics } from "@/components/sections/WhiteGloveLogistics";
import { ConsultationEngine } from "@/components/sections/ConsultationEngine";
import { Footer } from "@/components/sections/Footer";
import { MobileCTA } from "@/components/sections/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F1F5F9] antialiased selection:bg-[#10FF00] selection:text-black">
      <Nav/>
      <Hero/>
      <SupercarVault/>
      <MechanicalMatrix/>
      <ShowroomGallery/>
      <WhiteGloveLogistics/>
      <div id="appointment-section" className="py-20 bg-[#050505]">
        <ConsultationEngine/>
      </div>
      <Footer/>
      <MobileCTA/>
    </main>
  );
}
