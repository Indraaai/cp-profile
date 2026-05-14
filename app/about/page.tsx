import type { Metadata } from "next";
import PageHeader from "@/src/components/sections/PageHeader";
import StorySection from "@/src/components/sections/StorySection";
import ValuesSection from "@/src/components/sections/ValuesSection";
import StatsSection from "@/src/components/sections/StatsSection";
import CTASection from "@/src/components/sections/CTASection";
import { companyStory, companyValues, companyStats } from "@/src/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali sejarah, nilai-nilai, dan pencapaian Learning With Us. Platform edukasi terpercaya yang telah membantu 5000+ siswa mengembangkan skill digital sejak 2019.",
  alternates: {
    canonical: "https://learningwithus.id/about",
  },
  openGraph: {
    title: "Tentang Kami - Learning With Us",
    description:
      "Kenali sejarah, nilai-nilai, dan pencapaian Learning With Us. Platform edukasi terpercaya sejak 2019.",
    url: "https://learningwithus.id/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="TENTANG KAMI"
        title="Tentang Kami"
        description="Kenali lebih dekat Learning With Us dan perjalanan kami dalam dunia pendidikan."
      />
      <StorySection story={companyStory} />
      <ValuesSection values={companyValues} title="Nilai-Nilai Kami" />
      <StatsSection stats={companyStats} />
      <CTASection
        title="Tertarik Mengenal Lebih Jauh?"
        description="Lihat visi dan misi kami atau jelajahi produk dan layanan yang kami tawarkan."
        buttonLabel="Visi & Misi"
        buttonHref="/vision-mission"
      />
    </>
  );
}
