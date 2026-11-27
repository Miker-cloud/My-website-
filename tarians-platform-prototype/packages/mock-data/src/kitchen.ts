import type { KitchenMeal } from "@tarians/types";

export const meals: KitchenMeal[] = [
  {
    id: "k-ramen",
    name: { en: "Shoyu Mushroom Ramen", ja: "醤油きのこラーメン" },
    description: {
      en: "Rich mushroom-shoyu broth, fresh noodles, charred corn and greens.",
      ja: "濃厚なきのこ醤油スープ、生麺、焼きとうもろこしと青菜。",
    },
    price: { jpy: 1180, usd: 7.8 },
    region: "JP",
    leadTimeMin: 25,
    dietary: ["vegan"],
    imageEmoji: "🍜",
  },
  {
    id: "k-donburi",
    name: { en: "Teriyaki Tofu Donburi", ja: "照り焼き豆腐丼" },
    description: {
      en: "Glazed tofu over rice with pickles and sesame.",
      ja: "照り焼き豆腐をご飯にのせ、漬物とごまを添えて。",
    },
    price: { jpy: 980, usd: 6.5 },
    region: "JP",
    leadTimeMin: 20,
    dietary: ["vegan", "nut-free"],
    imageEmoji: "🍚",
  },
  {
    id: "k-pho",
    name: { en: "Herb Garden Phở", ja: "ハーブガーデンフォー" },
    description: {
      en: "Aromatic clear broth, rice noodles, tofu and a pile of fresh herbs.",
      ja: "香り高い澄んだスープ、フォー麺、豆腐とたっぷりのハーブ。",
    },
    price: { jpy: 1080, usd: 7.1 },
    region: "APAC",
    leadTimeMin: 30,
    dietary: ["vegan", "gluten-free"],
    imageEmoji: "🍲",
  },
  {
    id: "k-bowl",
    name: { en: "Harvest Grain Bowl", ja: "ハーベストグレインボウル" },
    description: {
      en: "Quinoa, roasted veg, lentils and tahini dressing.",
      ja: "キヌア、焼き野菜、レンズ豆、タヒニドレッシング。",
    },
    price: { jpy: 1280, usd: 8.5 },
    region: "GLOBAL",
    leadTimeMin: 15,
    dietary: ["vegan", "gluten-free", "organic"],
    imageEmoji: "🥗",
  },
];

export const mealById = (id: string) => meals.find((m) => m.id === id);
