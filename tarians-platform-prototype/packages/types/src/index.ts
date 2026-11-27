// @tarians/types — shared domain contracts for the Tarian's platform.
// These interfaces form the seam between the UI, the internal API, and the
// (currently mocked) domain/AI layers. Keeping them here lets mock adapters be
// swapped for real services later without touching callers.

export type Locale = "en" | "ja";
export type Currency = "JPY" | "USD";
export type Region = "JP" | "APAC" | "GLOBAL";

export type DietaryTag =
  | "vegan"
  | "vegetarian"
  | "gluten-free"
  | "soy-free"
  | "nut-free"
  | "organic";

export type ProductCategory =
  | "pantry"
  | "fresh"
  | "snacks"
  | "beverages"
  | "supplements"
  | "meal-kit";

/** A localized string: at minimum English, optionally Japanese. */
export interface LocalizedText {
  en: string;
  ja?: string;
}

export interface Price {
  /** Base amount in JPY (Japan-first). USD is derived for display. */
  jpy: number;
  usd: number;
}

export interface Vendor {
  id: string;
  slug: string;
  name: LocalizedText;
  story: LocalizedText;
  region: Region;
  logoEmoji: string; // lightweight stand-in for a logo asset in the prototype
  verified: boolean;
}

export interface Product {
  id: string;
  vendorId: string;
  name: LocalizedText;
  description: LocalizedText;
  category: ProductCategory;
  region: Region;
  price: Price;
  dietary: DietaryTag[];
  imageEmoji: string;
  featured?: boolean;
}

export interface KitchenMeal {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: Price;
  region: Region;
  /** Preparation lead time in minutes. */
  leadTimeMin: number;
  dietary: DietaryTag[];
  imageEmoji: string;
}

export interface Lesson {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  durationMin: number;
}

export interface Course {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  level: "beginner" | "intermediate" | "advanced";
  lessons: Lesson[];
}

/** A conversational AI character (Education tutor, LIVE host, etc.). */
export interface AiCharacter {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  avatarEmoji: string;
  /** Scripted knowledge for the prototype; replaced by an LLM later. */
  greeting: LocalizedText;
}

export interface CartItem {
  refId: string;
  kind: "product" | "meal";
  name: LocalizedText;
  price: Price;
  qty: number;
}

// ---- AlphaDataCenter.ai service contract ----------------------------------
// One interface, four capabilities. The prototype binds a mock adapter; a real
// adapter (LLM, KYC, ranking, profile) is a drop-in replacement later.

export interface AiChatRequest {
  characterId: string;
  message: string;
  locale: Locale;
}
export interface AiChatResponse {
  characterId: string;
  reply: string;
  /** True when produced by the scripted mock rather than a real model. */
  mock: true;
}

export interface AiRecommendRequest {
  locale: Locale;
  region?: Region;
  dietary?: DietaryTag[];
  limit?: number;
}

export interface AiVerifyRequest {
  subjectId: string;
  kind: "identity" | "age" | "vendor";
}
export interface AiVerifyResponse {
  subjectId: string;
  kind: "identity" | "age" | "vendor";
  verified: boolean;
  mock: true;
  note: string;
}

export interface AiPersonalizeResponse {
  userId: string;
  locale: Locale;
  currency: Currency;
  region: Region;
  dietary: DietaryTag[];
  mock: true;
}

export interface AiService {
  chat(req: AiChatRequest): Promise<AiChatResponse>;
  recommend(req: AiRecommendRequest): Promise<Product[]>;
  verify(req: AiVerifyRequest): Promise<AiVerifyResponse>;
  personalize(userId: string): Promise<AiPersonalizeResponse>;
}
