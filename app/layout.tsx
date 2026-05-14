import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import TopBar from "@/src/components/layout/TopBar";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learningwithus.id"),
  title: {
    default: "Learning With Us - Platform Edukasi & Pelatihan Profesional",
    template: "%s | Learning With Us",
  },
  description:
    "Learning With Us adalah platform edukasi terpercaya di Indonesia yang menyediakan kursus online, workshop, mentoring, dan corporate training untuk mengembangkan skill digital Anda.",
  keywords: [
    "kursus online",
    "pelatihan digital",
    "workshop IT",
    "mentoring karir",
    "corporate training",
    "belajar programming",
    "edukasi Indonesia",
    "Learning With Us",
    "platform edukasi",
    "pengembangan skill",
  ],
  authors: [{ name: "Learning With Us", url: "https://learningwithus.id" }],
  creator: "Learning With Us",
  publisher: "Learning With Us",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://learningwithus.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Learning With Us",
    title: "Learning With Us - Platform Edukasi & Pelatihan Profesional",
    description:
      "Platform edukasi terpercaya di Indonesia. Kursus online, workshop, mentoring, dan corporate training untuk mengembangkan skill digital Anda.",
    url: "https://learningwithus.id",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Learning With Us - Platform Edukasi Terpercaya",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@learningwithus",
    creator: "@learningwithus",
    title: "Learning With Us - Platform Edukasi & Pelatihan Profesional",
    description:
      "Platform edukasi terpercaya di Indonesia. Kursus online, workshop, mentoring, dan corporate training.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Learning With Us - Platform Edukasi Terpercaya",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Uncomment and add your verification codes when ready:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${sora.variable} font-sans antialiased`}>
        <TopBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
