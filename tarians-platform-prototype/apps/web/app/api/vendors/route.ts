import { NextResponse } from "next/server";
import { vendors } from "@tarians/mock-data";

export async function GET() {
  return NextResponse.json({ vendors, mock: true });
}
