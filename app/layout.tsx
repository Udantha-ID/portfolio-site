import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./../app/provider";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DevNest — Induru Udantha",
  description: "Software Engineer & SLIIT undergraduate passionate about full-stack development and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /*
     * suppressHydrationWarning is required by next-themes:
     * the `class` attribute is written client-side after hydration,
     * so React would otherwise warn about a server/client mismatch.
     */
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <PageLoader />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
