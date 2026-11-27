"use client";

import { useState } from "react";
import { useApp } from "./AppProvider";
import { ui, t } from "@/lib/i18n";
import { DemoBadge } from "./DemoBadge";
import type { AiCharacter } from "@tarians/types";

interface Msg {
  from: "user" | "ai";
  text: string;
}

export function CharacterChat({ character }: { character: AiCharacter }) {
  const { locale } = useApp();
  const [messages, setMessages] = useState<Msg[]>([
    { from: "ai", text: t(character.greeting, locale) },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          characterId: character.id,
          message: text,
          locale,
        }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { from: "ai", text: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { from: "ai", text: "(demo) connection error" },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col rounded-lg border border-tarian-100 bg-white">
      <div className="flex items-center gap-3 border-b border-tarian-100 p-3">
        <span className="text-2xl" aria-hidden>
          {character.avatarEmoji}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">{t(character.name, locale)}</p>
          <p className="text-xs text-tarian-900/60">{t(character.role, locale)}</p>
        </div>
        <DemoBadge label={ui("ai.demoBadge", locale)} />
      </div>

      <div className="flex max-h-72 min-h-40 flex-col gap-2 overflow-y-auto p-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
              m.from === "user"
                ? "self-end bg-tarian-600 text-white"
                : "self-start bg-tarian-50 text-tarian-900"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-tarian-100 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={ui("ai.placeholder", locale)}
          className="flex-1 rounded border border-tarian-100 px-3 py-2 text-sm"
        />
        <button
          onClick={send}
          disabled={busy}
          className="rounded bg-tarian-600 px-4 py-2 text-sm font-medium text-white hover:bg-tarian-700 disabled:opacity-40"
        >
          {ui("ai.ask", locale)}
        </button>
      </div>
    </div>
  );
}
