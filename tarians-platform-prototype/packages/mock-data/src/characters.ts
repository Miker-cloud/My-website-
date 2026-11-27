import type { AiCharacter } from "@tarians/types";

export const characters: AiCharacter[] = [
  {
    id: "char-tutor",
    name: { en: "Aoi", ja: "あおい" },
    role: { en: "AI Nutrition Tutor", ja: "AI栄養チューター" },
    avatarEmoji: "👩‍🏫",
    greeting: {
      en: "Hi! I'm Aoi, your plant-based tutor. Ask me about nutrition, cooking, or ingredients.",
      ja: "こんにちは！プラントベースのチューター、あおいです。栄養や料理、食材のことを聞いてください。",
    },
  },
  {
    id: "char-host",
    name: { en: "Chef Ren", ja: "レンシェフ" },
    role: { en: "Tarian's LIVE Host", ja: "タリアンズLIVEホスト" },
    avatarEmoji: "👨‍🍳",
    greeting: {
      en: "Welcome to Tarian's LIVE! I'm Chef Ren. Let's cook and shop together.",
      ja: "タリアンズLIVEへようこそ！レンシェフです。一緒に料理してお買い物しましょう。",
    },
  },
];

export const characterById = (id: string) =>
  characters.find((c) => c.id === id);
