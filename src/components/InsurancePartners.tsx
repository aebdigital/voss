"use client";

import Image from "next/image";

const partners = [
  { src: "/poistovne-color/csob-poistovna.png", alt: "ČSOB Poisťovňa" },
  { src: "/poistovne-color/wustenrot.png", alt: "Wüstenrot" },
  { src: "/poistovne-color/uniqua.png", alt: "UNIQA" },
  { src: "/poistovne-color/kooperativa.png", alt: "Kooperatíva" },
  { src: "/poistovne-color/generali.png", alt: "Generali" },
  { src: "/poistovne-color/allianz.png", alt: "Allianz" },
  { src: "/poistovne-color/union.png", alt: "Union" },
  { src: "/poistovne-color/komunalna-poistovna.png", alt: "Komunálna poisťovňa" },
];

export default function InsurancePartners() {
  return (
    <section id="poistne" className="py-20 px-4 bg-gray-bg shadow-[0_8px_24px_-4px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="section-heading leading-[0.9] mb-6 md:leading-normal md:mb-12">
          Zmluvní partneri
        </h2>

        {/* Slider container */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll-left-slow hover:[animation-play-state:paused]">
            {/* Double the items for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.alt}-${i}`}
                className="flex-shrink-0 w-[140px] mx-2 md:w-[180px] md:mx-6 flex items-center justify-center h-20"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={60}
                  className="object-contain max-h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
