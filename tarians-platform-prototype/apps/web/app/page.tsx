"use client";

import Link from "next/link";
import { useApp } from "@/components/AppProvider";
import { ui } from "@/lib/i18n";
import { DemoBadge } from "@/components/DemoBadge";

const PILLARS = [
  { emoji: "📚", en: "Education", ja: "教育", descEn: "AI-guided plant-based learning.", descJa: "AIが導くプラントベース学習。" },
  { emoji: "🤖", en: "Artificial Intelligence", ja: "人工知能", descEn: "AlphaDataCenter.ai powers every experience.", descJa: "AlphaDataCenter.aiがすべてを支えます。" },
  { emoji: "🌱", en: "Plant-based", ja: "プラントベース", descEn: "A global marketplace of plant products.", descJa: "植物性商品のグローバルマーケット。" },
];

const MODULES: { href: string; emoji: string; en: string; ja: string }[] = [
  { href: "/marketplace", emoji: "🛒", en: "Marketplace", ja: "マーケット" },
  { href: "/vendors", emoji: "🏬", en: "Vendor Storefronts", ja: "ベンダーストア" },
  { href: "/kitchen", emoji: "🍜", en: "Cloud Kitchen", ja: "クラウドキッチン" },
  { href: "/education", emoji: "🎓", en: "Education", ja: "教育" },
  { href: "/live", emoji: "🎥", en: "Tarian's LIVE", ja: "タリアンズLIVE" },
];

export default function HomePage() {
  const { locale } = useApp();
  const isJa = locale === "ja";

  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-gradient-to-br from-tarian-600 to-tarian-900 p-8 text-white md:p-12">
        <div className="mb-3">
          <DemoBadge label={isJa ? "投資家向けデモ・モックデータ" : "Investor demo · mock data"} />
        </div>
        <h1 className="mb-3 text-3xl font-bold md:text-5xl">
          {ui("brand", locale)}
        </h1>
        <p className="max-w-2xl text-lg text-white/90">{ui("tagline", locale)}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/marketplace" className="rounded-lg bg-white px-5 py-2.5 font-medium text-tarian-700 hover:bg-tarian-50">
            {ui("nav.marketplace", locale)} →
          </Link>
          <Link href="/live" className="rounded-lg bg-amber-400 px-5 py-2.5 font-medium text-tarian-900 hover:bg-amber-300">
            {ui("nav.live", locale)} 🎥
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          {isJa ? "3つの柱" : "Three pillars"}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.en} className="rounded-lg border border-tarian-100 bg-white p-5">
              <div className="mb-2 text-3xl">{p.emoji}</div>
              <h3 className="font-semibold">{isJa ? p.ja : p.en}</h3>
              <p className="text-sm text-tarian-900/60">{isJa ? p.descJa : p.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          {isJa ? "プラットフォームを探索" : "Explore the platform"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="flex items-center gap-3 rounded-lg border border-tarian-100 bg-white p-5 transition hover:border-tarian-500 hover:shadow"
            >
              <span className="text-3xl">{m.emoji}</span>
              <span className="font-medium">{isJa ? m.ja : m.en}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
