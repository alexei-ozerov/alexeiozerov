type DescriptionProps = { data: string[] }

export const Description = ({data: data}: DescriptionProps) => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
        const item = <div>
            <p className="text-justify pt-5 pb-5">
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
