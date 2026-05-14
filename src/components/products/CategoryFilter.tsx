"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onFilterChange: (categories: string[]) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  onFilterChange,
}: CategoryFilterProps) {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onFilterChange(selectedCategories.filter((c) => c !== category));
    } else {
      onFilterChange([...selectedCategories, category]);
    }
  };

  const handleShowAll = () => {
    onFilterChange([]);
  };

  return (
    <div className="flex flex-wrap gap-2 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 md:pb-0">
      <button
        onClick={handleShowAll}
        className={`inline-flex items-center justify-center rounded-full px-4 min-h-[44px] text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
          selectedCategories.length === 0
            ? "bg-primary-500 text-white"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
        aria-pressed={selectedCategories.length === 0}
      >
        Semua
      </button>
      {categories.map((category) => {
        const isActive = selectedCategories.includes(category);
        return (
          <button
            key={category}
            onClick={() => handleCategoryToggle(category)}
            className={`inline-flex items-center justify-center rounded-full px-4 min-h-[44px] text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
              isActive
                ? "bg-primary-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
