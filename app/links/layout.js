import '../globals.css';

const siteUrl = "https://marifervl.vercel.app/"; 

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Links — Marifer VL',
  description: 'Portfolio, LinkedIn, GitHub and contact · Frontend, Python, DevOps',
  keywords: [
    'Marifer Villalobos',
    'Portfolio',
    'Frontend Developer',
    'Python Developer',
    'DevOps',
    'Mentor',
    'Talks',
    'Links',
    'Bio',
  ],
  
  alternates: {
    canonical: `${siteUrl}/links`,
  },
  
  openGraph: {
    title: 'Links — Marifer Villalobos',
    description: 'Portfolio, LinkedIn, GitHub and contact · Frontend, Python, DevOps',
    url: `${siteUrl}/links`,
    siteName: 'Marifer Villalobos',
    images: [
      {
        url: '/images/og-links.png', 
        width: 1200,
        height: 630,
        alt: 'Marifer Villalobos - Links',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Links — Marifer Villalobos',
    description: 'Portfolio, LinkedIn, GitHub and contact · Frontend, Python, DevOps',
    images: ['/images/og-links.png'],
  },
  
  icons: {
    icon: [
      {
        url: '/images/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
};

export default function LinksLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}