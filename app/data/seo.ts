import {
  SITE_URL,
  SITE_NAME,
  EMAIL,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  ADDRESS,
} from "./constants";
import { products } from "./products";
import { faq } from "./faq";
import { testimonials, aggregateRating } from "./testimonials";

/** LocalBusiness — the brand. Used in the root layout. */
export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    "Es krim sandwich homemade: 3 scoop rasa pilihan, topping custom, diapit roti — dibuat fresh dari bahan organik.",
  url: SITE_URL,
  email: EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  image: `${SITE_URL}/opengraph-image`,
  servesCuisine: "Dessert",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.country,
  },
  sameAs: [INSTAGRAM_URL, `https://wa.me/${WHATSAPP_NUMBER}`],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.ratingValue,
    reviewCount: aggregateRating.reviewCount,
    bestRating: aggregateRating.bestRating,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.text,
  })),
};

/** FAQPage — questions & answers. */
export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/** ItemList of Products — the catalog. Used on /produk. */
export const productListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.desc,
      image: p.image,
      brand: { "@type": "Brand", name: SITE_NAME },
      offers: {
        "@type": "Offer",
        price: p.price.replace(/[^0-9]/g, ""),
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/produk`,
      },
    },
  })),
};

/** BreadcrumbList builder for a subpage. */
export function breadcrumbLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}
