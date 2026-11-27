import type { Product } from "@tarians/types";

export const products: Product[] = [
  {
    id: "p-tofu-silken",
    vendorId: "v-midori",
    name: { en: "Silken Heirloom Tofu", ja: "絹ごし伝統豆腐" },
    description: {
      en: "Delicate silken tofu from heirloom Kyoto soybeans. Ready to eat.",
      ja: "京都の伝統大豆を使った繊細な絹ごし豆腐。そのままどうぞ。",
    },
    category: "fresh",
    region: "JP",
    price: { jpy: 380, usd: 2.5 },
    dietary: ["vegan", "gluten-free", "organic"],
    imageEmoji: "🧈",
    featured: true,
  },
  {
    id: "p-edamame",
    vendorId: "v-midori",
    name: { en: "Salted Edamame", ja: "塩枝豆" },
    description: {
      en: "Flash-frozen young soybeans, lightly salted. Snack or side.",
      ja: "急速冷凍の枝豆を軽く塩味で。おやつにも付け合わせにも。",
    },
    category: "snacks",
    region: "JP",
    price: { jpy: 290, usd: 1.9 },
    dietary: ["vegan", "gluten-free"],
    imageEmoji: "🫛",
  },
  {
    id: "p-koji-miso",
    vendorId: "v-umami-lab",
    name: { en: "White Koji Miso", ja: "白麹味噌" },
    description: {
      en: "Mellow, naturally fermented white miso. A plant-based umami base.",
      ja: "まろやかで自然発酵の白味噌。植物性うま味のベース。",
    },
    category: "pantry",
    region: "JP",
    price: { jpy: 620, usd: 4.1 },
    dietary: ["vegan", "soy-free"],
    imageEmoji: "🍲",
    featured: true,
  },
  {
    id: "p-umami-sauce",
    vendorId: "v-umami-lab",
    name: { en: "Fermented Umami Sauce", ja: "発酵うま味ソース" },
    description: {
      en: "A splash adds deep savory depth to any plant-based dish.",
      ja: "ひと振りで植物性料理に深いコクを。",
    },
    category: "pantry",
    region: "JP",
    price: { jpy: 540, usd: 3.6 },
    dietary: ["vegan"],
    imageEmoji: "🫗",
  },
  {
    id: "p-banh-mi-kit",
    vendorId: "v-green-saigon",
    name: { en: "Plant Bánh Mì Kit", ja: "植物性バインミーキット" },
    description: {
      en: "Everything for two Vietnamese sandwiches: pickles, pâté, and baguette.",
      ja: "ベトナムサンド2人分一式。漬物、パテ、バゲット付き。",
    },
    category: "meal-kit",
    region: "APAC",
    price: { jpy: 980, usd: 6.5 },
    dietary: ["vegan", "nut-free"],
    imageEmoji: "🥖",
    featured: true,
  },
  {
    id: "p-lemongrass-tea",
    vendorId: "v-green-saigon",
    name: { en: "Lemongrass Iced Tea", ja: "レモングラスアイスティー" },
    description: {
      en: "Refreshing caffeine-free herbal tea, lightly sweetened.",
      ja: "カフェインフリーで爽やかなハーブティー。ほんのり甘く。",
    },
    category: "beverages",
    region: "APAC",
    price: { jpy: 320, usd: 2.1 },
    dietary: ["vegan", "gluten-free", "nut-free"],
    imageEmoji: "🧋",
  },
  {
    id: "p-lentils",
    vendorId: "v-terra-global",
    name: { en: "Organic Red Lentils", ja: "有機赤レンズ豆" },
    description: {
      en: "Quick-cooking protein-rich lentils. 500g resealable pack.",
      ja: "短時間で煮える高たんぱくレンズ豆。500g再封可能パック。",
    },
    category: "pantry",
    region: "GLOBAL",
    price: { jpy: 450, usd: 3.0 },
    dietary: ["vegan", "gluten-free", "organic", "nut-free"],
    imageEmoji: "🫘",
  },
  {
    id: "p-protein",
    vendorId: "v-terra-global",
    name: { en: "Pea Protein Blend", ja: "えんどう豆プロテイン" },
    description: {
      en: "Unflavored plant protein for smoothies and baking. 1kg.",
      ja: "スムージーや焼き菓子に。無香料の植物性プロテイン。1kg。",
    },
    category: "supplements",
    region: "GLOBAL",
    price: { jpy: 2480, usd: 16.4 },
    dietary: ["vegan", "gluten-free", "soy-free"],
    imageEmoji: "🥤",
  },
];

export const productById = (id: string) => products.find((p) => p.id === id);
export const productsByVendor = (vendorId: string) =>
  products.filter((p) => p.vendorId === vendorId);
