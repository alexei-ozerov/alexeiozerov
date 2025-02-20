import Link from "next/link";

type HeaderProps = { linkPath: string, headerText: string }

export const Header = ({linkPath: path, headerText: text}: HeaderProps) => {
    return (
        <div className="gap-8 text-center">
            <Link
                className="xl:text-8xl md:text-6xl text-4xl font-bold leading-tight self-center text-[#8b243b] font-[overpass]"
                href={path}>
                {text}
            </Link>
        </div>
    )
}