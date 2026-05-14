export interface HeroData {
  /** Optional small uppercase kicker label above headline */
  kicker?: string;
  /** Headline utama (max 80 chars). Use *word* markers to highlight a portion in primary color. */
  headline: string;
  /** Sub-headline (max 160 chars) */
  subHeadline: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface FeatureItem {
  /** Material Icons name */
  icon: string;
  /** Judul fitur (max 40 chars) */
  title: string;
  /** Deskripsi fitur (max 200 chars) */
  description: string;
}

export interface HomePageData {
  hero: HeroData;
  /** Value propositions (3-6 items) */
  features: FeatureItem[];
  ctaSection: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
}
