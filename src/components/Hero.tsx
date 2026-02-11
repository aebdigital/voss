"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center mt-16 md:mt-20 overflow-hidden mb-0">
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/galeria/4.jpg"
          alt="VOSS Autoservis"
          fill
          className="object-cover scale-[1.2]"
          priority
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 md:px-8 text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.95] mb-6 tracking-tight">
          Autoservis s dlhoročnými skúsenosťami
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl">
          Neváhajte nás kontaktovať s poistnými udalosťami a my sa o všetko
          postaráme za Vás.
        </p>
        <a
          href="#sluzby"
          className="inline-block border-2 border-white text-white font-bold uppercase px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
        >
          Naše služby
        </a>
      </div>
    </section>
  );
}
