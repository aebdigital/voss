"use client";

import { useState, useEffect } from "react";

interface CookieSettingsProps {
  open: boolean;
  onClose: () => void;
}

export default function CookieSettings({ open, onClose }: CookieSettingsProps) {
  const [statistics, setStatistics] = useState(false);

  useEffect(() => {
    if (open) {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        const parsed = JSON.parse(consent);
        setStatistics(parsed.statistics || false);
      }
    }
  }, [open]);

  const save = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, statistics })
    );
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 lightbox-overlay"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Nastavenia cookies</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="space-y-5">
          {/* Necessary */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-sm">Nevyhnutné cookies</h4>
              <p className="text-gray-500 text-xs mt-1">
                Zabezpečujú základnú funkčnosť stránky. Nie je možné ich
                vypnúť.
              </p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow" />
            </div>
          </div>

          {/* Statistics */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-sm">
                Štatistické (analytické) cookies
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Pomáhajú nám pochopiť, ako návštevníci stránku používajú.
              </p>
            </div>
            <button
              onClick={() => setStatistics(!statistics)}
              className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${
                statistics ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-all ${
                  statistics ? "right-0.5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={save}
            className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm cursor-pointer"
          >
            Uložiť nastavenia
          </button>
          <button
            onClick={() => {
              setStatistics(true);
              localStorage.setItem(
                "cookie-consent",
                JSON.stringify({ necessary: true, statistics: true })
              );
              onClose();
            }}
            className="border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm cursor-pointer"
          >
            Prijať všetky
          </button>
        </div>
      </div>
    </div>
  );
}
