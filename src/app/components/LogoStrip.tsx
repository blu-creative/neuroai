const logos = [
  { src: "/images/certifications/stevie-award.png", alt: "2025 Stevie Winner - American Business Awards" },
  { src: "/images/certifications/tips-vendor.png", alt: "TIPS Awarded Vendor" },
  { src: "/images/certifications/camsc.png", alt: "CAMSC" },
  { src: "/images/certifications/pme-mtl.png", alt: "PME MTL" },
  { src: "/images/certifications/nc-sheriffs.png", alt: "North Carolina Sheriffs' Association Procurement Programs" },
  { src: "/images/certifications/fluxx-award.png", alt: "Fluxx Award" },
];

export function LogoStrip() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 overflow-hidden px-[24px] pt-[0px] pb-[80px]" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto mb-8">
        <h3 id="partners-heading" className="text-center text-[#001957] mb-4 font-[DM_Sans] text-[32px]">Certifications & Awards</h3>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
        
        {/* Scrolling container */}
        <div className="flex overflow-hidden" role="list" aria-label="Partner organizations and certifications">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-12 flex items-center justify-center"
                role="listitem"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 px-12 flex items-center justify-center"
                role="listitem"
                aria-hidden="true"
              >
                <img
                  src={logo.src}
                  alt=""
                  className="h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}