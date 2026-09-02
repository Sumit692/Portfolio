import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Kumar Singh — AI Engineer, Full Stack Developer & Software Developer",
  description:
    "Portfolio of Sumit Kumar Singh, an aspiring software engineer from Bangalore building AI systems, full-stack applications, and interactive digital experiences.",
  keywords: [
    "Sumit Kumar Singh",
    "AI Engineer",
    "Software Developer",
    "Bangalore",
    "Full Stack",
    "React",
    "Next.js",
    "Three.js",
    "Machine Learning",
    "Python",
    "Java",
  ],
  authors: [{ name: "Sumit Kumar Singh" }],
  openGraph: {
    title: "Sumit Kumar Singh — AI Engineer & Software Developer",
    description:
      "Portfolio of Sumit Kumar Singh, an aspiring software engineer from Bangalore building AI systems, full-stack applications, and interactive digital experiences.",
    url: "https://sumit-portfolio-phi-eight.vercel.app/",
    siteName: "Sumit Kumar Singh Atelier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Kumar Singh — AI Engineer & Software Developer",
    description:
      "Portfolio of Sumit Kumar Singh, an aspiring software engineer building AI systems, full-stack applications, and interactive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090909] text-[#F5F5F0] antialiased selection:bg-blue-600/30 selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
