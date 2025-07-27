import { Orbitron, Cabin } from "next/font/google";
import { getDictionary } from "@/lib/get-dictionary";
import { Analytics } from '@vercel/analytics/next';
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import "../globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  display: "swap",
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({ params }) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  };
}

export default async function RootLayout({ children, params }) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className={`${orbitron.variable} ${cabin.variable}`}>
      <body>
        <div className="background"></div>
        <ProgressBar />
        <Header lang={lang} />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
