"use client";

import { useState } from "react";
import { NavBar } from "./NavBar";
import { CartDrawer } from "./CartDrawer";

export function Shell({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <NavBar onOpenCart={() => setCartOpen(true)} />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <footer className="border-t border-tarian-100 bg-white py-6 text-center text-xs text-tarian-900/50">
        Tarian's · plantbased.cloud · AlphaDataCenter.ai — investor demo, mock data only.
      </footer>
    </>
  );
}
