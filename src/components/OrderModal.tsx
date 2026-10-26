"use client";

import React, { useEffect, useRef } from "react";
import { X, ExternalLink, AlertCircle, ShoppingBag } from "lucide-react";
import { businessConfig } from "@/data/business";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItemName?: string | null;
}

export function OrderModal({ isOpen, onClose, selectedItemName }: OrderModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key and trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("overflow-hidden");

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { swiggy, zomato } = businessConfig.ordering;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-surface-container border border-surface-variant rounded-2xl p-6 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse" />
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary">
              Instant Delivery
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 text-tertiary hover:text-white rounded-lg hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container"
            aria-label="Close ordering modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Description */}
        <h3 id="order-modal-title" className="text-headline-md font-headline-md uppercase text-white tracking-wide">
          HOW WOULD YOU LIKE TO ORDER?
        </h3>
        <p className="text-body-sm font-body-sm text-tertiary mt-1 mb-4">
          Get your favorites delivered hot and fresh to your doorstep from our Basaveshwaranagar kitchen.
        </p>

        {selectedItemName && (
          <div className="mb-5 p-2.5 rounded-lg bg-primary-container/15 border border-primary-container/30 flex items-center gap-2 text-on-surface">
            <ShoppingBag className="w-4 h-4 text-primary-container shrink-0" />
            <span className="text-body-sm font-body-sm text-white">
              Selected Item: <span className="font-semibold text-primary">{selectedItemName}</span>
            </span>
          </div>
        )}

        {/* Delivery Options */}
        <div className="space-y-4">
          {/* Swiggy Option */}
          {swiggy.isVerified && swiggy.url ? (
            <a
              href={swiggy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-surface-container-high border border-outline-variant/30 hover:border-[#FC8019] transition-all flex items-center justify-between hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FC8019]/20 text-[#FC8019] flex items-center justify-center font-bold text-lg">
                  S
                </div>
                <div>
                  <div className="text-headline-sm font-headline-sm text-white group-hover:text-[#FC8019] transition-colors flex items-center gap-1.5">
                    ORDER ON SWIGGY
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="text-body-sm font-body-sm text-tertiary">Fastest doorstep delivery</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#FC8019]/20 text-[#FC8019] text-label-sm font-label-sm font-bold">
                SWIGGY
              </span>
            </a>
          ) : (
            <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FC8019]/10 text-[#FC8019]/60 flex items-center justify-center font-bold text-lg">
                    S
                  </div>
                  <div>
                    <div className="text-headline-sm font-headline-sm text-white/80">ORDER ON SWIGGY</div>
                    <div className="text-body-sm font-body-sm text-tertiary">Doorstep delivery</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-label-sm font-label-sm">
                  Configuring
                </span>
              </div>
              <p className="text-[12px] text-tertiary/80 flex items-center gap-1.5 pl-13">
                <AlertCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{swiggy.unavailableMessage}</span>
              </p>
            </div>
          )}

          {/* Zomato Option */}
          {zomato.isVerified && zomato.url ? (
            <a
              href={zomato.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-surface-container-high border border-outline-variant/30 hover:border-[#E23744] transition-all flex items-center justify-between hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E23744]/20 text-[#E23744] flex items-center justify-center font-bold text-lg">
                  Z
                </div>
                <div>
                  <div className="text-headline-sm font-headline-sm text-white group-hover:text-[#E23744] transition-colors flex items-center gap-1.5">
                    ORDER ON ZOMATO
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="text-body-sm font-body-sm text-tertiary">Exclusive discounts &amp; combos</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#E23744]/20 text-[#E23744] text-label-sm font-label-sm font-bold">
                ZOMATO
              </span>
            </a>
          ) : (
            <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E23744]/10 text-[#E23744]/60 flex items-center justify-center font-bold text-lg">
                    Z
                  </div>
                  <div>
                    <div className="text-headline-sm font-headline-sm text-white/80">ORDER ON ZOMATO</div>
                    <div className="text-body-sm font-body-sm text-tertiary">Discounts &amp; combos</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-label-sm font-label-sm">
                  Configuring
                </span>
              </div>
              <p className="text-[12px] text-tertiary/80 flex items-center gap-1.5 pl-13">
                <AlertCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{zomato.unavailableMessage}</span>
              </p>
            </div>
          )}
        </div>

        {/* In-person Visit note */}
        <div className="mt-6 pt-4 border-t border-outline-variant/20 text-center">
          <p className="text-body-sm font-body-sm text-tertiary">
            Visiting us in person? Walk in anytime between{" "}
            <span className="text-white font-medium">{businessConfig.hours.hours}</span>!
          </p>
        </div>
      </div>
    </div>
  );
}
