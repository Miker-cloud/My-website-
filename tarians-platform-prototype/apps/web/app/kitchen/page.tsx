"use client";

import { meals } from "@tarians/mock-data";
import { useApp } from "@/components/AppProvider";
import { ui, t } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";

export default function KitchenPage() {
  const { locale, currency, addToCart } = useApp();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{ui("nav.kitchen", locale)}</h1>
        <p className="text-sm text-tarian-900/60">
          {locale === "ja"
            ? "クラウドキッチンで作る、できたてのプラントベース料理。"
            : "Freshly prepared plant-based meals from our cloud kitchens."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {meals.map((m) => (
          <div
            key={m.id}
            className="flex gap-4 rounded-lg border border-tarian-100 bg-white p-5"
          >
            <span className="text-5xl">{m.imageEmoji}</span>
            <div className="flex flex-1 flex-col">
              <h3 className="font-semibold">{t(m.name, locale)}</h3>
              <p className="flex-1 text-sm text-tarian-900/60">
                {t(m.description, locale)}
              </p>
              <p className="text-xs text-tarian-900/50">
                {ui("kitchen.leadTime", locale)} {m.leadTimeMin}
                {locale === "ja" ? "分" : " min"} · {m.region}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold text-tarian-700">
                  {formatPrice(m.price, currency)}
                </span>
                <button
                  onClick={() =>
                    addToCart({
                      refId: m.id,
                      kind: "meal",
                      name: m.name,
                      price: m.price,
                    })
                  }
                  className="rounded bg-tarian-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-tarian-700"
                >
                  {ui("cart.add", locale)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
