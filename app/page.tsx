import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { supabase } from "@/lib/supabase";

const highlights = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
    title: "6 Chambres spacieuses",
    description:
      "2 suites parentales, 2 grandes chambres et 2 chambres individuelles pour accueillir toute la famille.",
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Piscine Privee",
    description:
      "Grande piscine entouree de transats, baldaquins et jardins paysagers sur un domaine de 5 000 m².",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Securite & Service",
    description:
      "Securite sur place 24h/24 et service de femme de menage pour un sejour en toute serenite.",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Marrakech",
    description:
      "Situee a Marrakech avec un grand domaine verdoyant et parking prive.",
  },
];

const equipements = [
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1", label: "2 suites parentales" },
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1", label: "2 grandes chambres" },
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1", label: "2 chambres pour 1 personne" },
  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "6 salles de bain avec douche" },
  { icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5", label: "5 000 m² de terrain" },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Securite sur place" },
  { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "Service de femme de menage" },
  { icon: "M3 3h18v4H3V3zm0 6h18v12H3V9zm3 3h4v4H6v-4z", label: "Grande cuisine equipee" },
  { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm4 0h-2v-2h2v2zm-6-4V8h6v4H9z", label: "Four" },
  { icon: "M4 4h16v2H4V4zm2 4h12v2H6V8zm-2 4h16v8H4v-8zm3 2v4h2v-4H7zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z", label: "Barbecue" },
  { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", label: "Petit-dejeuner inclus" },
];

const reviews = [
  {
    name: "Sophie L.",
    location: "Paris, France",
    rating: 5,
    text: "Un sejour inoubliable dans un cadre paradisiaque. La villa est encore plus belle qu'en photo. Le personnel est aux petits soins.",
  },
  {
    name: "Ahmed K.",
    location: "Casablanca, Maroc",
    rating: 5,
    text: "Parfait pour une reunion de famille. Les jardins sont immenses et la piscine magnifique. Nous reviendrons sans hesiter.",
  },
  {
    name: "Marie D.",
    location: "Bruxelles, Belgique",
    rating: 5,
    text: "Le charme marocain authentique avec tout le confort moderne. La terrasse en zellige est un reve. Hautement recommande.",
  },
];

export default async function Home() {
  // Charger la villa et ses photos depuis Supabase
  const { data: villa } = await supabase
    .from("villas")
    .select("*")
    .eq("nom", "Luxury Villa")
    .single();

  const { data: photos } = await supabase
    .from("photos")
    .select("*")
    .eq("villa_id", villa?.id ?? "")
    .order("ordre", { ascending: true })
    .limit(6);

  const equipementsDb = villa?.equipements ?? [];
  const galleryImages = (photos ?? []).map((p) => ({
    src: p.url,
    alt: p.alt_text ?? "",
  }));

  return (
    <>
      {/* JSON-LD Structured Data — LodgingBusiness + Offer + Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: villa?.nom ?? "Luxury Villa",
            description: villa?.description ?? "",
            url: "https://luxuryvilla.com",
            image: [
              "https://luxuryvilla.com/images/villa-vue-ensemble.jpg",
              "https://luxuryvilla.com/images/villa-piscine-facade.jpg",
              "https://luxuryvilla.com/images/piscine-baldaquin.jpg",
            ],
            telephone: "+212666588286",
            email: "Luxuryvillakech@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Douar Ait Lahmad VILLA, Azib Oulad Ladem",
              addressLocality: "Marrakech",
              postalCode: "40000",
              addressRegion: "Marrakech-Safi",
              addressCountry: "MA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 31.6295,
              longitude: -7.9811,
            },
            starRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            numberOfRooms: 6,
            numberOfBathroomsTotal: 6,
            petsAllowed: false,
            checkinTime: "15:00",
            checkoutTime: "11:00",
            priceRange: villa
              ? `${villa.prix_nuit} MAD / nuit`
              : undefined,
            currenciesAccepted: "MAD",
            paymentAccepted: "Cash, Credit Card",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              reviewCount: "3",
            },
            review: reviews.map((r) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: r.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating,
                bestRating: 5,
              },
              reviewBody: r.text,
            })),
            makesOffer: villa
              ? {
                  "@type": "Offer",
                  name: `Sejour a ${villa.nom}`,
                  description: `Location de villa de luxe a Marrakech, jusqu'a ${villa.capacite} personnes`,
                  price: villa.prix_nuit,
                  priceCurrency: "MAD",
                  priceValidUntil: "2027-12-31",
                  availability: "https://schema.org/InStock",
                  url: "https://www.booking.com/Share-XTYYE6",
                }
              : undefined,
            amenityFeature: [
              ...equipements.map((e) => ({
                "@type": "LocationFeatureSpecification",
                name: e.label,
                value: true,
              })),
              ...equipementsDb.map((a) => ({
                "@type": "LocationFeatureSpecification",
                name: a,
                value: true,
              })),
            ],
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/villa-vue-ensemble.jpg"
          alt="Luxury Villa - Villa de luxe avec piscine a Marrakech"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        <div className="relative z-10 text-center text-warm-white px-6 max-w-4xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] mb-4 font-light animate-fade-up">
            Marrakech, Maroc
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6 animate-fade-up stagger-1">
            {villa?.nom ?? "Luxury Villa"}
          </h1>
          <p className="text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-4 animate-fade-up stagger-2 text-warm-white/90">
            Une villa d&apos;exception au coeur de Marrakech. Piscine privee,
            jardins luxuriants, petit-dejeuner inclus et art de vivre marocain.
          </p>
          {villa && (
            <p className="text-sm font-light mb-10 animate-fade-up stagger-2 text-gold-light">
              A partir de {villa.prix_nuit} MAD / nuit &middot; Jusqu&apos;a{" "}
              {villa.capacite} personnes
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Link
              href="/reservation"
              className="bg-warm-white text-charcoal px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-warm-white/90 transition-all duration-300"
            >
              Reserver votre sejour
            </Link>
            <Link
              href="/galerie"
              className="border border-warm-white/60 text-warm-white px-8 py-3.5 text-sm font-light tracking-wide hover:bg-warm-white/10 transition-all duration-300"
            >
              Decouvrir la villa
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-warm-white/0 to-warm-white/60" />
        </div>
      </section>

      {/* ========== HIGHLIGHTS ========== */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
              Pourquoi nous choisir
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-charcoal">
              Une experience unique
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="text-center p-6 group">
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-sand-300 rounded-full group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                    <svg
                      className="w-6 h-6 text-sand-500 group-hover:text-gold transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-2 text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-charcoal/60">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY PREVIEW ========== */}
      <section className="py-24 md:py-32 bg-sand-50 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
              Notre villa
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-charcoal">
              Galerie photos
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <RevealOnScroll key={img.src} delay={i * 80}>
                <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-block border border-charcoal text-charcoal px-8 py-3.5 text-sm font-light tracking-wide hover:bg-charcoal hover:text-warm-white transition-all duration-300"
            >
              Voir toutes les photos
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== FULL-WIDTH IMAGE BREAK ========== */}
      <RevealOnScroll>
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/entree-villa.jpg"
            alt="Entree majestueuse de Luxury Villa avec palmiers"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <blockquote className="text-center px-6 max-w-3xl">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-light text-warm-white leading-relaxed italic">
                &ldquo;Le luxe n&apos;est pas une question de prix, mais
                d&apos;experience&rdquo;
              </p>
            </blockquote>
          </div>
        </section>
      </RevealOnScroll>

      {/* ========== AMENITIES ========== */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative aspect-[3/4] max-h-[600px]">
                <Image
                  src="/images/jardin-detente.jpg"
                  alt="Espace detente au bord de la piscine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
                  Tout ce qu&apos;il vous faut
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-charcoal mb-8">
                  Equipements
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {equipements.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2">
                      <svg
                        className="w-5 h-5 text-gold shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                      <span className="text-sm font-light text-charcoal/70">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========== REVIEWS ========== */}
      <section className="py-24 md:py-32 bg-charcoal px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sand-400 mb-3">
              Temoignages
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-warm-white">
              Ce que disent nos hotes
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <RevealOnScroll key={review.name} delay={i * 150}>
                <div className="bg-warm-white/5 border border-warm-white/10 p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm font-light leading-relaxed text-warm-white/70 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div>
                    <p className="text-sm font-medium text-warm-white">
                      {review.name}
                    </p>
                    <p className="text-xs font-light text-warm-white/40">
                      {review.location}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <Image
          src="/images/villa-jardin-piscine.jpg"
          alt="Luxury Villa avec piscine et jardin"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        <RevealOnScroll className="relative z-10 text-center px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-light text-warm-white mb-6">
            Reservez votre sejour de reve
          </h2>
          <p className="text-base font-light text-warm-white/80 max-w-xl mx-auto mb-10">
            Offrez-vous une experience inoubliable dans notre villa de luxe a
            Marrakech avec petit-dejeuner inclus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.booking.com/Share-XTYYE6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#003580] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#00224f] transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 7h5v10H2V7zm7 0h5v4h3l-4 6H9V7zm10 0h3v10h-3V7z" />
              </svg>
              Reserver sur Booking.com
            </a>
            <a
              href="https://wa.me/212666588286?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20Luxury%20Villa%20%C3%A0%20Marrakech."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#1da851] transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contacter sur WhatsApp
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
