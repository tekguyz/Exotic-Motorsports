import Image from "next/image";

export function ShowroomGallery() {
  const images = [
    { src: "/carbay.webp", alt: "Clinical grade diagnostic and service bay", position: "object-center" },
    { src: "/ferrariengine.webp", alt: "Ferrari V12 engine clinical level block inspection", position: "object-top" },
    { src: "/ferr.webp", alt: "High-performance Ferrari service inspection", position: "object-center" },
    { src: "/l1.webp", alt: "Master technicians specialized service hub", position: "object-center" }
  ];

  return (
    <section className="bg-onyx py-24 px-4 border-t border-carbon">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-titanium uppercase tracking-tight">
            Our <span className="text-[#10FF00]">Showroom</span>
          </h2>
          <p className="text-grey-bore mt-4 max-w-xl">
            A look into our pristine clinical service environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-video rounded-md overflow-hidden border border-white/5 transition-all duration-500">
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className={`object-cover ${img.position}`}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
