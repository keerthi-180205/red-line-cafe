import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MenuCategory } from "@/data/menu";

interface CategoryCardProps {
  category: MenuCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/menu?category=${category.id}`}
      className="group relative rounded-xl overflow-hidden bg-surface-container border border-surface-variant hover:border-primary-container transition-all duration-300 block shadow-lg hover:shadow-2xl"
    >
      <div className="h-64 w-full overflow-hidden relative">
        <Image
          src={category.image}
          alt={category.imageAlt || category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent flex flex-col justify-end p-5">
        <span className="text-secondary text-label-sm font-label-sm tracking-wider">
          {category.subtitle}
        </span>
        <h3 className="text-headline-md font-headline-md text-white mt-1 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-body-sm font-body-sm text-tertiary mt-1 line-clamp-1">
          {category.description}
        </p>
        <span className="inline-flex items-center gap-1 text-primary-container text-label-md font-label-md font-bold mt-3 group-hover:translate-x-1 transition-transform">
          <span>Browse Items</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
