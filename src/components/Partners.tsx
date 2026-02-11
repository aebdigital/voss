"use client";

import Image from "next/image";

const partners = [
  { src: "/partneri/bmw.jpg", alt: "BMW AutoMotiv" },
  { src: "/partneri/toyota.png", alt: "Autogrand Toyota" },
  { src: "/partneri/porsche.png", alt: "Porsche" },
  { src: "/partneri/posrchedolonzemska.png", alt: "Porsche Dolnozemská" },
  { src: "/partneri/honda.png", alt: "Honda" },
  { src: "/partneri/hyundai.png", alt: "Hyundai" },
  { src: "/partneri/kia.jpg", alt: "Kia" },
  { src: "/partneri/mercedes.png", alt: "Mercedes" },
];

export default function Partners() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="section-heading mb-12">Naši partneri</h2>

        {/* Slider container */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.alt}-${i}`}
                className="flex-shrink-0 w-[250px] mx-10 flex flex-col items-center justify-center gap-4"
              >
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={130}
                    height={130}
                    className="object-contain max-h-32"
                  />
                </div>
                <span className="text-sm text-gray-500 text-center whitespace-nowrap font-medium">
                  {partner.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
