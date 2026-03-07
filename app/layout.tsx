import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const fixelText = localFont({
  src: [
    { path: "../public/fonts/FixelText-Regular.woff2", weight: "400" },
    { path: "../public/fonts/FixelText-Medium.woff2", weight: "500" },
    { path: "../public/fonts/FixelText-SemiBold.woff2", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Учись в Китае со стипендией | MilGEC",
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
    title: "Учись в Китае со стипендией | MilGEC",
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
        alt: "MilGEC — Учись в Китае со стипендией",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Учись в Китае со стипендией | MilGEC",
    description:
      "90% наших студентов получают стипендию. 200+ университетов-партнёров.",
    images: ["https://milgec.com/og-image.jpg"],
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
      <body className={`${fixelText.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
