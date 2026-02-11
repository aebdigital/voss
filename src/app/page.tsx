"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import InsurancePartners from "@/components/InsurancePartners";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookiePopup from "@/components/CookiePopup";
import CookieSettings from "@/components/CookieSettings";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <InsurancePartners />
        <Gallery />
        <Partners />
        <ContactForm />
        <Contact />
      </main>
      <Footer onOpenCookieSettings={() => setCookieSettingsOpen(true)} />
      <CookiePopup onOpenSettings={() => setCookieSettingsOpen(true)} />
      <CookieSettings
        open={cookieSettingsOpen}
        onClose={() => setCookieSettingsOpen(false)}
      />
    </>
  );
}
