import Link from "next/link";

import { Overpass } from 'next/font/google';

const hanken = Overpass({
    subsets: ['latin'],
    display: 'swap', // optional: avoids invisible text while loading
    variable: '--font-hanken-grotesk', // Define a CSS variable name
});

type HeaderProps = { linkPath: string, headerText: string }

export const Header = ({linkPath: path, headerText: text}: HeaderProps) => {
    const newText = text.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return (
        <div className="gap-8 text-center">
            <Link
                className={`text-nowrap xl:text-8xl md:text-6xl text-4xl font-bold leading-tight self-center text-[#8b243b] ${hanken.className}`}
                href={path}>
                {newText}
            </Link>
        </div>
    )
}
