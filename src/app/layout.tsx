import type {Metadata} from "next";
import {Overpass} from 'next/font/google'
import "./globals.css";

import Animation from "@/components/animation";

const overpass = Overpass({subsets: ['latin']})

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
            //className={overpass.className}
            className={`${overpass.className} h-dvh`}
            //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Animation/>
        {children}
        </body>
        </html>
    );
}
