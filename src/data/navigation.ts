import type { NavigationData } from "@/src/types";

export const navigationData: NavigationData = {
  mainLinks: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Visi & Misi", href: "/vision-mission" },
    { label: "Produk & Layanan", href: "/products" },
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/learningwithus",
      icon: "Instagram",
      ariaLabel: "Kunjungi Instagram Learning With Us",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/learningwithus",
      icon: "Facebook",
      ariaLabel: "Kunjungi Facebook Learning With Us",
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@learningwithus",
      icon: "YouTube",
      ariaLabel: "Kunjungi YouTube Learning With Us",
    },
  ],
};
