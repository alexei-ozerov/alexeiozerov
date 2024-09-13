import type { Metadata } from "next";
import { Overpass } from 'next/font/google'
import "./globals.css";

const overpass = Overpass({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "alexei ozerov",
  description: "Alexei Ozerov's digital nest for all things creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={overpass.className}
          //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
