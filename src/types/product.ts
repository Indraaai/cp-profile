export interface ProductService {
  /** Unique identifier in slug format */
  id: string;
  /** Nama produk/layanan (max 100 chars, required) */
  name: string;
  /** Deskripsi produk/layanan (max 300 chars, required) */
  description: string;
  /** Kategori produk/layanan (required, non-empty) */
  category: string;
  /** Gambar produk/layanan */
  image: {
    /** Path gambar atau URL */
    src: string;
    /** Alt text (5-125 chars, required) */
    alt: string;
  };
  /** Apakah ditampilkan di Home highlights */
  featured?: boolean;
}
