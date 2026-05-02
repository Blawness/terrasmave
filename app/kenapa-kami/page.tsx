import type { Metadata } from "next";
import WhyUsContent from "./WhyUsContent";

export const metadata: Metadata = {
  title: "Kenapa Kami",
  description:
    "Es krim sandwich tanpa pengawet, fresh setiap hari, 100% bahan organik. Pesan mudah via WhatsApp — dapur kami selalu siap.",
};

export default function KenapaKamiPage() {
  return <WhyUsContent />;
}
