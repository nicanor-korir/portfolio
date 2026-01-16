import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://nicanor.me";
const siteName = "Nicanor Korir";
const siteTitle = "Nicanor Korir - AI/Robotics Engineer | CTO & Co-Founder at Alma";
const siteDescription =
  "AI and Robotics Engineer bridging cutting-edge research and production systems. CTO & Co-Founder at Alma building trauma-informed AI. Researching Vision-Language-Action models for robotics. Creating impact from Berlin to Nairobi through intelligent systems in healthcare, education, and agriculture.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A192F" },
    { media: "(prefers-color-scheme: dark)", color: "#0A192F" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Nicanor Korir",
    "AI Engineer",
    "Robotics Engineer",
    "Computer Vision",
    "ROS2",
    "Machine Learning",
    "Deep Learning",
    "Full-Stack Developer",
    "Berlin",
    "Kenya",
    "Nairobi",
    "VLA Models",
    "Vision-Language-Action",
    "CTO",
    "Alma",
    "Trauma-informed AI",
    "Healthcare AI",
    "EdTech",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "PyTorch",
    "TensorFlow",
    "SLAM",
    "Autonomous Systems",
  ],
  authors: [{ name: "Nicanor Korir", url: siteUrl }],
  creator: "Nicanor Korir",
  publisher: "Nicanor Korir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Nicanor Korir - AI/Robotics Engineer working with robotics and computer vision systems",
        type: "image/png",
      },
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Nicanor Korir Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/hero.png"],
    creator: "@nicanor_korir",
    site: "@nicanor_korir",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Portfolio",
  other: {
    "google-site-verification": "",
    "msvalidate.01": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
