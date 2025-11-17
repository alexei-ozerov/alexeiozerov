import type {Metadata} from "next";

import "./globals.css";
import Animation from "@/components/animation";

export const metadata: Metadata = {
    title: "alexei ozerov",
    description: "Alexei's digital nest for all things creative.",
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
            className={`h-dvh`}
            //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Animation/>
        {children}
        </body>
        </html>
    );
}
