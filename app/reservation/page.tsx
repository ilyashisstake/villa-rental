import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservation",
  description:
    "Reservez votre sejour a Safa Villa, villa de luxe avec piscine privee a Marrakech. Verifiez les disponibilites et reservez en ligne.",
  openGraph: {
    title: "Reservation | Safa Villa",
    description:
      "Reservez votre sejour de reve a Marrakech.",
    images: ["/images/villa-vue-ensemble.jpg"],
  },
};

export default function ReservationPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
          Planifiez votre sejour
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-8">
          Reservation
        </h1>
        <p className="text-base font-light text-charcoal/60 leading-relaxed mb-12">
          Le systeme de reservation en ligne arrive bientot. En attendant,
          contactez-nous directement pour verifier les disponibilites et
          reserver votre sejour.
        </p>

        <div className="bg-sand-50 border border-sand-200 p-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-charcoal mb-4">
            Contactez-nous pour reserver
          </h2>
          <p className="text-sm font-light text-charcoal/60 mb-6">
            Notre equipe vous repondra dans les 24 heures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+212600000000"
              className="bg-charcoal text-warm-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-charcoal/90 transition-colors"
            >
              +212 6 00 00 00 00
            </a>
            <Link
              href="/contact"
              className="border border-charcoal text-charcoal px-8 py-3.5 text-sm font-light tracking-wide hover:bg-charcoal hover:text-warm-white transition-all duration-300"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
