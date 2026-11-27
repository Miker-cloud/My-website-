"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { vendorBySlug, productsByVendor } from "@tarians/mock-data";
import { useApp } from "@/components/AppProvider";
import { t } from "@/lib/i18n";
import { ProductCard } from "@/components/ProductCard";
import { DemoBadge } from "@/components/DemoBadge";

export default function VendorStorefront({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { locale } = useApp();
  const vendor = vendorBySlug(slug);
  if (!vendor) return notFound();
  const vendorProducts = productsByVendor(vendor.id);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-tarian-500 to-tarian-700 p-8 text-white">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-5xl">{vendor.logoEmoji}</span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{t(vendor.name, locale)}</h1>
              {vendor.verified && (
                <DemoBadge label={locale === "ja" ? "認証（モック）" : "Verified (mock)"} />
              )}
            </div>
            <span className="text-sm text-white/80">{vendor.region}</span>
          </div>
        </div>
        <p className="max-w-2xl text-white/90">{t(vendor.story, locale)}</p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          {locale === "ja" ? "商品" : "Products"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vendorProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
