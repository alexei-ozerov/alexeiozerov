import Link from "next/link";

export type NavProps = { linkPath: string, linkText: string }[]

export const Navigation = ({data}: { data: NavProps }) => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
        const item = <Link className="hover:underline hover:underline-offset-4" href={data[i].linkPath}>{data[i].linkText}</Link>;
        rows.push(item);
    }
    return (
        <div className="flex flex-row gap-8 justify-between text-[#8b243b]">
            {rows}
        </div>
    )
}