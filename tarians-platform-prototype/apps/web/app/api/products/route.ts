import { NextResponse } from "next/server";
import { products } from "@tarians/mock-data";
import type { Region } from "@tarians/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const region = searchParams.get("region") as Region | null;
  const category = searchParams.get("category");
  const dietary = searchParams.get("dietary");

  let result = products.slice();
  if (region) result = result.filter((p) => p.region === region);
  if (category) result = result.filter((p) => p.category === category);
  if (dietary)
    result = result.filter((p) => p.dietary.includes(dietary as never));

  return NextResponse.json({ products: result, mock: true });
}
