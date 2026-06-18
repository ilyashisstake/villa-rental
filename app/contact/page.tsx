import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Safa Villa a Marrakech. Formulaire de contact, telephone et localisation pour toute demande de renseignement ou reservation.",
  openGraph: {
    title: "Contact | Safa Villa",
    description:
      "Contactez-nous pour reserver votre sejour a Safa Villa, Marrakech.",
    images: ["/images/villa-vue-ensemble.jpg"],
  },
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
            Nous joindre
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-charcoal mb-6">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-sand-300 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border-b border-sand-300 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2"
                >
                  Telephone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b border-sand-300 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors"
                  placeholder="+33 6 00 00 00 00"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border-b border-sand-300 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="bg-charcoal text-warm-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-charcoal/90 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-charcoal mb-6">
              Informations
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  Adresse
                </h3>
                <p className="text-sm font-light text-charcoal/80">
                  Marrakech, Maroc
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  Telephone
                </h3>
                <a
                  href="tel:+212600000000"
                  className="text-sm font-light text-charcoal/80 hover:text-charcoal transition-colors"
                >
                  +212 6 00 00 00 00
                </a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contact@safavilla.com"
                  className="text-sm font-light text-charcoal/80 hover:text-charcoal transition-colors"
                >
                  contact@safavilla.com
                </a>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="mt-10 bg-sand-100 border border-sand-200 aspect-[4/3] flex items-center justify-center">
              <p className="text-sm font-light text-charcoal/40">
                Google Maps - Marrakech, Maroc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
