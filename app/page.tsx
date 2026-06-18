import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "./components/RevealOnScroll";

const highlights = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
    title: "Villa Traditionnelle",
    description:
      "Architecture marocaine authentique avec arches, murs ocre et finitions artisanales.",
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Piscine Privee",
    description:
      "Grande piscine entouree de transats, baldaquins et jardins paysagers.",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Confort Premium",
    description:
      "Terrasse en zellige, salon exterieur en fer forge, four a bois traditionnel.",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Emplacement Ideal",
    description:
      "Situee a Marrakech avec un grand domaine verdoyant et parking prive.",
  },
];

const amenities = [
  "Piscine privee",
  "Jardins paysagers",
  "Terrasse en zellige",
  "Four a bois",
  "Salon exterieur",
  "Baldaquins",
  "Parking prive",
  "Wi-Fi haut debit",
  "Climatisation",
  "Cuisine equipee",
  "Terrain de jeux",
  "Personnel de maison",
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

const galleryImages = [
  {
    src: "/images/villa-piscine-facade.jpg",
    alt: "Vue sur la piscine et la facade de Safa Villa",
  },
  {
    src: "/images/piscine-baldaquin.jpg",
    alt: "Piscine avec baldaquin et jardins",
  },
  {
    src: "/images/terrasse-zellige.jpg",
    alt: "Terrasse en zellige avec salon en fer forge",
  },
  {
    src: "/images/villa-panorama.jpg",
    alt: "Vue panoramique de la villa et du domaine",
  },
  {
    src: "/images/four-bois.jpg",
    alt: "Four a bois traditionnel de la villa",
  },
  {
    src: "/images/piscine-transats.jpg",
    alt: "Piscine avec transats et parasols",
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Safa Villa",
            description:
              "Villa de luxe a Marrakech avec piscine privee, jardins paysagers et terrasse en zellige.",
            url: "https://safavilla.com",
            image: "https://safavilla.com/images/villa-vue-ensemble.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marrakech",
              addressCountry: "MA",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
            amenityFeature: amenities.map((a) => ({
              "@type": "LocationFeatureSpecification",
              name: a,
              value: true,
            })),
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/villa-vue-ensemble.jpg"
          alt="Safa Villa - Villa de luxe avec piscine a Marrakech"
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
            Safa Villa
          </h1>
          <p className="text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up stagger-2 text-warm-white/90">
            Une villa d&apos;exception au coeur de Marrakech. Piscine privee,
            jardins luxuriants et art de vivre marocain.
          </p>
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
            alt="Entree majestueuse de Safa Villa avec palmiers"
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

                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                      <span className="text-sm font-light text-charcoal/70">
                        {item}
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
          alt="Villa Safa avec piscine et jardin"
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
            Marrakech. Disponible pour des sejours a partir de 2 nuits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservation"
              className="bg-gold text-charcoal px-10 py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300"
            >
              Verifier les disponibilites
            </Link>
            <Link
              href="/contact"
              className="border border-warm-white/60 text-warm-white px-10 py-4 text-sm font-light tracking-wide hover:bg-warm-white/10 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
