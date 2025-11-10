// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Michael Antoni",
  // viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon-v2.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-v2.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-v2.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-v2.png",
    apple: "/favicon-v2.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Toggle no-js -> js BEFORE React hydrates */}
        <Script id="toggle-js" strategy="beforeInteractive">
          {`
            document.documentElement.className = document.documentElement.className.replace('no-js','js');
          `}
        </Script>

        {/* CSS */}
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body id="top" className="no-js">
        {/* Preloader */}
        <Preloader />

        {/* Page wrapper */}
        <div id="page" className="s-pagewrap">
          {/* Main content */}
          {children}
        </div>
        {/* end of page wrapper */}

        {/* JS Scripts */}

        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        {/* <Script src="/js/particles.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/particles-init.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
