import type { MetadataRoute } from "next";
import { SITE_NAME } from "./data/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} – Es Krim Sandwich Homemade`,
    short_name: SITE_NAME,
    description:
      "Es krim sandwich homemade: 3 scoop rasa, topping custom, diapit roti. Dibuat fresh dari bahan organik.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e8",
    theme_color: "#9f1239",
    lang: "id",
    icons: [
      { src: "/icon", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
