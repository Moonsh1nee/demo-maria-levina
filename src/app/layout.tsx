import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const description =
  "Демо-сайт личного специалиста: семейный психолог, Волгоград и онлайн. Организация и специалист вымышлены. Демо студии Akimov Web.";

export const metadata: Metadata = {
  title: { default: "Мария Левина — семейный психолог (демо)", template: "%s · Мария Левина (демо)" },
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title: "Мария Левина — семейный психолог (демо)",
    description,
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = { themeColor: "#24402f", viewportFit: "cover" };

const themeScript = `try{var t=localStorage.getItem("levina-theme");if(t){document.documentElement.dataset.theme=JSON.parse(t)}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="demo-note">Демонстрационный сайт: специалист, отзывы и цены вымышлены</div>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <Reveal />
      </body>
    </html>
  );
}
