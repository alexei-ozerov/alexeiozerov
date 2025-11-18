import Link from "next/link";
import localFont from 'next/font/local'

const iosevka = localFont({
  src: [
    {
      path: '../../public/fonts/IosevkaNerdFont-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-iosevka'
})

export type NavProps = { linkPath: string, linkText: string }[]

export const Navigation = ({data}: { data: NavProps }) => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
        const item = <Link className="hover:underline hover:underline-offset-4"
                           href={data[i].linkPath}>{data[i].linkText}</Link>;
        rows.push(item);
    }
    return (
        <div className={`flex flex-row pb-0.5 gap-8 justify-between text-[#8b243b] xl:text-xl description ${iosevka.className}`}>
            {rows}
        </div>
    )
}
