"use client";

import { useState } from "react";
import { products, categories } from "@/src/data/products";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import ProductEmpty from "./ProductEmpty";

export default function ProductsContent() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );

  const handleReset = () => {
    setSelectedCategories([]);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            onFilterChange={setSelectedCategories}
          />
        </div>
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <ProductEmpty onReset={handleReset} />
        )}
      </div>
    </section>
  );
}
