import Image from "next/image";
import type { ProductService } from "@/src/types";

interface ProductCardProps {
  product: ProductService;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
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
        <span className="mb-2 inline-block rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
          {product.category}
        </span>
        <h3 className="mb-2 text-lg font-semibold text-slate-800 transition-colors group-hover:text-primary-600">
          {product.name}
        </h3>
        <p className="line-clamp-3 text-sm text-slate-600">
          {product.description}
        </p>
      </div>
    </div>
  );
}
