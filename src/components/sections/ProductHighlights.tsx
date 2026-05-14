import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/data/products";

export default function ProductHighlights() {
  const featuredProducts = products
    .filter((product) => product.featured === true)
    .slice(0, 3);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            PRODUK UNGGULAN
          </span>
          <h2 className="mt-3 text-h2 text-slate-800">
            Produk &amp; Layanan Unggulan
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href="/products"
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 transition-colors group-hover:text-primary-600">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {product.description.length > 150
                    ? `${product.description.slice(0, 150)}...`
                    : product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
