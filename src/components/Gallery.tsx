"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/galeria/12.jpeg",
  "/galeria/13.jpg",
  "/galeria/14.jpg",
  "/galeria/15.jpeg",
  "/galeria/16.jpg",
  "/galeria/2.jpg",
  "/galeria/3.jpg",
  "/galeria/4.jpg",
  "/galeria/5.jpeg",
  "/galeria/6.jpg",
  "/galeria/7.jpg",
  "/galeria/8.jpg",
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="section-heading mb-12">Galéria</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(i)}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Galéria ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox === 0 ? images.length - 1 : lightbox - 1);
            }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer"
          >
            &#8249;
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={images[lightbox]}
              alt={`Galéria ${lightbox + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox === images.length - 1 ? 0 : lightbox + 1);
            }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
