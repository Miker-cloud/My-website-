import type { Vendor } from "@tarians/types";

export const vendors: Vendor[] = [
  {
    id: "v-midori",
    slug: "midori-foods",
    name: { en: "Midori Foods", ja: "みどりフーズ" },
    story: {
      en: "A Kyoto family kitchen turning heirloom soy and seasonal vegetables into everyday staples.",
      ja: "京都の家庭の台所から、伝統的な大豆と旬の野菜を毎日の定番食品に。",
    },
    region: "JP",
    logoEmoji: "🌿",
    verified: true,
  },
  {
    id: "v-umami-lab",
    slug: "umami-lab",
    name: { en: "Umami Lab", ja: "うま味ラボ" },
    story: {
      en: "Tokyo food scientists crafting plant-based umami: koji, miso, and fermented sauces.",
      ja: "東京の食品科学者が作る植物性のうま味。麹、味噌、発酵ソース。",
    },
    region: "JP",
    logoEmoji: "🍶",
    verified: true,
  },
  {
    id: "v-green-saigon",
    slug: "green-saigon",
    name: { en: "Green Saigon", ja: "グリーンサイゴン" },
    story: {
      en: "Vietnamese street-food flavors reimagined with 100% plants, made in Ho Chi Minh City.",
      ja: "ベトナムの屋台の味を100%植物性で再現。ホーチミン市製。",
    },
    region: "APAC",
    logoEmoji: "🌱",
    verified: true,
  },
  {
    id: "v-terra-global",
    slug: "terra-global",
    name: { en: "Terra Global", ja: "テラグローバル" },
    story: {
      en: "A global pantry brand sourcing organic legumes and grains for plant-based cooking everywhere.",
      ja: "世界中の植物性料理のために有機豆類と穀物を調達するグローバルブランド。",
    },
    region: "GLOBAL",
    logoEmoji: "🌍",
    verified: false,
  },
];

export const vendorById = (id: string) => vendors.find((v) => v.id === id);
export const vendorBySlug = (slug: string) =>
  vendors.find((v) => v.slug === slug);
