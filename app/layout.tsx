import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Theobroma Bakery | Freshly Baked Happiness", description: "Shop celebration cakes, pastries, breads and bakery favourites." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
