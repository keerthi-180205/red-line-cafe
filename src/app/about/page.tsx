"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Zap,
  Coffee,
  Sparkles,
  MapPin,
  ArrowRight,
  ShoppingBag
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrderModalProvider, useOrderModal } from "@/context/OrderModalContext";
import { businessConfig } from "@/data/business";

function AboutContent() {
  const { openModal } = useOrderModal();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* About Hero Header */}
        <section className="relative pt-16 pb-16 bg-surface overflow-hidden border-b border-outline-variant/30">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary-container/15 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-container" />
              <span className="text-label-sm font-label-sm text-secondary tracking-widest uppercase">
                Basaveshwaranagar, Bengaluru
              </span>
            </div>
            <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero uppercase text-white tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
              BEHIND THE RED LINE
            </h1>
            <p className="text-body-lg font-body-lg text-tertiary mt-4 max-w-2xl mx-auto">
              A vibrant neighborhood cafe dedicated to big cravings, freshly cooked comfort food, and warm local hospitality.
            </p>
          </div>
        </section>

        {/* Narrative & Visual Bento */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-surface-variant bg-surface-container shadow-2xl">
                <div className="relative w-full h-80 sm:h-96 md:h-[460px]">
                  <Image
                    src={businessConfig.images.ambience}
                    alt="Red Line Cafe interior space and dining environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface/90 backdrop-blur-md rounded-xl border border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-container/20 text-primary-container">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-headline-sm font-headline-sm text-white">Heart of Basaveshwaranagar</h4>
                      <p className="text-body-sm font-body-sm text-tertiary">1st Main Road, Bengaluru</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-secondary text-label-sm font-label-sm uppercase tracking-widest block">
                Our Story &amp; Philosophy
              </span>
              <h2 className="text-headline-lg font-headline-lg uppercase text-white tracking-tight leading-tight text-3xl md:text-4xl">
                MORE THAN JUST A QUICK BITE
              </h2>
              <p className="text-body-lg font-body-lg text-tertiary leading-relaxed">
                {businessConfig.fullDescription}
              </p>
              <p className="text-body-md font-body-md text-tertiary leading-relaxed">
                We believe great cafe food starts with honest preparation. We cook every patty fresh on order, toss fries in signature seasonings, simmer Maggi bowls to comforting perfection, and craft shakes that deliver rich indulgence without compromise.
              </p>

              {/* Values Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-surface-container rounded-xl border border-surface-variant hover:border-primary-container transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-primary-container" />
                    <h3 className="text-headline-sm font-headline-sm text-white">Fresh On Order</h3>
                  </div>
                  <p className="text-body-sm font-body-sm text-tertiary">
                    Nothing sits on warmers. Every dish is grilled and fried fresh when you order.
                  </p>
                </div>

                <div className="p-4 bg-surface-container rounded-xl border border-surface-variant hover:border-secondary transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-secondary" />
                    <h3 className="text-headline-sm font-headline-sm text-white">Hot &amp; Fast</h3>
                  </div>
                  <p className="text-body-sm font-body-sm text-tertiary">
                    Quick table turnover and prompt delivery packaging that locks in crunch.
                  </p>
                </div>

                <div className="p-4 bg-surface-container rounded-xl border border-surface-variant hover:border-secondary transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Coffee className="w-5 h-5 text-secondary" />
                    <h3 className="text-headline-sm font-headline-sm text-white">Chill Vibe</h3>
                  </div>
                  <p className="text-body-sm font-body-sm text-tertiary">
                    A relaxed, welcoming atmosphere ideal for catching up with friends or quick solo pauses.
                  </p>
                </div>

                <div className="p-4 bg-surface-container rounded-xl border border-surface-variant hover:border-primary-container transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-headline-sm font-headline-sm text-white">Pocket Friendly</h3>
                  </div>
                  <p className="text-body-sm font-body-sm text-tertiary">
                    Starting from ₹60, premium gourmet cafe cravings made accessible every day.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/menu"
                  className="bg-primary-container hover:bg-inverse-primary text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all shadow-[0_4px_20px_rgba(215,25,32,0.35)] inline-flex items-center gap-2"
                >
                  <span>EXPLORE OUR MENU</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/visit"
                  className="bg-surface-container hover:bg-surface-container-high border border-surface-variant text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all inline-flex items-center gap-2"
                >
                  <span>VISIT US</span>
                  <MapPin className="w-4 h-4 text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cafe Standards / Notice Box */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-headline-md font-headline-md uppercase text-white">
                MEET US IN PERSON
              </h3>
              <p className="text-body-sm font-body-sm text-tertiary mt-1">
                Drop by our Basaveshwaranagar location anytime from 11:00 AM to 11:00 PM. Have questions or custom requirements? Call us directly!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/visit"
                className="px-6 py-3 rounded-lg bg-surface-container-high hover:bg-surface-variant text-white text-label-md font-label-md border border-outline-variant/30 transition-colors"
              >
                View Directions
              </Link>
              <button
                onClick={() => openModal()}
                className="px-6 py-3 rounded-lg bg-primary-container hover:bg-inverse-primary text-white text-label-md font-label-md transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Order Online</span>
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <OrderModalProvider>
      <AboutContent />
    </OrderModalProvider>
  );
}
