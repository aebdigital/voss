export default function Contact() {
  return (
    <section id="kontakt" className="py-20 px-4">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="section-heading mb-12">Kontakt</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">VOSS AUTOSERVIS s.r.o.</h3>
              <p className="text-gray-600">
                Sídlo firmy: Galvaniho 12B, Bratislava
              </p>
              <p className="text-gray-600">
                Tel:{" "}
                <a
                  href="tel:+421253635007"
                  className="text-primary hover:underline"
                >
                  02/53635007
                </a>
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:info@vossautoservis.sk"
                  className="text-primary hover:underline"
                >
                  info@vossautoservis.sk
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">
                Prevádzka: Galvaniho 12B, Bratislava
              </h4>
              <h4 className="font-bold mb-1">Otváracie hodiny:</h4>
              <p className="text-gray-600">
                Pondelok – piatok 7:30 – 16:00
              </p>
              <p className="text-gray-600">
                Obedná prestávka: 12:00 – 12:30 hod
              </p>
              <p className="text-gray-600">Sobota a Nedeľa: zatvorené</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Vedenie spoločnosti:</h4>
              <p className="text-gray-600">Radoslav Repiský</p>
              <p className="text-gray-600">
                Tel:{" "}
                <a
                  href="tel:+421905428656"
                  className="text-primary hover:underline"
                >
                  0905 428 656
                </a>
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:r.repisky@gmail.com"
                  className="text-primary hover:underline"
                >
                  r.repisky@gmail.com
                </a>
              </p>
            </div>

            <div className="text-gray-500 text-sm space-y-1">
              <p>
                Spoločnosť je zapísaná v OR SR Bratislava I., oddiel Sro, vložka
                100092/B
              </p>
              <p>IČO: 47 816 406, DIČ: 20 24 12 89 75</p>
              <p>IČ DPH: SK 20 24 12 89 75</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[550px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d17.1536!3d48.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89290a9c22a3%3A0x77d48d7b59ba95fc!2s!5e0!3m2!1ssk!2ssk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VOSS Autoservis mapa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
