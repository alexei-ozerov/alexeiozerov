import Link from "next/link";

import FooterContent from "@/components/footer";

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
                <div className="flex flex-row gap-8 justify-between flex-wrap">
                    <Link className="hover:underline hover:underline-offset-4" href="/">about</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">recordings</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">documentation</Link>
                </div>
                <div className="flex flex-col gap-8 content-stretch">
                    <Link className="text-6xl font-bold leading-tight self-center object-fill" href="/music">
                        borrowed voices
                    </Link>
                </div>
                <div className="max-w-md">
                    <p className="italic">
                        a small ensemble project focused on mixing acoustic and electronic instruments in a recorded
                        setting
                    </p>
                </div>
            </div>
            <FooterContent/>
        </div>

    );
}