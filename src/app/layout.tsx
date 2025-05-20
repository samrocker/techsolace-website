import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import localFont from 'next/font/local'
import Header from "@/components/core/header";
import { SocialDock } from "@/components/landing-page/social-dock";

const surt = localFont({
  src: './fonts/bitcrusher condensed bd.woff',
  variable: '--font-surt-bold',
})

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
    <html lang="en" className={`${surt.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SocialDock />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}