import type { Metadata } from "next";
import TestimoniContent from "./TestimoniContent";

export const metadata: Metadata = {
  title: "Testimoni",
  description:
    "Bagikan pengalaman kamu menikmati es krim sandwich homemade Terrasmave. Kirim testimoni via WhatsApp sekarang!",
};

export default function TestimoniPage() {
  return <TestimoniContent />;
}
