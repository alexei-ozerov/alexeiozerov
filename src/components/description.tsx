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
type DescriptionProps = { data: string[] }

export const Description = ({data: data}: DescriptionProps) => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
        const item = <div>
            <p className={`text-justify pt-5 pb-5 ${iosevka.className}`}>
                {data[i]}
            </p>
        </div>;
        rows.push(item);
    }

    return (
        <div className={`flex flex-wrap text-[#f4edf0] xl:text-xl`}>
            {rows}
        </div>
    )
}
