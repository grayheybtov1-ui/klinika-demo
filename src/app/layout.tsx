import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Meridian Tibb Mərkəzi | Bakıda Dəqiq Diaqnostika və Özəl Tibbi Xidmət",
  description: "Bakıda beynəlxalq standartlara uyğun fəaliyyət göstərən özəl tibb mərkəzi. Terapiya, kardiologiya, nevrologiya, stomatologiya, laboratoriya və ultrasəs müayinəsi.",
  keywords: "klinika baki, meridian tibb merkezi, hekim qebulu baki, kardioloq baki, analiz laboratoriyasi baki, usm muayinesi",
  authors: [{ name: "Meridian Tibb Mərkəzi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
