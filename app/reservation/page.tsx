import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Reservation",
  description:
    "Reservez votre sejour a Luxury Villa, villa de luxe avec piscine privee a Marrakech. Reservez sur Booking.com ou contactez-nous sur WhatsApp.",
  openGraph: {
    title: "Reservation | Luxury Villa",
    description:
      "Reservez votre sejour de reve a Marrakech via Booking.com ou WhatsApp.",
    images: [
      {
        url: "/images/villa-vue-ensemble.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Villa - Reservez votre sejour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reservation | Luxury Villa",
    description:
      "Reservez votre sejour a Luxury Villa, Marrakech.",
    images: ["/images/villa-vue-ensemble.jpg"],
  },
  alternates: {
    canonical: "https://luxuryvilla.com/reservation",
  },
};

export default async function ReservationPage() {
  const { data: villa } = await supabase
    .from("villas")
    .select("*")
    .eq("nom", "Luxury Villa")
    .single();

  return (
    <>
      {/* JSON-LD Offer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: villa?.nom ?? "Luxury Villa",
            url: "https://luxuryvilla.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Douar Ait Lahmad VILLA, Azib Oulad Ladem",
              addressLocality: "Marrakech",
              postalCode: "40000",
              addressRegion: "Marrakech-Safi",
              addressCountry: "MA",
            },
            checkinTime: "15:00",
            checkoutTime: "11:00",
            makesOffer: villa
              ? {
                  "@type": "Offer",
                  name: `Sejour a ${villa.nom}`,
                  description: `Villa de luxe a Marrakech avec piscine privee. Capacite : ${villa.capacite} personnes.`,
                  price: villa.prix_nuit,
                  priceCurrency: "MAD",
                  availability: "https://schema.org/InStock",
                  url: "https://www.booking.com/Share-XTYYE6",
                }
              : undefined,
          }),
        }}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/villa-vue-ensemble.jpg"
          alt="Luxury Villa - Villa de luxe a Marrakech"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 text-center text-warm-white px-6">
          <p className="text-xs uppercase tracking-[0.3em] mb-3 font-light">
            Planifiez votre sejour
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light">
            Reservation
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-light text-charcoal/70 leading-relaxed mb-12">
            Reservez votre sejour a Luxury Villa directement sur Booking.com
            ou contactez-nous sur WhatsApp pour toute demande personnalisee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Booking.com */}
            <a
              href="https://www.booking.com/Share-XTYYE6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#003580] text-white text-sm font-medium tracking-wide hover:bg-[#00224f] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 7h5v10H2V7zm7 0h5v4h3l-4 6H9V7zm10 0h3v10h-3V7z" />
              </svg>
              Reserver sur Booking.com
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212666588286?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20Luxury%20Villa%20%C3%A0%20Marrakech."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm font-medium tracking-wide hover:bg-[#1da851] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contacter sur WhatsApp
            </a>
          </div>

          {/* Infos pratiques */}
          <div className="bg-sand-50 border border-sand-200 p-8 sm:p-10 text-left max-w-xl mx-auto">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-charcoal mb-6 text-center">
              Informations pratiques
            </h2>
            <div className="space-y-4 text-sm font-light text-charcoal/70">
              <div className="flex justify-between border-b border-sand-200 pb-3">
                <span>Arrivee</span>
                <span className="font-medium text-charcoal">A partir de 15h</span>
              </div>
              <div className="flex justify-between border-b border-sand-200 pb-3">
                <span>Depart</span>
                <span className="font-medium text-charcoal">Avant 11h</span>
              </div>
              <div className="flex justify-between border-b border-sand-200 pb-3">
                <span>Capacite</span>
                <span className="font-medium text-charcoal">
                  {villa?.capacite ?? "-"} personnes
                </span>
              </div>
              <div className="flex justify-between border-b border-sand-200 pb-3">
                <span>Localisation</span>
                <span className="font-medium text-charcoal">Douar Ait Lahmad, Azib Oulad Ladem, 40000, Maroc</span>
              </div>
              <div className="flex justify-between">
                <span>Petit-dejeuner</span>
                <span className="font-medium text-charcoal">Inclus</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sand-200 text-center">
              <p className="text-sm font-light text-charcoal/50 mb-4">
                Une question ? Contactez-nous directement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+212666588286"
                  className="text-sm font-medium text-charcoal hover:text-gold transition-colors"
                >
                  +212 6 66 58 82 86
                </a>
                <span className="hidden sm:inline text-charcoal/30">&middot;</span>
                <Link
                  href="/contact"
                  className="text-sm font-light text-charcoal/60 hover:text-charcoal transition-colors underline underline-offset-4"
                >
                  Formulaire de contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
