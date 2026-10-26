"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UtensilsCrossed, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { useOrderModal } from "@/context/OrderModalContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useOrderModal();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/visit", label: "Visit Us" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface/85 backdrop-blur-md docked full-width top-0 sticky z-40 shadow-sm border-b border-outline-variant/30 transition-colors">
      <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-20">
        {/* Brand & Leading Icon */}
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
          <UtensilsCrossed className="w-6 h-6 text-primary-container group-hover:scale-110 transition-transform" />
          <div className="flex items-center gap-1.5">
            <span className="text-headline-md font-headline-md font-bold tracking-wider text-primary-container">
              RED LINE CAFE
            </span>
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label-lg font-label-lg transition-colors ${
                  isActive
                    ? "text-primary-container font-bold border-b-2 border-primary-container pb-1"
                    : "text-on-surface hover:text-primary-container"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openModal()}
            className="bg-primary-container hover:bg-inverse-primary text-white font-label-lg text-label-lg py-2.5 px-5 rounded-lg active:scale-95 transition-all shadow-[0_4px_16px_rgba(215,25,32,0.35)] flex items-center gap-2 cursor-pointer"
          >
            <span>Order Online</span>
            <ShoppingBag className="w-4 h-4 text-white" />
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-on-surface hover:text-primary-container transition-colors focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-outline-variant/30 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isLast = index === navLinks.length - 1;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-label-lg font-label-lg py-2.5 flex items-center justify-between ${
                  !isLast ? "border-b border-outline-variant/20" : ""
                } ${isActive ? "text-primary-container font-bold" : "text-on-surface hover:text-primary-container"}`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
