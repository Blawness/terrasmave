import type { MetadataRoute } from "next";
import { SITE_NAME } from "./data/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} – Es Krim Scoop Homemade`,
    short_name: SITE_NAME,
    description:
      "Es krim scoop homemade: pilih 2 atau 3 scoop rasa, topping custom, choco sauce & bread. Dibuat fresh dari bahan organik.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3f0",
    theme_color: "#3e170b",
    lang: "id",
    icons: [
      { src: "/icon", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
