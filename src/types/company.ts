export interface CompanyInfo {
  name: string;
  /** Deskripsi singkat perusahaan (max 300 chars, untuk footer) */
  description: string;
  logo: {
    src: string;
    alt: string;
  };
}

export interface CompanyStory {
  /** Narasi latar belakang brand (300-1500 chars) */
  content: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface CompanyValue {
  /** Material Icons name */
  icon: string;
  /** Judul nilai (max 40 chars) */
  title: string;
  /** Deskripsi nilai (50-200 chars) */
  description: string;
}

export interface CompanyStat {
  /** Angka kunci (numerik atau string) */
  value: number | string;
  /** Label statistik (max 40 chars) */
  label: string;
}

export interface VisionMission {
  /** Pernyataan visi (max 300 chars) */
  vision: string;
  /** Poin-poin misi (3-10 items, each max 200 chars) */
  missions: string[];
  /** Nilai-nilai inti perusahaan */
  coreValues: CompanyValue[];
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}
