import Link from "next/link";

import FooterContent from "@/components/footer";
import Animation from "@/components/animation";

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
                <div className="flex flex-row gap-8 justify-between">
                    <Link className="hover:underline hover:underline-offset-4" href="/">about</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">inspiration</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">recordings</Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/">documentation</Link>
                </div>
                <div className="flex flex-col gap-8">
                    <Link className="text-6xl font-bold leading-tight self-center" href="/music">
                        borrowed voices
                    </Link>
                </div>
            </div>
            <Animation />
            <FooterContent />
        </div>

    );
}