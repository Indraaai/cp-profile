import type { ProductService } from "@/src/types";

export const products: ProductService[] = [
  {
    id: "kursus-web-development",
    name: "Kursus Web Development",
    description:
      "Pelajari dasar-dasar hingga mahir dalam pengembangan web modern. Materi mencakup HTML, CSS, JavaScript, React, dan Next.js dengan proyek nyata yang siap masuk portofolio Anda.",
    category: "Kursus Online",
    image: {
      src: "/images/products/kursus-web-development.jpg",
      alt: "Peserta kursus web development sedang coding di laptop",
    },
    featured: true,
  },
  {
    id: "workshop-ui-ux-design",
    name: "Workshop UI/UX Design",
    description:
      "Workshop intensif selama 2 hari untuk menguasai prinsip desain antarmuka dan pengalaman pengguna. Praktik langsung menggunakan Figma dengan studi kasus produk digital nyata.",
    category: "Workshop",
    image: {
      src: "/images/products/workshop-ui-ux-design.jpg",
      alt: "Peserta workshop UI/UX design berdiskusi tentang wireframe",
    },
    featured: true,
  },
  {
    id: "mentoring-karir-it",
    name: "Mentoring Karir IT",
    description:
      "Program mentoring personal bersama praktisi industri IT berpengalaman. Dapatkan bimbingan karir, review CV, simulasi interview, dan strategi untuk memasuki dunia kerja teknologi.",
    category: "Mentoring",
    image: {
      src: "/images/products/mentoring.jpg",
      alt: "Sesi mentoring karir IT antara mentor dan peserta",
    },
    featured: true,
  },
  {
    id: "kursus-data-science",
    name: "Kursus Data Science",
    description:
      "Kuasai analisis data, machine learning, dan visualisasi data menggunakan Python. Cocok untuk pemula yang ingin berkarir sebagai data analyst atau data scientist.",
    category: "Kursus Online",
    image: {
      src: "/images/products/kursus-data-science.png",
      alt: "Ilustrasi kursus data science dengan grafik dan kode Python",
    },
    featured: false,
  },
  {
    id: "mobile-app-development",
    name: " Mobile App Development",
    description:
      " Praktis membangun aplikasi mobile cross-platform menggunakan React Native. Peserta akan membuat aplikasi lengkap dari nol hingga siap deploy ke App Store dan Play Store.",
    category: "Workshop",
    image: {
      src: "/images/products/mobile-app.jpg",
      alt: "Peserta workshop mobile app development menguji aplikasi di smartphone",
    },
    featured: false,
  },
  {
    id: "kursus-digital-marketing",
    name: "Kursus Digital Marketing",
    description:
      "Pelajari strategi pemasaran digital yang efektif meliputi SEO, social media marketing, Google Ads, dan content marketing. Dilengkapi dengan studi kasus dan praktik langsung.",
    category: "Kursus Online",
    image: {
      src: "/images/products/marketing.jpg",
      alt: "Materi kursus digital marketing dengan dashboard analytics",
    },
    featured: false,
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
