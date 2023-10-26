import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Rolex - Socialpulse",
  description: "Social networking site where users broadcast short posts known",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
