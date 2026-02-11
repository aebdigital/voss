import Image from "next/image";

const services = [
  {
    image: "/sluzby/mechanical-works.jpg",
    title: "Mechanické práce",
  },
  {
    image: "/sluzby/klampiarske-prace.jpg",
    title: "Klampiarske práce",
  },
  {
    image: "/sluzby/elektrikarske-prace.jpg",
    title: "Elektrikárske práce",
  },
  {
    image: "/sluzby/lakovnicne.jpg",
    title: "Lakovnícke práce",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-20 px-4 bg-gray-bg">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="section-heading mb-12">Naše služby</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-gray-800">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
