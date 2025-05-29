import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import localFont from "next/font/local";
import Header from "@/components/core/header";
import { Footer } from "@/components/core/footer";

const surt = localFont({
  src: "./fonts/bitcrusher condensed bd.woff",
  variable: "--font-surt-bold",
});

export const metadata: Metadata = {
  title: "Techsolace - Your Dream Our Responsibility",
  description:
    "Discover Techsolace, where your dreams meet our commitment. We provide innovative tech solutions tailored to your needs, ensuring excellence and reliability every step of the way. Experience the future with Techsolace - Your Dream, Our Responsibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${surt.variable} relative`}>
      <body
        className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/95 dark:to-background/90"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(67, 81, 167, 0.2) 0%, rgba(2, 8, 23, 0) 30%),
            radial-gradient(ellipse at bottom, rgba(67, 81, 167, 0.2) 0%, rgba(2, 8, 23, 0) 30%)
          `,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
