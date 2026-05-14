import HeroSection from "@/src/components/sections/HeroSection";
import FeaturesSection from "@/src/components/sections/FeaturesSection";
import ProductHighlights from "@/src/components/sections/ProductHighlights";
import CTASection from "@/src/components/sections/CTASection";
import { homePageData } from "@/src/data/home";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Learning With Us",
    url: "https://learningwithus.id",
    logo: "https://learningwithus.id/images/logo.svg",
    description:
      "Platform edukasi terpercaya di Indonesia yang menyediakan kursus online, workshop, mentoring, dan corporate training.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Pendidikan No. 10",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12345",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281234567890",
      email: "hello@learningwithus.id",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://instagram.com/learningwithus",
      "https://facebook.com/learningwithus",
      "https://youtube.com/@learningwithus",
    ],
    foundingDate: "2019",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection data={homePageData.hero} />
      <FeaturesSection features={homePageData.features} />
      <ProductHighlights />
      <CTASection
        title={homePageData.ctaSection.title}
        description={homePageData.ctaSection.description}
        buttonLabel={homePageData.ctaSection.buttonLabel}
        buttonHref={homePageData.ctaSection.buttonHref}
      />
    </>
  );
}
