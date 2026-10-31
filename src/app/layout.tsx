import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://chetanpalta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chetan Palta | AI + Full-Stack Developer",
    template: "%s | Chetan Palta",
  },
  description:
    "Personal digital engineering portfolio of Chetan Palta — an early-career AI + Full-Stack developer based in India, currently Software Development Intern at Shiva Glass Group and BCA student at GNDEC.",
  keywords: [
    "Chetan Palta",
    "AI Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Machine Learning",
    "Shiva Glass Group",
    "GNDEC Ludhiana",
    "Portfolio",
  ],
  authors: [{ name: "Chetan Palta", url: SITE_URL }],
  creator: "Chetan Palta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Chetan Palta | AI + Full-Stack Developer",
    description:
      "Building digital products and exploring intelligent systems. Practical commercial development experience in full-stack engineering and machine learning.",
    siteName: "Chetan Palta Portfolio",
    images: [
      {
        url: "/images/chetan-palta-profile.png",
        width: 480,
        height: 720,
        alt: "Chetan Palta - AI + Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Palta | AI + Full-Stack Developer",
    description:
      "Building digital products and exploring intelligent systems. Software Development Intern at Shiva Glass Group.",
    creator: "@chetanx0007",
    images: ["/images/chetan-palta-profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chetan Palta",
    jobTitle: "Software Development Intern / AI + Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Shiva Glass Group",
      url: "https://shivaglassgroup.com/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Guru Nanak Dev Engineering College, Ludhiana",
    },
    sameAs: [
      "https://github.com/chetan-palta",
      "https://leetcode.com/u/chetanx0007/",
      "https://www.linkedin.com/in/chetan-palta/",
      "https://x.com/chetanx0007",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chetan Palta Portfolio",
    url: SITE_URL,
  };

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-[#08090D] text-[#F5F5F7] antialiased selection:bg-accent-blue/30 selection:text-white font-sans">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
