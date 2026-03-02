import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Учись в Китае по стипендии | MilGEC",
  description:
    "90% наших студентов получают стипендию. MilGEC помогает поступить в 200+ китайских университетов — от подготовки документов до зачисления. Бесплатный расчёт.",
  keywords:
    "учёба в Китае, стипендия в Китае, поступление в китайский университет, образование в Китае, CSC стипендия, гранты Китай",
  openGraph: {
    title: "Учись в Китае по стипендии | MilGEC",
    description:
      "90% наших студентов получают стипендию. Поступите в 200+ китайских университетов с полным сопровождением.",
    url: "https://milgec.com",
    siteName: "MilGEC",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
