"use client";

import { useState, useMemo } from "react";
import { categories, components } from "@/data/componentData";
import ComponentCard from "@/components/ComponentCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { Divider, NonIdealState } from "@blueprintjs/core";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredComponents = useMemo(() => {
    return components.filter((component) => {
      const matchesSearch =
        searchQuery === "" ||
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === null || component.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Blueprint Components Explorer
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore and interact with Blueprint.js components. Search, filter, and view live examples with code.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <Divider className="my-6" />

        {/* Component Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredComponents.length} component{filteredComponents.length !== 1 ? "s" : ""}
            {activeCategory && (
              <span className="ml-1">
                in {categories.find((c) => c.id === activeCategory)?.name}
              </span>
            )}
          </p>
        </div>

        {/* Components List */}
        {filteredComponents.length > 0 ? (
          <div className="grid gap-6">
            {filteredComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        ) : (
          <NonIdealState
            icon="search"
            title="No components found"
            description="Try adjusting your search query or category filter."
          />
        )}
      </div>
    </main>
  );
}
