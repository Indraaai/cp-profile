import type { Metadata } from "next";
import PageHeader from "@/src/components/sections/PageHeader";
import CTASection from "@/src/components/sections/CTASection";
import ProductsContent from "@/src/components/products/ProductsContent";

export const metadata: Metadata = {
  title: "Produk & Layanan",
  description:
    "Jelajahi kursus online, workshop, mentoring karir IT, dan corporate training dari Learning With Us. Program edukasi berkualitas untuk individu dan perusahaan.",
  alternates: {
    canonical: "https://learningwithus.id/products",
  },
  openGraph: {
    title: "Produk & Layanan - Learning With Us",
    description:
      "Kursus online, workshop, mentoring, dan corporate training. Program edukasi berkualitas dari Learning With Us.",
    url: "https://learningwithus.id/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        kicker="PRODUK & LAYANAN"
        title="Produk & Layanan"
        description="Jelajahi berbagai produk dan layanan edukasi yang kami tawarkan untuk mengembangkan potensi Anda."
      />
      <ProductsContent />
      <CTASection
        title="Butuh Bantuan Memilih?"
        description="Hubungi tim kami untuk konsultasi gratis."
        buttonLabel="Hubungi Kami"
        buttonHref="mailto:hello@learningwithus.id"
        contactInfo={{
          email: "hello@learningwithus.id",
          phone: "+6281234567890",
        }}
      />
    </>
  );
}
