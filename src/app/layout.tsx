import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
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
        <Navbar />
        <main>{children}</main>
        <footer>
          <hr />
          <ul>
            <li>
              Maintained by <em>TheButterMan</em>
            </li>
            <li>2026</li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
