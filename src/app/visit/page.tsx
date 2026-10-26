"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ShoppingBag,
  ExternalLink,
  Car,
  Utensils
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrderModalProvider, useOrderModal } from "@/context/OrderModalContext";
import { businessConfig } from "@/data/business";

function VisitContent() {
  const { openModal } = useOrderModal();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* Visit Hero Header */}
        <section className="relative pt-14 pb-12 bg-surface border-b border-outline-variant/30">
          <div className="absolute top-0 right-1/3 w-[450px] h-[450px] bg-primary-container/15 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-secondary text-label-sm font-label-sm uppercase tracking-widest block mb-2">
              Find Your Way to Us
            </span>
            <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero uppercase text-white tracking-tight leading-tight text-4xl sm:text-5xl">
              VISIT RED LINE CAFE
            </h1>
            <p className="text-body-lg font-body-lg text-tertiary mt-3">
              Drop in for freshly cooked burgers, steaming Maggi bowls, and rich shakes in Basaveshwaranagar, Bengaluru.
            </p>
          </div>
        </section>

        {/* Location Details Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact & Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="p-6 bg-surface-container rounded-2xl border border-surface-variant hover:border-primary-container transition-colors shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-container/20 text-primary-container shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-headline-sm font-headline-sm text-white">Cafe Location</h2>
                    <p className="text-body-md font-body-md text-tertiary mt-1">
                      {businessConfig.address.fullAddressString}
                    </p>
                    <span className="inline-block mt-2 text-label-sm font-label-sm text-secondary bg-surface-container-high px-2.5 py-1 rounded">
                      Landmark: {businessConfig.address.landmark}
                    </span>

                    <div className="mt-4 pt-4 border-t border-outline-variant/30">
                      <a
                        href={businessConfig.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-container hover:bg-inverse-primary text-white text-label-md font-label-md py-2.5 px-5 rounded-lg active:scale-95 transition-all shadow-[0_4px_16px_rgba(215,25,32,0.3)] cursor-pointer"
                      >
                        <span>Open In Google Maps</span>
                        <Navigation className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 bg-surface-container rounded-2xl border border-surface-variant hover:border-secondary transition-colors shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/20 text-secondary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-headline-sm font-headline-sm text-white">Opening Hours</h2>
                    <p className="text-body-md font-body-md text-tertiary mt-1">
                      {businessConfig.hours.days}:{" "}
                      <span className="text-white font-medium">{businessConfig.hours.hours}</span>
                    </p>
                    <div className="inline-flex items-center gap-2 mt-3 text-label-sm font-label-sm text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {businessConfig.hours.statusText}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="p-6 bg-surface-container rounded-2xl border border-surface-variant hover:border-primary-container transition-colors shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-container/20 text-primary-container shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-headline-sm font-headline-sm text-white">Contact &amp; Queries</h2>
                    <p className="text-body-sm font-body-sm text-tertiary mt-1">
                      Phone: <span className="text-white font-medium">{businessConfig.contact.phoneDisplay}</span>
                    </p>
                    <p className="text-body-sm font-body-sm text-tertiary mt-1">
                      Call during operational hours for table checks or bulk takeaway queries.
                    </p>
                    {businessConfig.contact.isPhoneVerified && businessConfig.contact.phone && (
                      <div className="mt-4">
                        <a
                          href={`tel:${businessConfig.contact.phone}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-primary-container text-white text-label-sm font-label-sm transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call Cafe</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Online Ordering CTA */}
              <div className="p-6 bg-gradient-to-r from-primary-container/20 to-surface-container rounded-2xl border border-primary-container/40">
                <h3 className="text-headline-sm font-headline-sm text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary-container" />
                  Prefer Doorstep Delivery?
                </h3>
                <p className="text-body-sm font-body-sm text-tertiary mt-1">
                  Enjoy our hot, freshly prepared dishes from the comfort of home through our verified delivery partners.
                </p>
                <button
                  onClick={() => openModal()}
                  className="mt-4 inline-flex items-center gap-2 bg-primary-container hover:bg-inverse-primary text-white text-label-md font-label-md py-2.5 px-5 rounded-lg active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  <span>Order Online Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Map Visual Card & Helpful Visitor Information */}
            <div className="lg:col-span-7 space-y-6">
              {/* Map Visual Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-surface-variant bg-surface-container h-[420px] shadow-2xl group">
                <Image
                  src={businessConfig.images.mapPreview}
                  alt="Stylized map showing Red Line Cafe in Basaveshwaranagar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-5 bg-surface/90 backdrop-blur-md rounded-xl border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-headline-sm font-headline-sm text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping" />
                      RED LINE CAFE PIN
                    </div>
                    <div className="text-body-sm font-body-sm text-tertiary mt-0.5">
                      1st Main Rd, Basaveshwaranagar, Bengaluru
                    </div>
                  </div>
                  <a
                    href={businessConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-container hover:bg-inverse-primary text-white text-label-md font-label-md px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visitor Highlights / Tips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container rounded-xl border border-surface-variant">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Utensils className="w-5 h-5 text-secondary" />
                    <h3 className="text-headline-sm font-headline-sm text-white">Dine-in Experience</h3>
                  </div>
                  <p className="text-body-sm font-body-sm text-tertiary">
                    Casual, welcoming walk-in seating. Perfect for evening meetups, study breaks, and food cravings.
                  </p>
                </div>

                <div className="p-5 bg-surface-container rounded-xl border border-surface-variant">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Car className="w-5 h-5 text-secondary" />
                    <h3 className="text-headline-sm font-headline-sm text-white">Parking &amp; Transit</h3>
                  </div>
                  <p className="text-body-sm font-body-sm text-tertiary">
                    Convenient street two-wheeler and four-wheeler parking available along the main road.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function VisitPage() {
  return (
    <OrderModalProvider>
      <VisitContent />
    </OrderModalProvider>
  );
}
