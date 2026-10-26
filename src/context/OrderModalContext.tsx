"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { OrderModal } from "@/components/OrderModal";

interface OrderModalContextType {
  isOpen: boolean;
  openModal: (itemName?: string) => void;
  closeModal: () => void;
  selectedItemName: string | null;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const openModal = useCallback((itemName?: string) => {
    setSelectedItemName(itemName || null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedItemName(null);
  }, []);

  return (
    <OrderModalContext.Provider value={{ isOpen, openModal, closeModal, selectedItemName }}>
      {children}
      <OrderModal isOpen={isOpen} onClose={closeModal} selectedItemName={selectedItemName} />
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error("useOrderModal must be used within an OrderModalProvider");
  }
  return context;
}
