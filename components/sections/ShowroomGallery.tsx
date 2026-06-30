import Image from "next/image";

export function ShowroomGallery() {
  const images = [
    "/carbay.webp",
    "/ferrariengine.webp",
    "/ferr.webp",
    "/l1.webp"
  ];

  return (
    <section className="bg-onyx py-24 px-4 border-t border-carbon">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-titanium uppercase tracking-tight">
            Our <span className="text-acid-green">Showroom</span>
          </h2>
          <p className="text-grey-bore mt-4 max-w-xl">
            A look into our pristine clinical service environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-video rounded-md overflow-hidden border border-white/5 transition-all duration-500">
              <Image 
                src={src} 
                alt={`Showroom image ${i + 1}`}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
