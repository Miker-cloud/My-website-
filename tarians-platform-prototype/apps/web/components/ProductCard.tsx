"use client";

import { useApp } from "./AppProvider";
import { ui, t } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import type { Product } from "@tarians/types";

export function ProductCard({ product }: { product: Product }) {
  const { locale, currency, addToCart } = useApp();
  return (
    <div className="flex flex-col rounded-lg border border-tarian-100 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-start justify-between">
        <span className="text-4xl" aria-hidden>
          {product.imageEmoji}
        </span>
        <span className="rounded bg-tarian-50 px-2 py-0.5 text-xs text-tarian-700">
          {product.region}
        </span>
      </div>
      <h3 className="font-semibold">{t(product.name, locale)}</h3>
      <p className="mb-2 flex-1 text-sm text-tarian-900/60">
        {t(product.description, locale)}
      </p>
      <div className="mb-3 flex flex-wrap gap-1">
        {product.dietary.map((d) => (
          <span
            key={d}
            className="rounded-full bg-tarian-100 px-2 py-0.5 text-[11px] text-tarian-700"
          >
            {d}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-tarian-700">
          {formatPrice(product.price, currency)}
        </span>
        <button
          onClick={() =>
            addToCart({
              refId: product.id,
              kind: "product",
              name: product.name,
              price: product.price,
            })
          }
          className="rounded bg-tarian-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-tarian-700"
        >
          {ui("cart.add", locale)}
        </button>
      </div>
    </div>
  );
}
