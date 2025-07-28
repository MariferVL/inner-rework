import { Orbitron, Cabin } from "next/font/google";
import { getDictionary } from "@/lib/get-dictionary";
import { Analytics } from "@vercel/analytics/next";
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
  const lang = params.lang;
  const dictionary = await getDictionary(lang);
  
  const siteUrl = "https://marifervl.vercel.app";

  return {
    // Base URL for metadata
    metadataBase: new URL(siteUrl),
    
    // General Metadata 
    title: dictionary.meta.title, 
    description: dictionary.meta.description, 
    keywords: ['Frontend Developer', 'React Developer', 'Web Accessibility', 'Portfolio', 'María-Fernanda Villalobos'],

    // Open Graph 
    openGraph: {
      title: dictionary.meta.og_title, 
      description: dictionary.meta.og_description, 
      url: siteUrl,
      siteName: dictionary.meta.title, 
      images: [
        {
          url: '/images/logo.gif', 
          alt: dictionary.meta.og_image_alt, 
        },
      ],
      locale: lang === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: dictionary.meta.og_title, 
      description: dictionary.meta.og_description, 
      images: ['/images/logo.gif'], 
    },
    
    // Favicons
    icons: {
      icon: [
        { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },

    // PWA and manifest
    manifest: '/site.webmanifest',
    themeColor: '#914897',
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