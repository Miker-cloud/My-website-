"use client";

import Link from "next/link";
import { vendors } from "@tarians/mock-data";
import { useApp } from "@/components/AppProvider";
import { ui, t } from "@/lib/i18n";
import { DemoBadge } from "@/components/DemoBadge";

export default function VendorsPage() {
  const { locale } = useApp();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{ui("nav.vendors", locale)}</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {vendors.map((v) => (
          <Link
            key={v.id}
            href={`/vendors/${v.slug}`}
            className="flex gap-4 rounded-lg border border-tarian-100 bg-white p-5 transition hover:border-tarian-500 hover:shadow"
          >
            <span className="text-4xl">{v.logoEmoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{t(v.name, locale)}</h3>
                {v.verified && (
                  <DemoBadge label={locale === "ja" ? "認証（モック）" : "Verified (mock)"} />
                )}
              </div>
              <p className="text-sm text-tarian-900/60">{t(v.story, locale)}</p>
              <span className="mt-1 inline-block text-xs text-tarian-700">
                {ui("common.viewVendor", locale)} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
