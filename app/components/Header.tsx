"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Galerie" },
  { href: "/reservation", label: "Reservation" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-sand-200/50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide text-charcoal">
            Luxury Villa
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-500 font-light">
            Marrakech
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-light tracking-wide text-charcoal/70 hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/reservation"
              className="text-sm font-medium tracking-wide bg-charcoal text-warm-white px-5 py-2.5 hover:bg-charcoal/90 transition-colors duration-300"
            >
              Reserver
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-80" : "max-h-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-warm-white/95 backdrop-blur-md border-t border-sand-200/50">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-light tracking-wide text-charcoal/70 hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide bg-charcoal text-warm-white px-6 py-3 hover:bg-charcoal/90 transition-colors"
            >
              Reserver
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
