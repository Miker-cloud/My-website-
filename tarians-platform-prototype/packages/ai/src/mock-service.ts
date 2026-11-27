// AlphaDataCenter.ai — MOCK adapter.
//
// This implements the AiService contract with scripted, offline logic. It makes
// NO network calls and uses NO paid providers. A real adapter (LLM, KYC,
// ranking, profile service) can be dropped in behind the same interface — see
// docs/ARCHITECTURE.md §3.

import type {
  AiService,
  AiChatRequest,
  AiChatResponse,
  AiRecommendRequest,
  AiVerifyRequest,
  AiVerifyResponse,
  AiPersonalizeResponse,
  Product,
} from "@tarians/types";
import { products, characterById } from "@tarians/mock-data";

/** Scripted knowledge base for the demo tutor/host characters. */
const SCRIPTS: Record<string, { match: RegExp; en: string; ja: string }[]> = {
  "char-tutor": [
    {
      match: /protein|たんぱく|タンパク/i,
      en: "Great plant proteins: tofu, tempeh, edamame, lentils and pea protein. Combine legumes with grains across the day for complete protein.",
      ja: "良い植物性たんぱく質は、豆腐、テンペ、枝豆、レンズ豆、えんどう豆プロテインです。豆類と穀物を一日で組み合わせると完全になります。",
    },
    {
      match: /dashi|出汁|だし|umami|うま味/i,
      en: "For fish-free dashi, simmer kombu and dried shiitake. That umami base carries miso soup, nabe, and noodle broths.",
      ja: "魚を使わない出汁は、昆布と干し椎茸を煮出します。そのうま味が味噌汁、鍋、麺のスープを支えます。",
    },
    {
      match: /iron|鉄|calcium|カルシウム/i,
      en: "Leafy greens, tofu set with calcium, sesame, and legumes cover iron and calcium. Pair iron-rich foods with vitamin C to absorb more.",
      ja: "葉物野菜、カルシウム凝固の豆腐、ごま、豆類で鉄とカルシウムを補えます。鉄分はビタミンCと一緒にとると吸収が良くなります。",
    },
  ],
  "char-host": [
    {
      match: /ramen|ラーメン|noodle|麺/i,
      en: "Tonight's spotlight is our Shoyu Mushroom Ramen — tap it to add to your cart while we cook!",
      ja: "今夜の注目は醤油きのこラーメン！作っている間にタップしてカートに追加してね。",
    },
    {
      match: /miso|味噌|sauce|ソース/i,
      en: "Our White Koji Miso is the secret here. One spoon, huge umami. It's in the shelf below the stage.",
      ja: "白麹味噌がここでの秘密です。ひとさじで大きなうま味。ステージ下の棚にありますよ。",
    },
  ],
};

function pickScript(characterId: string, message: string, locale: "en" | "ja") {
  const scripts = SCRIPTS[characterId] ?? [];
  const hit = scripts.find((s) => s.match.test(message));
  if (hit) return locale === "ja" ? hit.ja : hit.en;
  const character = characterById(characterId);
  if (character) {
    return locale === "ja" ? character.greeting.ja ?? character.greeting.en : character.greeting.en;
  }
  return locale === "ja"
    ? "（デモAI）その質問には本番環境のAIが詳しくお答えします。"
    : "(Demo AI) A real model would answer that in production.";
}

export const mockAiService: AiService = {
  async chat(req: AiChatRequest): Promise<AiChatResponse> {
    return {
      characterId: req.characterId,
      reply: pickScript(req.characterId, req.message, req.locale),
      mock: true,
    };
  },

  async recommend(req: AiRecommendRequest): Promise<Product[]> {
    let pool = products.slice();
    if (req.region) pool = pool.filter((p) => p.region === req.region);
    if (req.dietary?.length) {
      pool = pool.filter((p) =>
        req.dietary!.every((d) => p.dietary.includes(d)),
      );
    }
    // Rule-based "ranking": featured first, then cheaper items.
    pool.sort((a, b) => {
      if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
      return a.price.jpy - b.price.jpy;
    });
    return pool.slice(0, req.limit ?? 4);
  },

  async verify(req: AiVerifyRequest): Promise<AiVerifyResponse> {
    return {
      subjectId: req.subjectId,
      kind: req.kind,
      verified: true,
      mock: true,
      note: "Mock verification only. Real identity/KYC/age checks are a proposed integration and are NOT active.",
    };
  },

  async personalize(userId: string): Promise<AiPersonalizeResponse> {
    return {
      userId,
      locale: "ja",
      currency: "JPY",
      region: "JP",
      dietary: ["vegan"],
      mock: true,
    };
  },
};
