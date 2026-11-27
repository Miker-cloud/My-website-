"use client";

import { useMemo, useState } from "react";
import { products } from "@tarians/mock-data";
import { useApp } from "@/components/AppProvider";
import { ui } from "@/lib/i18n";
import { ProductCard } from "@/components/ProductCard";
import type { Region } from "@tarians/types";

const REGIONS: (Region | "ALL")[] = ["ALL", "JP", "APAC", "GLOBAL"];

export default function MarketplacePage() {
  const { locale } = useApp();
  const [region, setRegion] = useState<Region | "ALL">("ALL");

  const filtered = useMemo(
    () => (region === "ALL" ? products : products.filter((p) => p.region === region)),
    [region],
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{ui("nav.marketplace", locale)}</h1>
        <p className="text-sm text-tarian-900/60">
          {locale === "ja"
            ? "日本・アジアを中心としたグローバルなプラントベース商品。"
            : "Global plant-based products, Japan & Asia first."}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-tarian-900/60">{ui("common.region", locale)}:</span>
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`rounded-full px-3 py-1 text-sm ${
              region === r
                ? "bg-tarian-600 text-white"
                : "bg-white text-tarian-700 ring-1 ring-tarian-100"
            }`}
          >
            {r === "ALL" ? ui("common.allRegions", locale) : r}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
