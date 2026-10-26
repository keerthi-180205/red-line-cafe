"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Flame,
  CheckCircle,
  MapPin,
  Clock,
  Phone,
  Navigation,
  Heart,
  Zap,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedMenuCard } from "@/components/FeaturedMenuCard";
import { CategoryCard } from "@/components/CategoryCard";
import { OrderModalProvider, useOrderModal } from "@/context/OrderModalContext";
import { businessConfig } from "@/data/business";
import { menuCategories, getFeaturedMenuItems } from "@/data/menu";

function HomeContent() {
  const { openModal } = useOrderModal();
  const featuredItems = getFeaturedMenuItems();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-16 md:py-24 bg-surface" id="hero">
          {/* Atmospheric Crimson Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] md:w-[650px] h-[340px] md:h-[650px] bg-primary-container/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 blur-[90px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left Hero Content */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
                  <span className="text-label-sm font-label-sm text-secondary tracking-widest uppercase">
                    Basaveshwaranagar, Bengaluru
                  </span>
                </div>

                <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero uppercase tracking-tight text-white leading-none text-4xl sm:text-5xl md:text-6xl">
                  GOOD FOOD.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">
                    BIG CRAVINGS.
                  </span>
                  <br />
                  RED LINE.
                </h1>

                <p className="text-body-lg font-body-lg text-tertiary max-w-xl text-base sm:text-lg">
                  {businessConfig.heroSubheadline}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
                  <button
                    onClick={() => openModal()}
                    className="flex-1 sm:flex-initial bg-primary-container hover:bg-inverse-primary text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all shadow-[0_4px_24px_rgba(215,25,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ORDER ONLINE</span>
                    <ShoppingBag className="w-4 h-4" />
                  </button>

                  <Link
                    href="/menu"
                    className="flex-1 sm:flex-initial bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all text-center flex items-center justify-center gap-1"
                  >
                    EXPLORE MENU
                  </Link>
                </div>

                {/* Quick Metrics Bar */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-outline-variant/30 w-full max-w-lg">
                  <div>
                    <div className="text-headline-md font-headline-md text-white">
                      {businessConfig.metrics.rating}
                    </div>
                    <div className="text-label-sm font-label-sm text-tertiary">
                      {businessConfig.metrics.ratingLabel}
                    </div>
                  </div>
                  <div>
                    <div className="text-headline-md font-headline-md text-white">
                      {businessConfig.metrics.quality}
                    </div>
                    <div className="text-label-sm font-label-sm text-tertiary">
                      {businessConfig.metrics.qualityLabel}
                    </div>
                  </div>
                  <div>
                    <div className="text-headline-md font-headline-md text-secondary">
                      {businessConfig.metrics.startingPrice}
                    </div>
                    <div className="text-label-sm font-label-sm text-tertiary">
                      {businessConfig.metrics.startingPriceLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual Hero Photo */}
              <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                <div className="relative mx-auto max-w-md lg:max-w-none group">
                  {/* Decorative Border Frame */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-container to-secondary rounded-xl opacity-30 blur-lg group-hover:opacity-60 transition duration-500" />
                  <div className="relative rounded-xl overflow-hidden bg-surface-container border border-surface-variant shadow-2xl">
                    <div className="relative w-full h-80 sm:h-96 md:h-[420px]">
                      <Image
                        src={businessConfig.images.hero}
                        alt={businessConfig.images.heroAlt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg border border-outline-variant/40 flex items-center justify-between">
                      <div>
                        <span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">
                          Cafe Signature
                        </span>
                        <span className="text-headline-sm font-headline-sm text-white">
                          Loaded Crunch Chicken Burger
                        </span>
                      </div>
                      <span className="text-headline-md font-headline-md text-primary-container">
                        ₹149
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED MENU SECTION ("Warm Cream" Contrast Background) */}
        <section className="py-16 md:py-24 bg-[#FFF8E8] text-[#171717] transition-colors" id="menu">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 rounded bg-[#171717] text-[#FFF8E8] text-label-sm font-label-sm uppercase tracking-widest mb-3">
                Fresh &amp; Craveable
              </span>
              <h2 className="text-headline-lg font-headline-lg uppercase text-[#171717] tracking-tight text-3xl md:text-4xl">
                MADE FOR YOUR CRAVINGS
              </h2>
              <p className="text-body-md font-body-md text-[#505050] mt-2">
                Find something delicious for your next visit. Cooked on-order with secret spices and unmistakable crunch.
              </p>
            </div>

            {/* 6-Card Ergonomic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredItems.map((item) => (
                <FeaturedMenuCard key={item.id} item={item} />
              ))}
            </div>

            {/* View Full Menu CTA */}
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-[#171717] hover:bg-primary-container text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all shadow-md"
              >
                <span>VIEW FULL MENU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. FOOD CATEGORY SECTION */}
        <section className="py-16 md:py-24 bg-surface-container-low" id="categories">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-secondary text-label-sm font-label-sm uppercase tracking-widest block mb-2">
                  Our Specialty Range
                </span>
                <h2 className="text-headline-lg font-headline-lg uppercase text-white tracking-tight text-3xl md:text-4xl">
                  EXPLORE CATEGORIES
                </h2>
              </div>
              <p className="text-body-md font-body-md text-tertiary mt-2 md:mt-0 max-w-md">
                Dive straight into what you&apos;re craving right now. Everything crafted fresh on order.
              </p>
            </div>

            {/* 4 Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. SPECIAL OFFERS SECTION (Bold Promotional Red Banner #D71920) */}
        <section className="py-12 md:py-16 bg-primary-container relative overflow-hidden text-white">
          {/* Atmospheric Accent Pattern */}
          <div className="absolute -right-12 -top-12 w-64 h-64 border-8 border-white/10 rounded-full pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-80 h-80 border-8 border-black/10 rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 bg-black/25 text-white text-label-sm font-label-sm px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
                  <Flame className="w-4 h-4 text-secondary" /> Limited Period Deals
                </span>
                <h2 className="text-headline-lg font-headline-lg uppercase font-bold tracking-tight text-white leading-tight text-3xl md:text-4xl">
                  SOMETHING GOOD IS COOKING.
                </h2>
                <p className="text-body-lg font-body-lg text-white/90 mt-3 max-w-xl">
                  Exclusive cafe combos and seasonal specials dropping soon. Ask our crew during your visit or enjoy instant app discounts!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => openModal()}
                  className="bg-white hover:bg-[#FFF8E8] text-[#171717] text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all shadow-xl font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CHECK TODAY&apos;S SPECIALS</span>
                  <CheckCircle className="w-4 h-4 text-primary-container" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ABOUT THE CAFE SECTION */}
        <section className="py-16 md:py-24 bg-surface" id="about">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Image Composition */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-xl overflow-hidden border border-surface-variant bg-surface-container shadow-2xl">
                  <div className="relative w-full h-80 sm:h-96 md:h-[440px]">
                    <Image
                      src={businessConfig.images.ambience}
                      alt="Red Line Cafe Ambience in Basaveshwaranagar"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 p-4 bg-surface/90 backdrop-blur-md rounded-lg border border-outline-variant/30 max-w-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-5 h-5 text-primary-container" />
                      <span className="text-headline-sm font-headline-sm text-white">
                        Basaveshwaranagar
                      </span>
                    </div>
                    <p className="text-body-sm font-body-sm text-tertiary">
                      The local hub for real flavors &amp; late evening conversations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Story Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 rounded bg-surface-container border border-surface-variant text-secondary text-label-sm font-label-sm uppercase tracking-widest">
                  Behind The Red Line
                </div>
                <h2 className="text-headline-lg font-headline-lg uppercase text-white tracking-tight leading-tight text-3xl md:text-4xl">
                  MORE THAN JUST A QUICK BITE
                </h2>
                <p className="text-body-lg font-body-lg text-tertiary leading-relaxed">
                  {businessConfig.fullDescription}
                </p>
                <p className="text-body-md font-body-md text-tertiary">
                  We source wholesome ingredients, cook every patty fresh on order, and craft drinks that hit the sweet spot every single time. Stop by to recharge your day or order in for movie night.
                </p>

                {/* Core Values Badges */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 bg-surface-container rounded-lg border border-surface-variant flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary-container shrink-0" />
                    <div>
                      <h4 className="text-label-md font-label-md text-white">Crafted With Care</h4>
                      <p className="text-body-sm font-body-sm text-tertiary">Fresh everyday</p>
                    </div>
                  </div>
                  <div className="p-3.5 bg-surface-container rounded-lg border border-surface-variant flex items-center gap-3">
                    <Zap className="w-5 h-5 text-secondary shrink-0" />
                    <div>
                      <h4 className="text-label-md font-label-md text-white">Fast Service</h4>
                      <p className="text-body-sm font-body-sm text-tertiary">Hot &amp; crisp to table</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high border border-surface-variant hover:border-primary-container text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all"
                  >
                    <span>LEARN MORE ABOUT US</span>
                    <ArrowRight className="w-4 h-4 text-primary-container" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. VISIT US / LOCATION SECTION */}
        <section className="py-16 md:py-24 bg-surface-container-lowest border-t border-outline-variant/20" id="visit">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-primary-container text-label-sm font-label-sm uppercase tracking-widest block mb-2">
                Find Your Table
              </span>
              <h2 className="text-headline-lg font-headline-lg uppercase text-white tracking-tight text-3xl md:text-4xl">
                YOUR NEXT STOP: RED LINE CAFE
              </h2>
              <p className="text-body-md font-body-md text-tertiary mt-2">
                Drop in for hot snacks and chilled beverages in Basaveshwaranagar.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Info Cards */}
              <div className="lg:col-span-5 space-y-4">
                {/* Address */}
                <div className="p-5 bg-surface-container rounded-xl border border-surface-variant hover:border-primary-container transition-colors flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary-container/20 text-primary-container">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-white">Our Address</h3>
                    <p className="text-body-sm font-body-sm text-tertiary mt-1">
                      {businessConfig.address.fullAddressString}
                    </p>
                    <span className="inline-block mt-2 text-label-sm font-label-sm text-secondary">
                      {businessConfig.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 bg-surface-container rounded-xl border border-surface-variant hover:border-secondary transition-colors flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-secondary/20 text-secondary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-white">Opening Hours</h3>
                    <p className="text-body-sm font-body-sm text-tertiary mt-1">
                      {businessConfig.hours.days}:{" "}
                      <span className="text-white font-medium">{businessConfig.hours.hours}</span>
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-2 text-label-sm font-label-sm text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {businessConfig.hours.statusText}
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="p-5 bg-surface-container rounded-xl border border-surface-variant hover:border-primary-container transition-colors flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary-container/20 text-primary-container">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-white">Direct Contact</h3>
                    <p className="text-body-sm font-body-sm text-tertiary mt-1">
                      Phone: <span className="text-white font-medium">{businessConfig.contact.phoneDisplay}</span>
                    </p>
                    <p className="text-body-sm font-body-sm text-tertiary">
                      Available on call during operational cafe hours.
                    </p>
                  </div>
                </div>

                {/* Map CTA */}
                <div className="pt-2">
                  <a
                    href={businessConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary-container hover:bg-inverse-primary text-white text-label-lg font-label-lg py-3.5 px-6 rounded-lg active:scale-95 transition-all shadow-[0_4px_20px_rgba(215,25,32,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>GET DIRECTIONS ON MAP</span>
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Styled Map Preview Card */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden border border-surface-variant bg-surface-container h-[430px] shadow-2xl group">
                  <Image
                    src={businessConfig.images.mapPreview}
                    alt="Basaveshwaranagar Cafe Map Location"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Map Overlay Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-surface/90 backdrop-blur-md rounded-lg border border-outline-variant/30 flex items-center justify-between">
                    <div>
                      <div className="text-headline-sm font-headline-sm text-white flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping" />
                        RED LINE CAFE PIN
                      </div>
                      <div className="text-body-sm font-body-sm text-tertiary">
                        1st Main Rd, Basaveshwaranagar
                      </div>
                    </div>
                    <a
                      href={businessConfig.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface-container-high hover:bg-primary-container hover:text-white text-on-surface text-label-md font-label-md px-4 py-2 rounded transition-colors"
                    >
                      Open Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FINAL CALL TO ACTION SECTION */}
        <section className="py-16 md:py-24 bg-surface relative overflow-hidden text-center border-t border-outline-variant/30">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent" />
          <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
            <span className="inline-block w-12 h-1 bg-primary-container rounded mb-6" />
            <h2 className="text-display-hero-mobile md:text-display-hero font-display-hero uppercase tracking-tight text-white mb-4 text-4xl sm:text-5xl">
              YOUR NEXT CRAVING STARTS HERE.
            </h2>
            <p className="text-body-lg font-body-lg text-tertiary max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Step into our Basaveshwaranagar cafe or get your favorites delivered hot and crisp in minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/menu"
                className="bg-surface-container hover:bg-surface-container-high border border-surface-variant text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all"
              >
                EXPLORE MENU
              </Link>
              <button
                onClick={() => openModal()}
                className="bg-primary-container hover:bg-inverse-primary text-white text-label-lg font-label-lg px-8 py-3.5 rounded-lg active:scale-95 transition-all shadow-[0_4px_24px_rgba(215,25,32,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>ORDER ONLINE</span>
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

export default function HomePage() {
  return (
    <OrderModalProvider>
      <HomeContent />
    </OrderModalProvider>
  );
}
