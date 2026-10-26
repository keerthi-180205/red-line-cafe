"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Search, X, Plus, Utensils } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrderModalProvider, useOrderModal } from "@/context/OrderModalContext";
import { menuCategories, menuItems } from "@/data/menu";

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openModal } = useOrderModal();

  const selectedCategory = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDietary, setSelectedDietary] = useState<string>("all");

  const handleCategoryChange = (catId: string) => {
    if (catId === "all") {
      router.push("/menu", { scroll: false });
    } else {
      router.push(`/menu?category=${catId}`, { scroll: false });
    }
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (selectedDietary !== "all" && item.dietary !== selectedDietary) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  const clearFilters = () => {
    setSelectedDietary("all");
    setSearchQuery("");
    router.push("/menu", { scroll: false });
  };

  const getBadgeStyle = (badge?: string) => {
    if (!badge) return "";
    if (badge === "CLASSIC" || badge === "CHILLED") {
      return "bg-[#171717] text-[#FFF8E8]";
    }
    if (badge === "COMFORT FOOD") {
      return "bg-secondary-container text-white";
    }
    return "bg-primary-container text-white";
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* Menu Hero Header */}
        <section className="relative pt-12 pb-10 bg-surface border-b border-outline-variant/30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-secondary text-label-sm font-label-sm uppercase tracking-widest block mb-2">
                Freshly Grilled &amp; Cooked on Order
              </span>
              <h1 className="text-display-hero-mobile md:text-headline-lg font-headline-lg uppercase text-white tracking-tight text-4xl sm:text-5xl">
                RED LINE CAFE MENU
              </h1>
              <p className="text-body-lg font-body-lg text-tertiary mt-3">
                Explore our signature burgers, loaded fries, piping hot Maggi specials, and thick chilled shakes in Basaveshwaranagar.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by dish name (e.g. Chicken Burger, Maggi, Fries)..."
                  className="w-full bg-surface-container border border-surface-variant hover:border-outline-variant focus:border-primary-container rounded-xl pl-12 pr-10 py-3.5 text-white placeholder-tertiary/70 text-body-md font-body-md focus:outline-none transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search query"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-tertiary hover:text-white rounded-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Tabs */}
            <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-5 py-2.5 rounded-lg text-label-md font-label-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-primary-container text-white shadow-[0_2px_12px_rgba(215,25,32,0.4)] font-bold"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-variant"
                }`}
              >
                All Categories ({menuItems.length})
              </button>
              {menuCategories.map((cat) => {
                const count = menuItems.filter((i) => i.category === cat.id).length;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-5 py-2.5 rounded-lg text-label-md font-label-md transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-primary-container text-white shadow-[0_2px_12px_rgba(215,25,32,0.4)] font-bold"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-variant"
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Dietary Sub-filters */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-body-sm font-body-sm text-tertiary mr-2">Filter:</span>
              {[
                { id: "all", label: "All Items" },
                { id: "veg", label: "🌱 Veg" },
                { id: "non-veg", label: "🍗 Non-Veg" },
                { id: "beverage", label: "🥤 Beverages" }
              ].map((diet) => (
                <button
                  key={diet.id}
                  onClick={() => setSelectedDietary(diet.id)}
                  className={`px-3 py-1 rounded text-label-sm font-label-sm transition-colors cursor-pointer ${
                    selectedDietary === diet.id
                      ? "bg-secondary text-[#171717] font-bold"
                      : "bg-surface-container-high text-tertiary hover:text-white border border-outline-variant/30"
                  }`}
                >
                  {diet.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items Grid Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container rounded-xl overflow-hidden border border-surface-variant hover:border-primary-container shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
                >
                  {/* Food Image */}
                  <div className="relative h-52 overflow-hidden bg-[#242424]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span
                        className={`absolute top-3 right-3 text-label-sm font-label-sm px-2.5 py-1 rounded font-bold shadow-sm ${getBadgeStyle(
                          item.badge
                        )}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.isSampleData && (
                      <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-sm text-tertiary px-2 py-0.5 rounded">
                        Cafe Spec
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-baseline mb-1 gap-2">
                        <h3 className="text-headline-sm font-headline-sm text-white">{item.name}</h3>
                        <span className="text-headline-md font-headline-md text-primary-container font-bold shrink-0">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-body-sm font-body-sm text-tertiary mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-5 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
                      <span className="text-label-sm font-label-sm text-secondary font-medium">
                        {item.portion || (item.dietary === "veg" ? "Veg" : item.dietary === "non-veg" ? "Non-Veg" : "Beverage")}
                      </span>
                      <button
                        onClick={() => openModal(item.name)}
                        aria-label={`Order ${item.name}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container hover:bg-inverse-primary text-white text-label-sm font-label-sm font-bold transition-all active:scale-95 cursor-pointer shadow-[0_2px_10px_rgba(215,25,32,0.3)]"
                      >
                        <span>Order Now</span>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center max-w-md mx-auto p-8 rounded-2xl bg-surface-container border border-surface-variant shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-headline-md font-headline-md uppercase text-white">
                NO DISHES FOUND
              </h3>
              <p className="text-body-md font-body-md text-tertiary mt-2">
                We couldn&apos;t find any items matching your current filters. Try searching for something else or reset your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 px-6 py-3 rounded-lg bg-primary-container hover:bg-inverse-primary text-white text-label-md font-label-md transition-all active:scale-95 cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function MenuPage() {
  return (
    <OrderModalProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <MenuContent />
      </Suspense>
    </OrderModalProvider>
  );
}
