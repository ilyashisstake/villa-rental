import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-warm-white mb-2">
              Safa Villa
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-sand-400 mb-4">
              Marrakech
            </p>
            <p className="text-sm font-light leading-relaxed">
              Une villa d&apos;exception au coeur de Marrakech, alliant luxe
              traditionnel marocain et confort moderne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-warm-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/galerie", label: "Galerie" },
                { href: "/reservation", label: "Reservation" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light hover:text-warm-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-warm-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Marrakech, Maroc</li>
              <li>
                <a
                  href="tel:+212600000000"
                  className="hover:text-warm-white transition-colors"
                >
                  +212 6 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@safavilla.com"
                  className="hover:text-warm-white transition-colors"
                >
                  contact@safavilla.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light">
            &copy; {new Date().getFullYear()} Safa Villa. Tous droits reserves.
          </p>
          <p className="text-xs font-light text-warm-white/40">
            Marrakech, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
