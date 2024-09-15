import Link from "next/link";

type HeaderProps = { linkPath: string, headerText: string }

export const Header = ({ linkPath: path, headerText: text }: HeaderProps) => {
    return (
        <div className="flex flex-row gap-8 items-center content-center">
            <Link className="xl:text-9xl md:text-7xl font-bold leading-tight self-center text-[#8b243b] font-[overpass]" href={path}>
                {text}
            </Link>
        </div>
    )
}