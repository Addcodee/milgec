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
    "учёба в Китае, стипендия в Китае, поступление в китайский университет, образование в Китае, CSC стипендия, гранты Китай, учиться в Китае, китайские университеты, стипендия правительства Китая, study in China",
  authors: [{ name: "MilGEC - Millennium Gateway Education China" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://milgec.com",
  },
  openGraph: {
    title: "Учись в Китае по стипендии | MilGEC",
    description:
      "90% наших студентов получают стипендию. Поступите в 200+ китайских университетов с полным сопровождением — от документов до зачисления.",
    url: "https://milgec.com",
    siteName: "MilGEC",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://milgec.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MilGEC — Учись в Китае по стипендии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Учись в Китае по стипендии | MilGEC",
    description:
      "90% наших студентов получают стипендию. 200+ университетов-партнёров.",
    images: ["https://milgec.com/og-image.jpg"],
  },
  other: {
    "google-site-verification": "VERIFICATION_CODE_HERE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MilGEC - Millennium Gateway Education China",
  url: "https://milgec.com",
  logo: "https://milgec.com/logo.png",
  description:
    "Образовательное агентство, помогающее иностранным студентам учиться в Китае. 200+ университетов-партнёров, 6000+ студентов с 2020 года.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Qingdao",
    addressCountry: "CN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+86-13792888176",
      contactType: "admissions",
      email: "admission@milgec.com",
      availableLanguage: ["Russian", "English", "Chinese", "Indonesian", "Arabic"],
    },
  ],
  sameAs: ["https://milgec.com", "https://milgec.co.id"],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
