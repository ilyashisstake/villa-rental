import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Galerie Photos",
  description:
    "Decouvrez Luxury Villa en images : piscine privee, jardins paysagers, terrasse en zellige, architecture marocaine traditionnelle a Marrakech.",
  openGraph: {
    title: "Galerie Photos | Luxury Villa",
    description:
      "Explorez notre villa de luxe a Marrakech en images. Piscine privee, jardins, terrasse en zellige.",
    images: [
      {
        url: "/images/villa-vue-ensemble.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Villa - Galerie photos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie Photos | Luxury Villa",
    description:
      "Explorez notre villa de luxe a Marrakech en images.",
    images: ["/images/villa-vue-ensemble.jpg"],
  },
  alternates: {
    canonical: "https://luxuryvilla.com/galerie",
  },
};

export default async function GaleriePage() {
  const { data: photos } = await supabase
    .from("photos")
    .select("*, villas!inner(nom)")
    .order("ordre", { ascending: true });

  const images = (photos ?? []).map((p) => ({
    src: p.url,
    alt: p.alt_text ?? "",
  }));

  return (
    <>
      {/* JSON-LD ImageGallery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Galerie Photos - Luxury Villa",
            description:
              "Collection de photos de Luxury Villa a Marrakech : piscine, jardins, terrasse et architecture marocaine.",
            url: "https://luxuryvilla.com/galerie",
            about: {
              "@type": "LodgingBusiness",
              name: "Luxury Villa",
              url: "https://luxuryvilla.com",
            },
            image: images.map((img) => ({
              "@type": "ImageObject",
              url: `https://luxuryvilla.com${img.src}`,
              caption: img.alt,
            })),
          }),
        }}
      />

      <section className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sand-500 mb-3">
              Luxury Villa
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
                    loading={i < 3 ? "eager" : "lazy"}
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
    </>
  );
}
