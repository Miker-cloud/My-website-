import type { Course } from "@tarians/types";

export const courses: Course[] = [
  {
    id: "c-basics",
    slug: "plant-based-basics",
    title: { en: "Plant-Based Basics", ja: "プラントベースの基本" },
    summary: {
      en: "Start here: what plant-based eating is, and how to build a balanced plate.",
      ja: "まずはここから。プラントベースとは何か、バランスの良い一皿の作り方。",
    },
    level: "beginner",
    lessons: [
      {
        id: "l-1",
        title: { en: "What does plant-based mean?", ja: "プラントベースとは？" },
        body: {
          en: "Plant-based eating centers meals on vegetables, legumes, grains, nuts and seeds. It is a spectrum, not an all-or-nothing rule.",
          ja: "プラントベースの食事は、野菜、豆類、穀物、ナッツ、種子を中心にします。ゼロか百かではなく、幅のある考え方です。",
        },
        durationMin: 6,
      },
      {
        id: "l-2",
        title: { en: "Protein without meat", ja: "肉なしのたんぱく質" },
        body: {
          en: "Legumes, tofu, tempeh, and whole grains together provide complete protein across a day.",
          ja: "豆類、豆腐、テンペ、全粒穀物を一日を通して組み合わせると、完全なたんぱく質になります。",
        },
        durationMin: 8,
      },
    ],
  },
  {
    id: "c-japan",
    slug: "washoku-plant-based",
    title: { en: "Plant-Based Washoku", ja: "植物性の和食" },
    summary: {
      en: "Traditional Japanese cooking is naturally plant-forward. Learn the building blocks.",
      ja: "伝統的な和食はもともと植物中心。その基本を学びます。",
    },
    level: "intermediate",
    lessons: [
      {
        id: "l-3",
        title: { en: "Dashi without fish", ja: "魚を使わない出汁" },
        body: {
          en: "Kombu and dried shiitake make a deep umami dashi — the base of countless dishes.",
          ja: "昆布と干し椎茸で深いうま味の出汁ができます。数々の料理の土台です。",
        },
        durationMin: 7,
      },
    ],
  },
];

export const courseBySlug = (slug: string) =>
  courses.find((c) => c.slug === slug);
