import Link from "next/link";
import * as motion from "framer-motion/client"
import FooterContent from "@/components/footer";

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
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
                        </Link>
                        <div className="flex flex-wrap max-w-[350px]">
                            <p className="italic text-justify">
                                an open source large ensemble project with the goal of documenting and making available
                                the
                                process of composing for, organizing, and rehearsing an ensemble consisting of winds,
                                brass,
                                strings and rhythm section
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <FooterContent/>
        </div>
    );
}
