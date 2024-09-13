import Link from "next/link";

import FooterContent from "@/components/footer";

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
                <div className="flex flex-row gap-8 justify-between flex-wrap">
                    <Link className="hover:underline hover:underline-offset-4" href="/">compositions</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">recordings</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">documentation</Link>
                </div>
                <div className="flex flex-col gap-8">
                    <Link className="font-bold leading-tight text-center self-center" href="/music">
                        <h1 className="text-6xl">
                            many worlds
                        </h1>
                        <h2 className="text-6xl tracking-tight text-justify">
                            large ensemble
                        </h2>
                    </Link>
                    <div className="flex flex-wrap text-justify content-center self-center max-w-sm">
                        <div>
                            <p className="italic">
                                an open source initiative with the goal of documenting and making available the
                                process
                                of composing for, organizing, rehearsing an ensemble consisting of winds, brass, strings
                                and rhythm section
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContent/>

        </div>

    );
}
