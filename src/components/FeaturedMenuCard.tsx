"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useOrderModal } from "@/context/OrderModalContext";

interface FeaturedMenuCardProps {
  item: MenuItem;
}

export function FeaturedMenuCard({ item }: FeaturedMenuCardProps) {
  const { openModal } = useOrderModal();

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
    <div className="bg-white rounded-xl overflow-hidden border border-[#E5DFCE] hover:border-primary-container shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Food Photo Container */}
      <div className="relative h-48 overflow-hidden bg-[#242424]">
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
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-baseline mb-1 gap-2">
            <h3 className="text-headline-sm font-headline-sm text-[#171717]">{item.name}</h3>
            <span className="text-headline-md font-headline-md text-primary-container font-bold shrink-0">
              ₹{item.price}
            </span>
          </div>
          <p className="text-body-sm font-body-sm text-[#505050] line-clamp-2">{item.description}</p>
        </div>

        {/* Card Footer / Action */}
        <div className="mt-4 pt-3 border-t border-[#F0EAE0] flex items-center justify-between">
          <span className="text-label-sm font-label-sm text-[#737373]">
            {item.portion || (item.dietary === "veg" ? "Veg" : item.dietary === "non-veg" ? "Non-Veg" : "Beverage")}
          </span>
          <button
            onClick={() => openModal(item.name)}
            aria-label={`Order ${item.name}`}
            className="p-2 rounded bg-[#171717] hover:bg-primary-container text-white transition-colors cursor-pointer active:scale-95 shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
