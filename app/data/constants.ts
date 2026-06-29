export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://terrasmave.my.id";
export const SITE_NAME = "Terrasmave";

// Domain diambil dari SITE_URL, mis. "terrasmave.my.id"
const SITE_DOMAIN = new URL(SITE_URL).hostname.replace(/^www\./, "");
export const EMAIL = `hello@${SITE_DOMAIN}`;

export const WHATSAPP_NUMBER = "6281281818892";
export const WHATSAPP_DISPLAY = "+62 812-8181-8892";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://instagram.com/terrasmave";

export const ADDRESS = {
  street: "Jl. Swasembada Barat XIX No.16",
  locality: "Tanjung Priok",
  region: "Jakarta Utara",
  country: "ID",
} as const;
