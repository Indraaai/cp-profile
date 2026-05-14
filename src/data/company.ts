import type {
  CompanyInfo,
  CompanyStory,
  CompanyValue,
  CompanyStat,
  VisionMission,
  ContactInfo,
} from "@/src/types";

export const companyInfo: CompanyInfo = {
  name: "Learning With Us",
  description:
    "Learning With Us adalah platform edukasi yang menyediakan program pembelajaran inovatif untuk membantu setiap individu mengembangkan potensi terbaik mereka melalui teknologi dan metode pengajaran modern.",
  logo: {
    src: "/images/logo.svg",
    alt: "Logo Learning With Us",
  },
};

export const companyStory: CompanyStory = {
  content:
    "Learning With Us didirikan pada tahun 2019 oleh sekelompok pendidik dan teknolog yang memiliki visi yang sama: membuat pendidikan berkualitas dapat diakses oleh semua orang. Berawal dari sebuah ruang kecil di Jakarta Selatan, kami memulai perjalanan dengan misi sederhana — menciptakan pengalaman belajar yang menyenangkan dan efektif. Seiring berjalannya waktu, kami terus berkembang dan berinovasi, menghadirkan berbagai program pembelajaran yang dirancang khusus untuk memenuhi kebutuhan siswa di era digital. Dengan dukungan tim pengajar berpengalaman dan teknologi terkini, kami berkomitmen untuk terus menjadi mitra terpercaya dalam perjalanan pendidikan setiap individu.",
  image: {
    src: "/images/about/tentang.jpg",
    alt: "Tim Learning With Us",
  },
};

export const companyValues: CompanyValue[] = [
  {
    icon: "Lightbulb",
    title: "Inovasi",
    description:
      "Kami terus berinovasi dalam metode pengajaran dan teknologi untuk memberikan pengalaman belajar terbaik bagi setiap siswa.",
  },
  {
    icon: "Groups",
    title: "Kolaborasi",
    description:
      "Kami percaya bahwa kolaborasi antara pengajar, siswa, dan orang tua adalah kunci keberhasilan dalam proses pembelajaran.",
  },
  {
    icon: "School",
    title: "Kualitas",
    description:
      "Kami berkomitmen menyediakan materi dan program berkualitas tinggi yang relevan dengan kebutuhan dunia pendidikan saat ini.",
  },
];

export const companyStats: CompanyStat[] = [
  { value: "5000+", label: "Siswa Aktif" },
  { value: "50+", label: "Program Tersedia" },
  { value: "2019", label: "Tahun Berdiri" },
  { value: "98%", label: "Tingkat Kepuasan" },
];

export const visionMission: VisionMission = {
  vision:
    "Menjadi platform edukasi terdepan di Indonesia yang memberdayakan setiap individu untuk mencapai potensi terbaik mereka melalui pembelajaran inovatif, inklusif, dan berkualitas tinggi.",
  missions: [
    "Menyediakan program pembelajaran yang inovatif dan relevan dengan kebutuhan industri saat ini.",
    "Membangun komunitas belajar yang kolaboratif dan saling mendukung antar siswa dan pengajar.",
    "Mengembangkan teknologi pendidikan yang mudah diakses oleh semua kalangan masyarakat.",
    "Menciptakan lingkungan belajar yang inklusif dan mendorong kreativitas setiap individu.",
    "Menjalin kemitraan strategis dengan institusi pendidikan dan industri untuk meningkatkan kualitas lulusan.",
  ],
  coreValues: [
    {
      icon: "Lightbulb",
      title: "Inovasi",
      description:
        "Kami terus berinovasi dalam metode pengajaran dan teknologi untuk memberikan pengalaman belajar terbaik bagi setiap siswa.",
    },
    {
      icon: "Groups",
      title: "Kolaborasi",
      description:
        "Kami percaya bahwa kolaborasi antara pengajar, siswa, dan orang tua adalah kunci keberhasilan dalam proses pembelajaran.",
    },
    {
      icon: "School",
      title: "Kualitas",
      description:
        "Kami berkomitmen menyediakan materi dan program berkualitas tinggi yang relevan dengan kebutuhan dunia pendidikan saat ini.",
    },
  ],
};

export const contactInfo: ContactInfo = {
  email: "hello@learningwithus.id",
  phone: "+6281234567890",
  address: "Jl. Pendidikan No. 10, Jakarta Selatan, DKI Jakarta 12345",
};
