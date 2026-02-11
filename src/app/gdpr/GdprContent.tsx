"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieSettings from "@/components/CookieSettings";

export default function GdprContent() {
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <main className="max-w-[1440px] mx-auto px-4 py-16 mt-16 md:mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-8">
          Zásady ochrany osobných údajov
        </h1>

        <div className="space-y-2 mb-10 text-gray-700">
          <p>
            <strong>AEB Digital s. r. o.</strong>
          </p>
          <p>IČO: 57 307 709</p>
          <p>Konateľ: Peter Samuel Bobák</p>
          <p>
            E-mail:{" "}
            <a
              href="mailto:peter@aebdig.com"
              className="text-primary hover:underline"
            >
              peter@aebdig.com
            </a>
          </p>
          <p>
            Tel.:{" "}
            <a
              href="tel:+421908507131"
              className="text-primary hover:underline"
            >
              +421 908 507 131
            </a>
          </p>
        </div>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Tieto Zásady ochrany osobných údajov (ďalej len
          &bdquo;Zásady&ldquo;) popisujú, aké osobné údaje spracúvame v
          súvislosti s používaním našej webovej stránky a kontaktných
          formulárov.
        </p>

        {/* Section I */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">
            I. Kontaktný formulár
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Na stránke www.aebdigital.sk prevádzkujeme kontaktný formulár na
            dvoch samostatných stránkach, ktorého účelom je umožniť vám:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 ml-4">
            <li>Položiť otázku k našim produktom a službám</li>
            <li>Požiadať o cenovú ponuku</li>
          </ul>

          <h3 className="font-semibold text-gray-800 mb-2">
            Rozsah spracúvaných údajov:
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 ml-4">
            <li>Meno a priezvisko</li>
            <li>E-mailová adresa</li>
            <li>Telefónne číslo</li>
          </ul>

          <h3 className="font-semibold text-gray-800 mb-2">
            Účel spracovania:
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať
            na váš dopyt.
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">
            Právny základ:
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím
            zmluvy na žiadosť dotknutej osoby.
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">
            Doba uchovávania:
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš
            dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
          </p>
        </section>

        {/* Section II */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">
            II. Súbory cookies
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Na našej webovej stránke používame cookies výlučne na nasledujúce
            účely:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 ml-4">
            <li>
              <strong>Nevyhnutné cookies</strong> – zabezpečujú základnú
              funkčnosť stránky (napr. ukladanie relácie, nastavení
              prehliadača).
            </li>
            <li>
              <strong>Štatistické (analytické) cookies</strong> – pomáhajú nám
              pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len
              so súhlasom používateľa).
            </li>
          </ul>

          <h3 className="font-semibold text-gray-800 mb-2">
            Správa súhlasov:
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických
            cookies prostredníctvom nastavení cookie lišty alebo priamo v
            prehliadači.
          </p>
        </section>

        {/* Section III */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">
            III. Práva dotknutej osoby
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Podľa nariadenia GDPR máte nasledujúce práva:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 ml-4">
            <li>Prístup k osobným údajom, ktoré spracúvame</li>
            <li>Oprava nepresných alebo neúplných údajov</li>
            <li>
              Vymazanie (&bdquo;právo zabudnutia&ldquo;), ak na spracovanie už
              nie je právny základ
            </li>
            <li>Obmedzenie spracovania</li>
            <li>Prenosnosť údajov</li>
            <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
            <li>
              Podanie sťažnosti u Úradu na ochranu osobných údajov SR
              (Hraničná 12, 820 07 Bratislava,{" "}
              <a
                href="https://www.dataprotection.gov.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.dataprotection.gov.sk
              </a>
              )
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            V prípade otázok alebo uplatnenia Vašich práv nás môžete
            kontaktovať na{" "}
            <a
              href="mailto:reachout@aebdig.com"
              className="text-primary hover:underline"
            >
              reachout@aebdig.com
            </a>{" "}
            alebo telefónnom čísle{" "}
            <a
              href="tel:+421917422245"
              className="text-primary hover:underline"
            >
              +421 917 422 245
            </a>
            .
          </p>
        </section>

        <p className="text-gray-500 text-sm italic">
          Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.
        </p>
      </main>

      <Footer onOpenCookieSettings={() => setCookieSettingsOpen(true)} />
      <CookieSettings
        open={cookieSettingsOpen}
        onClose={() => setCookieSettingsOpen(false)}
      />
    </div>
  );
}
