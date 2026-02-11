"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Služby", href: "#sluzby" },
    { label: "Poistné udalosti", href: "#poistne" },
    { label: "Galéria", href: "#galeria" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="bg-primary fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-voss.png"
            alt="VOSS Autoservis"
            width={140}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white text-base font-medium uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Opening hours */}
        <div className="hidden md:flex items-center gap-3 text-white">
          <Image
            src="/icons/clock.svg"
            alt="Otváracie hodiny"
            width={36}
            height={36}
          />
          <div className="flex flex-col">
            <span className="text-sm text-white/70 uppercase leading-tight">
              Otvorené pondelok - piatok
            </span>
            <span className="text-xl font-bold leading-tight">
              7:30 – 16:00
            </span>
          </div>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-white text-sm font-medium uppercase tracking-wide py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="text-white/70 text-xs pt-2 border-t border-white/10">
              Pondelok - Piatok: 7:30 – 16:00
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
