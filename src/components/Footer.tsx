"use client";

import React from "react";
import Link from "next/link";
import { useOrderModal } from "@/context/OrderModalContext";

export function Footer() {
  const { openModal } = useOrderModal();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
      <div className="w-full px-6 py-12 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Logo / Wordmark */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-headline-md font-headline-md font-bold tracking-wider text-primary-container">
              RED LINE CAFE
            </span>
            <span className="w-2 h-2 rounded-full bg-primary-container" />
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
            Good Food. Big Cravings. Basaveshwaranagar, Bengaluru.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-label-md font-label-md">
          <Link
            href="/menu"
            className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/visit"
            className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
          >
            Locations
          </Link>
          <button
            onClick={() => openModal()}
            className="text-on-surface-variant hover:text-primary-container transition-colors duration-200 cursor-pointer"
          >
            Order Online
          </button>
          <Link
            href="/visit"
            className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/visit"
            className="text-on-surface-variant hover:text-primary-container transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </nav>

        {/* Copyright Text */}
        <div className="text-body-sm font-body-sm text-on-surface-variant text-center md:text-right">
          <p>© 2024 RED LINE CAFE. All rights reserved.</p>
          <p className="text-label-sm font-label-sm text-tertiary mt-0.5">Basaveshwaranagar, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
