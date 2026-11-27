import { NextResponse } from "next/server";
import { aiService } from "@tarians/ai";
import type { AiChatRequest } from "@tarians/types";

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<AiChatRequest>;
  if (!body.characterId || typeof body.message !== "string") {
    return NextResponse.json(
      { error: "characterId and message are required" },
      { status: 400 },
    );
  }
  const res = await aiService.chat({
    characterId: body.characterId,
    message: body.message,
    locale: body.locale === "ja" ? "ja" : "en",
  });
  return NextResponse.json(res);
}
