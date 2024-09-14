import Link from "next/link";
import * as motion from "framer-motion/client"
import FooterContent from "@/components/footer";
import Animation from "@/components/animation";

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between flex-wrap">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <div className="flex flex-row gap-8 justify-between">
                        <Link className="hover:underline hover:underline-offset-4" href="/music/bv">borrowed
                            voices</Link>
                        <Link className="hover:underline hover:underline-offset-4" href="/music/mwle">many worlds large
                            ensemble</Link>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Link className="text-6xl font-bold leading-tight self-center" href="/">
                            musical projects
                        </Link>
                    </div>
                    <div className="flex flex-wrap max-w-[455px]">
                        <div>
                            <p className="italic text-justify">
                                small and large ensemble compositional endeavours for a wide range of instruments that
                                bring
                                me joy
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    );
}
