import Image from "next/image";

const features = [
  {
    icon: "/icons/moderne-priestory.svg",
    title: "Moderné priestory",
  },
  {
    icon: "/icons/bezchybna-kvalita.svg",
    title: "Bezchybná kvalita práce",
  },
  {
    icon: "/icons/kompletne-riesenie.svg",
    title: "Kompletné riešenie poistných udalostí",
  },
  {
    icon: "/icons/lakovanie.svg",
    title: "Lakovanie vozidiel",
  },
  {
    icon: "/icons/spokojni-zakaznici.svg",
    title: "Tisíce spokojných zákazníkov",
  },
];

export default function About() {
  return (
    <section id="onas" className="relative py-12 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="pt-4">
            <h2 className="section-heading mb-10">O nás</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Už viac ako 20 rokov poskytujeme profesionálne a spoľahlivé služby
                v oblasti opravy a údržby vozidiel. Naša Bratislavská dielňa ponúka
                široké spektrum služieb, od bežnej údržby až po kompletné opravy.
              </p>
              <p>
                Sme hrdí na našu dlhoročnú skúsenosť a vysokú úroveň odbornosti,
                vďaka čomu si nás naši zákazníci vážia a dôverujú nám.
              </p>
            </div>
          </div>

          {/* Feature icons - pulled up into hero */}
          <div className="about-icons-gradient p-8 grid gap-5 md:-mt-32 relative z-20">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-white font-medium text-sm">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
