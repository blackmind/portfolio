import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Priyank's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>
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
