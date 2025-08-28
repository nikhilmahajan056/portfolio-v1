import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { LoadingAnimation } from "@/components/loading-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilmahajan.dev"),
  title: "Nikhil Mahajan - Software Developer & Blockchain Analyst",
  description: "Portfolio of Nikhil Mahajan, a results-driven Software Developer and Blockchain Analyst with 6+ years of experience in software development and IT consulting.",
  keywords: ["developer", "portfolio", "blockchain", "software development", "full stack", "react", "next.js", "solidity", "ethereum", "web3"],
  authors: [{ name: "Nikhil Mahajan" }],
  openGraph: {
    title: "Nikhil Mahajan - Software Developer & Blockchain Analyst",
    description: "Portfolio of Nikhil Mahajan, a results-driven Software Developer and Blockchain Analyst with 6+ years of experience in software development and IT consulting.",
    url: "https://nikhilmahajan.dev",
    siteName: "Nikhil Mahajan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nikhil Mahajan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Mahajan - Software Developer & Blockchain Analyst",
    description: "Portfolio of Nikhil Mahajan, a results-driven Software Developer and Blockchain Analyst with 6+ years of experience in software development and IT consulting.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingAnimation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
