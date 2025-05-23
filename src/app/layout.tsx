import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import localFont from "next/font/local";
import Header from "@/components/core/header";
import { SocialDock } from "@/components/landing-page/social-dock";
import { Footer } from "@/components/core/footer";

const surt = localFont({
  src: "./fonts/bitcrusher condensed bd.woff",
  variable: "--font-surt-bold",
});

export const metadata: Metadata = {
  title: "Frontend Template",
  description: "Frontend Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${surt.variable} relative`}>
      <body className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/95 dark:to-background/90">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SocialDock />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
