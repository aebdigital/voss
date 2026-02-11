export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "VOSS AUTOSERVIS s.r.o.",
    alternateName: "VOSS Autoservis",
    description:
      "Profesionálny autoservis v Bratislave s viac ako 20-ročnými skúsenosťami. Mechanické, klampiarske, elektrikárske a lakovnícke práce. Kompletné riešenie poistných udalostí.",
    url: "https://vossautoservis.sk",
    logo: "https://vossautoservis.sk/logo-voss.png",
    image: "https://vossautoservis.sk/galeria/4.jpg",
    telephone: "+421253635007",
    email: "info@vossautoservis.sk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galvaniho 12B",
      addressLocality: "Bratislava",
      addressRegion: "Bratislavský kraj",
      postalCode: "821 04",
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1486,
      longitude: 17.1536,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "16:00",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "City",
      name: "Bratislava",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Autoservisné služby",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mechanické práce",
            description:
              "Kompletné mechanické opravy a údržba vozidiel všetkých značiek.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klampiarske práce",
            description:
              "Profesionálne klampiarske práce a opravy karosérie vozidiel.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Elektrikárske práce",
            description:
              "Diagnostika a oprava elektrickej inštalácie vozidiel.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lakovnícke práce",
            description:
              "Profesionálne lakovanie vozidiel v modernej lakovni.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Poistné udalosti",
            description:
              "Kompletné riešenie poistných udalostí vrátane komunikácie s poisťovňou.",
          },
        },
      ],
    },
    sameAs: [],
    foundingDate: "2003",
    legalName: "VOSS AUTOSERVIS s.r.o.",
    taxID: "SK2024128975",
    vatID: "SK2024128975",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domov",
        item: "https://vossautoservis.sk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Služby",
        item: "https://vossautoservis.sk/#sluzby",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Kontakt",
        item: "https://vossautoservis.sk/#kontakt",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
