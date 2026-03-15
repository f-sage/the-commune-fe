import type { Metadata } from "next";
import "./globals.css";
import "./layout.css"

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
      <body
        className={`antialiased`}
      >
        {children}

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
