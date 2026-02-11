"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    gdpr: false,
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "", gdpr: false });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Nepodarilo sa odoslať správu.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Nastala chyba. Skúste neskôr.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonText = {
    idle: "Odoslať",
    sending: "Odosiela sa...",
    success: "Odoslané!",
    error: "Chyba",
  };

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4">
          Objednávka
        </h2>
        <p className="text-white/80 mb-8">
          V prípade záujmu nás neváhajte kontaktovať cez tento formulár.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <input
            type="text"
            placeholder="Vaše Meno"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-none focus:outline-none focus:border-white/50 transition-colors"
          />
          <input
            type="tel"
            placeholder="Telefón"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-none focus:outline-none focus:border-white/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Váš Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-none focus:outline-none focus:border-white/50 transition-colors"
          />
          <textarea
            placeholder="Vaša správa"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-none focus:outline-none focus:border-white/50 transition-colors resize-none"
          />

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={form.gdpr}
              onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
              className="mt-1 w-4 h-4 accent-white"
            />
            <span className="text-white/80 text-sm">
              Odoslaním formulára Súhlasíte so spracovaním osobných údajov za
              účelom spracovania objednávky.
            </span>
          </label>

          {status === "error" && errorMsg && (
            <p className="text-red-300 text-sm">{errorMsg}</p>
          )}

          {status === "success" && (
            <p className="text-green-300 text-sm">
              Správa bola úspešne odoslaná. Budeme Vás kontaktovať.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="border-2 border-white text-white font-bold uppercase px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {buttonText[status]}
          </button>
        </form>
      </div>
    </section>
  );
}
