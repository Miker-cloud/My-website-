"use client";

import { useEffect, useState } from "react";
import { products, characterById } from "@tarians/mock-data";
import { useApp } from "@/components/AppProvider";
import { ui, t } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { CharacterChat } from "@/components/CharacterChat";
import { DemoBadge } from "@/components/DemoBadge";

// The LIVE stage rotates through a scripted set of "spotlighted" products,
// standing in for a real-time broadcast. No video/streaming is used.
const SPOTLIGHT_IDS = ["p-koji-miso", "p-tofu-silken", "p-banh-mi-kit"];
const spotlightProducts = SPOTLIGHT_IDS.map(
  (id) => products.find((p) => p.id === id)!,
);

export default function LivePage() {
  const { locale, currency, addToCart } = useApp();
  const host = characterById("char-host")!;
  const [idx, setIdx] = useState(0);

  // Auto-rotate the spotlight to mimic a live broadcast flow.
  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % spotlightProducts.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const current = spotlightProducts[idx];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">{ui("live.title", locale)}</h1>
        <span className="flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
          ● LIVE
        </span>
        <DemoBadge
          label={
            locale === "ja"
              ? "スクリプト式・動画なし"
              : "Scripted · no live video"
          }
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Stage */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tarian-700 to-tarian-900 p-8 text-white">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-5xl">{host.avatarEmoji}</span>
              <div>
                <p className="font-semibold">{t(host.name, locale)}</p>
                <p className="text-sm text-white/70">{t(host.role, locale)}</p>
              </div>
            </div>

            <p className="mb-2 text-sm uppercase tracking-wide text-white/60">
              {ui("live.spotlight", locale)}
            </p>
            <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur">
              <span className="text-6xl">{current.imageEmoji}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold">{t(current.name, locale)}</h2>
                <p className="text-sm text-white/80">
                  {t(current.description, locale)}
                </p>
                <p className="mt-1 text-lg font-bold">
                  {formatPrice(current.price, currency)}
                </p>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    refId: current.id,
                    kind: "product",
                    name: current.name,
                    price: current.price,
                  })
                }
                className="rounded-lg bg-amber-400 px-4 py-2 font-medium text-tarian-900 hover:bg-amber-300"
              >
                {ui("cart.add", locale)}
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              {spotlightProducts.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setIdx(i)}
                  aria-label={t(p.name, locale)}
                  className={`h-2 w-8 rounded-full transition ${
                    i === idx ? "bg-amber-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Live chat with the AI host */}
        <div>
          <CharacterChat character={host} />
        </div>
      </div>
    </div>
  );
}
