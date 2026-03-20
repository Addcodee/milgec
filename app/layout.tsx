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
  metadataBase: new URL("https://milgec.kz"),
  title: {
    default: "Учись в Китае со стипендией | MilGEC",
    template: "%s | MilGEC",
  },
  description:
    "90% наших студентов получают стипендию. MilGEC помогает поступить в 200+ китайских университетов — от подготовки документов до зачисления. Бесплатный расчёт.",
  keywords:
    "учёба в Китае, стипендия в Китае, поступление в китайский университет, образование в Китае, CSC стипендия, гранты Китай, учиться в Китае, китайские университеты, стипендия правительства Китая, study in China",
  authors: [{ name: "MilGEC - Millennium Gateway Education China" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Учись в Китае со стипендией | MilGEC",
    description:
      "90% наших студентов получают стипендию. Поступите в 200+ китайских университетов с полным сопровождением — от документов до зачисления.",
    url: "/",
    siteName: "MilGEC",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MilGEC — Учись в Китае со стипендией" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Учись в Китае со стипендией | MilGEC",
    description:
      "90% наших студентов получают стипендию. 200+ университетов-партнёров.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MilGEC - Millennium Gateway Education China",
  url: "https://milgec.kz",
  logo: "https://milgec.kz/logo.png",
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
      telephone: "+7-708-982-6615",
      contactType: "admissions",
      email: "milgec.kz@mail.ru",
      availableLanguage: ["Russian", "English", "Chinese", "Indonesian", "Arabic"],
    },
  ],
  sameAs: [
    "https://instagram.com/milgec.kz",
    "https://wa.me/77089826615",
  ],
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
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1415557556474584');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1415557556474584&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${fixelText.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
