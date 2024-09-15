type DescriptionProps = { data: string[], size: string }

export const Description = ({ data: data, size: size }: DescriptionProps) => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
        const item = <div>
            <p className="italic text-justify pt-5 pb-5">
                {data[i]}
            </p>
        </div>;
        rows.push(item);
    }
    return (
        <div className={`flex flex-wrap text-[#f4edf0] ${size} xl:text-xl xl:max-w-[700px]`}>
            {rows}
        </div>
    )
}