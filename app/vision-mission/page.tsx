import type { Metadata } from "next";
import PageHeader from "@/src/components/sections/PageHeader";
import VisionSection from "@/src/components/sections/VisionSection";
import MissionSection from "@/src/components/sections/MissionSection";
import ValuesSection from "@/src/components/sections/ValuesSection";
import CTASection from "@/src/components/sections/CTASection";
import { visionMission } from "@/src/data/company";

export const metadata: Metadata = {
  title: "Visi & Misi",
  description:
    "Visi menjadi platform edukasi terdepan di Indonesia dan misi Learning With Us dalam mewujudkan pendidikan berkualitas, inklusif, dan inovatif untuk semua.",
  alternates: {
    canonical: "https://learningwithus.id/vision-mission",
  },
  openGraph: {
    title: "Visi & Misi - Learning With Us",
    description:
      "Visi dan misi Learning With Us dalam mewujudkan pendidikan berkualitas untuk semua di Indonesia.",
    url: "https://learningwithus.id/vision-mission",
  },
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        kicker="VISI & MISI"
        title="Visi & Misi"
        description="Arah dan tujuan Learning With Us dalam memajukan pendidikan di Indonesia."
      />
      <VisionSection vision={visionMission.vision} />
      <MissionSection missions={visionMission.missions} />
      <ValuesSection
        values={visionMission.coreValues}
        title="Nilai Inti Kami"
        columns={3}
      />
      <CTASection
        title="Siap Bergabung Bersama Kami?"
        buttonLabel="Lihat Produk"
        buttonHref="/products"
      />
    </>
  );
}
