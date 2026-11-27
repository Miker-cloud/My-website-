import type { Locale, LocalizedText } from "@tarians/types";

export const LOCALES: Locale[] = ["en", "ja"];
export const DEFAULT_LOCALE: Locale = "ja"; // Japan-first

/** Resolve a LocalizedText for the active locale, falling back to English. */
export function t(text: LocalizedText, locale: Locale): string {
  if (locale === "ja") return text.ja ?? text.en;
  return text.en;
}

type UiKey =
  | "brand"
  | "tagline"
  | "nav.home"
  | "nav.marketplace"
  | "nav.vendors"
  | "nav.kitchen"
  | "nav.education"
  | "nav.live"
  | "cart.title"
  | "cart.empty"
  | "cart.total"
  | "cart.add"
  | "cart.checkout"
  | "cart.checkoutNote"
  | "common.demo"
  | "common.region"
  | "common.allRegions"
  | "common.viewVendor"
  | "ai.ask"
  | "ai.placeholder"
  | "ai.demoBadge"
  | "live.title"
  | "live.spotlight"
  | "kitchen.leadTime";

const DICT: Record<UiKey, LocalizedText> = {
  brand: { en: "Tarian's", ja: "タリアンズ" },
  tagline: {
    en: "Education · AI · Plant-based — for Japan, Asia, and the world.",
    ja: "教育・AI・プラントベース — 日本、アジア、そして世界へ。",
  },
  "nav.home": { en: "Home", ja: "ホーム" },
  "nav.marketplace": { en: "Marketplace", ja: "マーケット" },
  "nav.vendors": { en: "Vendors", ja: "ベンダー" },
  "nav.kitchen": { en: "Cloud Kitchen", ja: "クラウドキッチン" },
  "nav.education": { en: "Education", ja: "教育" },
  "nav.live": { en: "LIVE", ja: "LIVE" },
  "cart.title": { en: "Cart", ja: "カート" },
  "cart.empty": { en: "Your cart is empty.", ja: "カートは空です。" },
  "cart.total": { en: "Total", ja: "合計" },
  "cart.add": { en: "Add to cart", ja: "カートに追加" },
  "cart.checkout": { en: "Checkout (demo)", ja: "購入手続き（デモ）" },
  "cart.checkoutNote": {
    en: "Demo only — no payment is processed. Payments are a proposed integration.",
    ja: "デモのみ — 決済は行われません。決済は提案中の連携機能です。",
  },
  "common.demo": { en: "Demo", ja: "デモ" },
  "common.region": { en: "Region", ja: "地域" },
  "common.allRegions": { en: "All regions", ja: "すべての地域" },
  "common.viewVendor": { en: "Visit storefront", ja: "ストアを見る" },
  "ai.ask": { en: "Ask", ja: "質問" },
  "ai.placeholder": {
    en: "Ask about nutrition, cooking, ingredients…",
    ja: "栄養、料理、食材について聞いてみる…",
  },
  "ai.demoBadge": {
    en: "Demo AI — scripted, no live model",
    ja: "デモAI — スクリプト式、ライブモデルなし",
  },
  "live.title": { en: "Tarian's LIVE", ja: "タリアンズLIVE" },
  "live.spotlight": { en: "Now spotlighting", ja: "注目の商品" },
  "kitchen.leadTime": { en: "Ready in", ja: "調理時間" },
};

export function ui(key: UiKey, locale: Locale): string {
  return t(DICT[key], locale);
}
