import type { HomePageData } from "@/src/types";

export const homePageData: HomePageData = {
  hero: {
    kicker: "LEARNING WITH US",
    headline: "Belajar Tanpa Batas, *Tumbuh Bersama*",
    subHeadline:
      "Temukan pengalaman belajar yang menyenangkan dan efektif bersama mentor berpengalaman untuk meraih potensi terbaik Anda.",
    primaryCTA: { label: "Mulai Sekarang", href: "/products" },
    secondaryCTA: { label: "Tentang Kami", href: "/about" },
    image: {
      src: "/images/hero/hero-main.png",
      alt: "Siswa belajar bersama di Learning With Us",
      width: 1200,
      height: 900,
    },
  },
  features: [
    {
      icon: "School",
      title: "Kurikulum Terstruktur",
      description:
        "Materi pembelajaran disusun secara sistematis oleh tenaga pengajar profesional untuk hasil belajar yang optimal.",
    },
    {
      icon: "Devices",
      title: "Belajar Fleksibel",
      description:
        "Akses materi kapan saja dan di mana saja melalui platform digital yang mudah digunakan.",
    },
    {
      icon: "Groups",
      title: "Komunitas Supportif",
      description:
        "Bergabung dengan komunitas pelajar yang saling mendukung dan berbagi pengalaman belajar.",
    },
    {
      icon: "WorkspacePremium",
      title: "Sertifikasi Resmi",
      description:
        "Dapatkan sertifikat resmi setelah menyelesaikan program sebagai bukti kompetensi Anda.",
    },
  ],
  ctaSection: {
    title: "Siap Memulai Perjalanan Belajar Anda?",
    description:
      "Bergabunglah bersama ribuan pelajar lainnya dan mulai tingkatkan kemampuan Anda hari ini bersama Learning With Us.",
    buttonLabel: "Hubungi Kami",
    buttonHref: "/products",
  },
};
