import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32 lg:py-40 text-center">
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 120 }}
        className="text-primary-400 mb-6"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
        Halaman tidak ditemukan
      </h1>
      <p className="text-slate-600 mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="bg-primary-500 text-white rounded-md px-6 py-3 font-medium hover:bg-primary-600 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-primary-500"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
