"use client";

import Link from "next/link";
import { useApp } from "./AppProvider";
import { ui } from "@/lib/i18n";
import type { Currency, Locale } from "@tarians/types";

const LINKS: { href: string; key: Parameters<typeof ui>[0] }[] = [
  { href: "/marketplace", key: "nav.marketplace" },
  { href: "/vendors", key: "nav.vendors" },
  { href: "/kitchen", key: "nav.kitchen" },
  { href: "/education", key: "nav.education" },
  { href: "/live", key: "nav.live" },
];

export function NavBar({ onOpenCart }: { onOpenCart: () => void }) {
  const { locale, setLocale, currency, setCurrency, cartCount } = useApp();

  return (
    <header className="sticky top-0 z-30 border-b border-tarian-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-tarian-700">
          <span className="text-xl">🌿</span>
          <span>{ui("brand", locale)}</span>
        </Link>

        <nav className="hidden flex-1 items-center gap-4 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-tarian-900/80 hover:text-tarian-700"
            >
              {ui(l.key, locale)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <select
            aria-label="Language"
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            className="rounded border border-tarian-100 bg-white px-2 py-1 text-sm"
          >
            <option value="ja">日本語</option>
            <option value="en">EN</option>
          </select>
          <select
            aria-label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="rounded border border-tarian-100 bg-white px-2 py-1 text-sm"
          >
            <option value="JPY">JPY ¥</option>
            <option value="USD">USD $</option>
          </select>
          <button
            onClick={onOpenCart}
            className="relative rounded bg-tarian-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-tarian-700"
          >
            {ui("cart.title", locale)}
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <nav className="flex items-center gap-4 overflow-x-auto px-4 pb-2 md:hidden">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="whitespace-nowrap text-sm font-medium text-tarian-900/80"
          >
            {ui(l.key, locale)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
