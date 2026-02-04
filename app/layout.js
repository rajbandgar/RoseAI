import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProviderWrapper } from "./theme-wrapper";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

// Font optimization with subset and display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: {
    default: "RoseAI - Your AI Career Coach for Professional Success",
    template: "%s | RoseAI"
  },
  description: "Advance your career with personalized AI coaching, resume optimization, interview preparation, and industry insights. Get ATS-optimized resumes and expert career guidance.",
  keywords: ["AI career coach", "resume builder", "interview preparation", "career guidance", "professional development", "ATS optimization"],
  authors: [{ name: "RoseAI Team" }],
  creator: "RoseAI",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://roseai.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "RoseAI - Your AI Career Coach",
    description: "Advance your career with personalized AI coaching and insights",
    siteName: "RoseAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoseAI - Your AI Career Coach",
    description: "Advance your career with personalized AI coaching and insights",
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="//randomuser.me" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProviderWrapper>
            <Header/>
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with ♥ by Rajjj</p>
              </div>
            </footer>
          </ThemeProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
