import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Galerie Photos",
  description:
    "Decouvrez Safa Villa en images : piscine privee, jardins paysagers, terrasse en zellige, architecture marocaine traditionnelle a Marrakech.",
  openGraph: {
    title: "Galerie Photos | Safa Villa",
    description:
      "Explorez notre villa de luxe a Marrakech en images.",
    images: ["/images/villa-vue-ensemble.jpg"],
  },
};

const images = [
  { src: "/images/villa-vue-ensemble.jpg", alt: "Vue d'ensemble de Safa Villa avec piscine et palmiers" },
  { src: "/images/villa-piscine-facade.jpg", alt: "Facade de la villa vue depuis la piscine" },
  { src: "/images/piscine-baldaquin.jpg", alt: "Piscine avec baldaquin et jardins verdoyants" },
  { src: "/images/jardin-detente.jpg", alt: "Espace detente au bord de la piscine" },
  { src: "/images/entree-villa.jpg", alt: "Entree majestueuse avec arche et palmiers" },
  { src: "/images/villa-panorama.jpg", alt: "Vue panoramique du domaine" },
  { src: "/images/four-bois.jpg", alt: "Four a bois traditionnel" },
  { src: "/images/piscine-transats.jpg", alt: "Transats et parasols au bord de la piscine" },
  { src: "/images/terrasse-zellige.jpg", alt: "Terrasse en zellige avec mobilier en fer forge" },
  { src: "/images/villa-jardin-piscine.jpg", alt: "Villa avec jardin et piscine" },
];

export default function GaleriePage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
            Safa Villa
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            Galerie Photos
          </h1>
        </RevealOnScroll>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <RevealOnScroll key={img.src} delay={i * 60}>
              <div className="relative overflow-hidden group cursor-pointer break-inside-avoid">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
