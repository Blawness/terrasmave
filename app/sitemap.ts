import type { MetadataRoute } from "next";
import { SITE_URL } from "./data/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/produk", "/tentang", "/kenapa-kami", "/faq", "/testimoni", "/kontak"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
