import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import { Theme } from "@radix-ui/themes";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Commune",
  description: "A cooperative Vintage story community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Theme>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
