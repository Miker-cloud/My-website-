import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/AppProvider";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Tarian's — Plant-based · Education · AI",
  description:
    "Investor demo: a global plant-based platform uniting education, AI, and commerce. Japan & Asia first. Mock data only.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>
          <Shell>{children}</Shell>
        </AppProvider>
      </body>
    </html>
  );
}
