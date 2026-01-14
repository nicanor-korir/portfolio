import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nicanor Korir - AI/Robotics Engineer | CTO at Alma",
  description:
    "AI and Robotics Engineer bridging research and production. Building trauma-informed AI at Alma, researching VLA models, creating impact from Berlin to Nairobi.",
  keywords: [
    "AI Engineer",
    "Robotics Engineer",
    "Computer Vision",
    "ROS2",
    "Machine Learning",
    "Full-Stack Developer",
    "Berlin",
    "Kenya",
    "VLA Models",
  ],
  authors: [{ name: "Nicanor Korir" }],
  openGraph: {
    title: "Nicanor Korir - AI/Robotics Engineer",
    description: "Building intelligent systems that matter",
    url: "https://nicanor.me",
    siteName: "Nicanor Korir",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicanor Korir - AI/Robotics Engineer",
    description: "Building intelligent systems that matter",
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
