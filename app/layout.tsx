import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/data/site";
import { Chatbot } from "@/modules/chatbot";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const pageTitle = "AI Systems, Software & Mobile Apps — Kathmandu";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: site.description,
  openGraph: {
    title: pageTitle,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0E16",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  description: site.description,
  url: site.url,
  email: site.email,
  foundingDate: String(site.foundedYear),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  sameAs: [site.social.github, site.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Stamp .js so scroll-reveal styles only hide content when JS runs */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Chatbot site={site} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
