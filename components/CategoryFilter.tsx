"use client";

import { Button, ButtonGroup } from "@blueprintjs/core";
import { ComponentCategory } from "@/types/components";

interface CategoryFilterProps {
  categories: ComponentCategory[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Filter by Category:
      </h3>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => onCategoryChange(null)}
          intent={activeCategory === null ? "primary" : "none"}
          minimal={activeCategory !== null}
        >
          All Components
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            intent={activeCategory === category.id ? "primary" : "none"}
            minimal={activeCategory !== category.id}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
