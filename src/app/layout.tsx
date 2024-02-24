import type { Metadata } from "next";
import "./globals.css";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Svkeivan Blog",
  description: "Place for show what is in my head",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition-all duration-300 dark:bg-gray-700">
        <ThemeContextProvider>
          <div className="container px-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
