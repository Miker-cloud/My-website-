"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Currency, Locale, Price } from "@tarians/types";

interface AppState {
  locale: Locale;
  currency: Currency;
  cart: CartItem[];
  setLocale: (l: Locale) => void;
  setCurrency: (c: Currency) => void;
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeFromCart: (refId: string) => void;
  clearCart: () => void;
  cartCount: number;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja"); // Japan-first
  const [currency, setCurrency] = useState<Currency>("JPY");
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback(
    (item: Omit<CartItem, "qty">, qty = 1) => {
      setCart((prev) => {
        const existing = prev.find((c) => c.refId === item.refId);
        if (existing) {
          return prev.map((c) =>
            c.refId === item.refId ? { ...c, qty: c.qty + qty } : c,
          );
        }
        return [...prev, { ...item, qty }];
      });
    },
    [],
  );

  const removeFromCart = useCallback((refId: string) => {
    setCart((prev) => prev.filter((c) => c.refId !== refId));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const value = useMemo<AppState>(
    () => ({
      locale,
      currency,
      cart,
      setLocale,
      setCurrency,
      addToCart,
      removeFromCart,
      clearCart,
      cartCount: cart.reduce((n, c) => n + c.qty, 0),
    }),
    [locale, currency, cart, addToCart, removeFromCart, clearCart],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

export type { Price };
