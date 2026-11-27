import { NextResponse } from "next/server";
import { meals } from "@tarians/mock-data";

export async function GET() {
  return NextResponse.json({ meals, mock: true });
}
