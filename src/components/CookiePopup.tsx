"use client";

import { useState, useEffect } from "react";

interface CookiePopupProps {
  onOpenSettings: () => void;
}

export default function CookiePopup({ onOpenSettings }: CookiePopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, statistics: true })
    );
    setVisible(false);
  };

  const rejectOptional = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, statistics: false })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:p-8">
        <h3 className="text-lg font-bold mb-2">
          Táto stránka používa cookies
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Používame cookies na zabezpečenie základnej funkčnosti stránky a na
          analytické účely. Nevyhnutné cookies sú potrebné pre správne
          fungovanie stránky. Štatistické cookies nám pomáhajú pochopiť, ako
          návštevníci používajú stránku.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={acceptAll}
            className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm cursor-pointer"
          >
            Prijať všetky
          </button>
          <button
            onClick={rejectOptional}
            className="bg-gray-200 text-gray-700 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-300 transition-colors text-sm cursor-pointer"
          >
            Odmietnuť voliteľné
          </button>
          <button
            onClick={() => {
              setVisible(false);
              onOpenSettings();
            }}
            className="border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm cursor-pointer"
          >
            Nastavenia
          </button>
        </div>
      </div>
    </div>
  );
}
