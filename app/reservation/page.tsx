import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import CalendrierDisponibilites from "./CalendrierDisponibilites";

export const metadata: Metadata = {
  title: "Reservation",
  description:
    "Reservez votre sejour a Luxury Villa, villa de luxe avec piscine privee a Marrakech. Verifiez les disponibilites et reservez en ligne.",
  openGraph: {
    title: "Reservation | Luxury Villa",
    description:
      "Verifiez les disponibilites et reservez votre sejour de reve a Marrakech. A partir de 6 000 MAD / nuit.",
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

  const { data: disponibilites } = await supabase
    .from("disponibilites")
    .select("date, disponible")
    .eq("villa_id", villa?.id ?? "")
    .gte("date", new Date().toISOString().split("T")[0])
    .order("date", { ascending: true });

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
              addressLocality: "Marrakech",
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
                  priceValidUntil: "2027-12-31",
                  availability: "https://schema.org/InStock",
                  url: "https://luxuryvilla.com/reservation",
                  eligibleQuantity: {
                    "@type": "QuantitativeValue",
                    minValue: 2,
                    unitText: "nuits",
                  },
                }
              : undefined,
          }),
        }}
      />

      <section className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
              Planifiez votre sejour
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4">
              Reservation
            </h1>
            {villa && (
              <p className="text-base font-light text-charcoal/60">
                {villa.prix_nuit.toLocaleString("fr-FR")} MAD / nuit &middot;
                Jusqu&apos;a {villa.capacite} personnes
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calendrier */}
            <div className="lg:col-span-2">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-charcoal mb-6">
                Disponibilites
              </h2>
              <CalendrierDisponibilites
                disponibilites={disponibilites ?? []}
                prixNuit={villa?.prix_nuit ?? 0}
              />
            </div>

            {/* Sidebar info */}
            <div>
              <div className="bg-sand-50 border border-sand-200 p-8 sticky top-32">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-charcoal mb-4">
                  Informations
                </h3>
                <div className="space-y-3 text-sm font-light text-charcoal/70 mb-6">
                  <p>Sejour minimum : 2 nuits</p>
                  <p>Arrivee : a partir de 15h</p>
                  <p>Depart : avant 11h</p>
                  <p>Capacite : {villa?.capacite ?? "-"} personnes</p>
                </div>

                <div className="border-t border-sand-200 pt-6">
                  <h4 className="text-sm font-medium text-charcoal mb-3">
                    Besoin d&apos;aide ?
                  </h4>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+212600000000"
                      className="bg-charcoal text-warm-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-charcoal/90 transition-colors text-center"
                    >
                      +212 6 00 00 00 00
                    </a>
                    <Link
                      href="/contact"
                      className="border border-charcoal text-charcoal px-6 py-3 text-sm font-light tracking-wide hover:bg-charcoal hover:text-warm-white transition-all duration-300 text-center"
                    >
                      Formulaire de contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
