import Link from "next/link";
import { Hanken_Grotesk } from 'next/font/google';

const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    display: 'swap', // optional: avoids invisible text while loading
    variable: '--font-hanken-grotesk', // Define a CSS variable name
});

type HeaderProps = { linkPath: string, headerText: string }

export const Header = ({linkPath: path, headerText: text}: HeaderProps) => {
    return (
        <div className="gap-8 text-center">
            <Link
                className={`text-nowrap xl:text-9xl md:text-6xl text-4xl font-bold leading-tight self-center text-[#8b243b] ${hanken.className}`}
                href={path}>
                {text}
            </Link>
        </div>
    )
}
