"use client";

import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

type Partner = {
  src: string;
  alt: string;
  logos?: Logo[];
};

const partners: Partner[] = [
  { src: "/partneri/bmw.jpg", alt: "BMW AutoMotiv" },
  { src: "/partneri/toyota.png", alt: "Autogrand Toyota" },
  { src: "/partneri/porsche.png", alt: "Porsche" },
  { src: "/partneri/posrchedolonzemska.png", alt: "Porsche Dolnozemská" },
  {
    src: "/Mercedes-Logo.svg.png",
    alt: "HEDIN AUTOMOTIVE",
    logos: [
      { src: "/Mercedes-Logo.svg.png", alt: "Mercedes-Benz" },
      { src: "/partneri/honda.png", alt: "Honda" },
      { src: "/partneri/kia.jpg", alt: "Kia" },
      { src: "/alfaromeo.png", alt: "Alfa Romeo" },
    ],
  },
  { src: "/tesla2.png", alt: "Tesla Center Bratislava" },
  { src: "/partneri/hyundai.png", alt: "Hyundai" },
];

export default function Partners() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="section-heading mb-12">Naši partneri</h2>

        {/* Slider container */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.alt}-${i}`}
                className={`flex-shrink-0 mx-2 md:mx-10 flex flex-col items-center justify-center gap-4 ${
                  partner.logos
                    ? "w-[240px] md:w-[320px]"
                    : "w-[180px] md:w-[250px]"
                }`}
              >
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {partner.logos ? (
                    <div className="grid grid-cols-2 place-items-center gap-2">
                      {partner.logos.map((logo) => (
                        <Image
                          key={logo.alt}
                          src={logo.src}
                          alt={logo.alt}
                          width={56}
                          height={56}
                          className="object-contain max-h-14"
                        />
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={130}
                      height={130}
                      className="object-contain max-h-32"
                    />
                  )}
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
