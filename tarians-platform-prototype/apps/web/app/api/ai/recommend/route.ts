import { NextResponse } from "next/server";
import { aiService } from "@tarians/ai";
import type { Region } from "@tarians/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const region = (searchParams.get("region") as Region | null) ?? undefined;
  const limit = Number(searchParams.get("limit") ?? "4");
  const locale = searchParams.get("locale") === "ja" ? "ja" : "en";

  const products = await aiService.recommend({ locale, region, limit });
  return NextResponse.json({ products, mock: true });
}
