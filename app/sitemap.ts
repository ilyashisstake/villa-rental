import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luxuryvilla.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/images/villa-vue-ensemble.jpg`,
        `${baseUrl}/images/villa-piscine-facade.jpg`,
        `${baseUrl}/images/piscine-baldaquin.jpg`,
      ],
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/images/villa-vue-ensemble.jpg`,
        `${baseUrl}/images/villa-piscine-facade.jpg`,
        `${baseUrl}/images/piscine-baldaquin.jpg`,
        `${baseUrl}/images/jardin-detente.jpg`,
        `${baseUrl}/images/entree-villa.jpg`,
        `${baseUrl}/images/villa-panorama.jpg`,
        `${baseUrl}/images/four-bois.jpg`,
        `${baseUrl}/images/piscine-transats.jpg`,
        `${baseUrl}/images/terrasse-zellige.jpg`,
        `${baseUrl}/images/villa-jardin-piscine.jpg`,
        `${baseUrl}/images/salon-salle-a-manger.jpg`,
        `${baseUrl}/images/salon-tv.jpg`,
        `${baseUrl}/images/cuisine-equipee.jpg`,
        `${baseUrl}/images/cuisine-plan-de-travail.jpg`,
        `${baseUrl}/images/salle-de-bain-douche.jpg`,
        `${baseUrl}/images/salle-de-bain-vasque.jpg`,
        `${baseUrl}/images/decoration-marocaine.jpg`,
      ],
    },
    {
      url: `${baseUrl}/reservation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
