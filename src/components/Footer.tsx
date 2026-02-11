"use client";

import Link from "next/link";

export default function Footer({
  onOpenCookieSettings,
}: {
  onOpenCookieSettings: () => void;
}) {
  return (
    <footer className="bg-primary py-10 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div className="text-white/80 text-sm space-y-1">
            <h4 className="text-white font-bold text-base mb-3">VOSS AUTOSERVIS s.r.o.</h4>
            <p>Sídlo firmy: Galvaniho 12B, Bratislava</p>
            <p>Tel: <a href="tel:+421253635007" className="hover:text-white transition-colors">02/53635007</a></p>
            <p>Email: <a href="mailto:info@vossautoservis.sk" className="hover:text-white transition-colors">info@vossautoservis.sk</a></p>
          </div>

          {/* Navigation */}
          <div className="text-white/80 text-sm">
            <h4 className="text-white font-bold text-base mb-3">Navigácia</h4>
            <nav className="flex flex-col gap-2">
              <a href="#sluzby" className="hover:text-white transition-colors">Služby</a>
              <a href="#poistne" className="hover:text-white transition-colors">Poistné udalosti</a>
              <a href="#galeria" className="hover:text-white transition-colors">Galéria</a>
              <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
            </nav>
          </div>

          {/* Legal */}
          <div className="text-white/80 text-sm">
            <h4 className="text-white font-bold text-base mb-3">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/gdpr" className="hover:text-white transition-colors">
                Ochrana osobných údajov
              </Link>
              <button
                onClick={onOpenCookieSettings}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Nastavenia cookies
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">
            Copyright &copy; {new Date().getFullYear()} Voss Autoservis s.r.o.,
            všetky práva vyhradené
          </p>
          <p className="text-white/80 text-sm">
            Tvorba webu –{" "}
            <a
              href="https://aebdigital.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              AEB Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
