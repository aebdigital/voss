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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", email: "", message: "", gdpr: false });
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

          <button
            type="submit"
            className="border-2 border-white text-white font-bold uppercase px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
          >
            {submitted ? "Odoslané!" : "Odoslať"}
          </button>
        </form>
      </div>
    </section>
  );
}
