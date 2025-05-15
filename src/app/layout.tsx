import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Techsolace - Your Dream Our Responsibilityz",
  description:
    "Discover Techsolace, where your dreams meet our commitment. We provide innovative tech solutions tailored to your needs, ensuring excellence and reliability every step of the way. Experience the future with Techsolace - Your Dream, Our Responsibility.",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
