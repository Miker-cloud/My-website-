import type { Currency, Price } from "@tarians/types";

export function formatPrice(price: Price, currency: Currency): string {
  if (currency === "JPY") {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(price.jpy);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price.usd);
}

export function sumCart(
  items: { price: Price; qty: number }[],
): Price {
  return items.reduce<Price>(
    (acc, it) => ({
      jpy: acc.jpy + it.price.jpy * it.qty,
      usd: acc.usd + it.price.usd * it.qty,
    }),
    { jpy: 0, usd: 0 },
  );
}
