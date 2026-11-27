"use client";

import { useState } from "react";
import { courses, characterById } from "@tarians/mock-data";
import { useApp } from "@/components/AppProvider";
import { ui, t } from "@/lib/i18n";
import { CharacterChat } from "@/components/CharacterChat";

export default function EducationPage() {
  const { locale } = useApp();
  const [activeCourse, setActiveCourse] = useState(courses[0]);
  const tutor = characterById("char-tutor")!;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{ui("nav.education", locale)}</h1>
        <p className="text-sm text-tarian-900/60">
          {locale === "ja"
            ? "AIチューターと学ぶプラントベースの知識。"
            : "Learn plant-based skills with an AI tutor."}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCourse(c)}
                className={`rounded-full px-3 py-1 text-sm ${
                  activeCourse.id === c.id
                    ? "bg-tarian-600 text-white"
                    : "bg-white text-tarian-700 ring-1 ring-tarian-100"
                }`}
              >
                {t(c.title, locale)}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-tarian-100 bg-white p-5">
            <div className="mb-1 flex items-center gap-2">
              <h2 className="text-lg font-semibold">
                {t(activeCourse.title, locale)}
              </h2>
              <span className="rounded bg-tarian-50 px-2 py-0.5 text-xs text-tarian-700">
                {activeCourse.level}
              </span>
            </div>
            <p className="mb-4 text-sm text-tarian-900/60">
              {t(activeCourse.summary, locale)}
            </p>
            <ol className="space-y-3">
              {activeCourse.lessons.map((lesson, i) => (
                <li key={lesson.id} className="rounded border border-tarian-100 p-3">
                  <p className="text-sm font-medium">
                    {i + 1}. {t(lesson.title, locale)}{" "}
                    <span className="text-xs text-tarian-900/50">
                      · {lesson.durationMin}
                      {locale === "ja" ? "分" : " min"}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-tarian-900/70">
                    {t(lesson.body, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div>
          <CharacterChat character={tutor} />
        </div>
      </div>
    </div>
  );
}
