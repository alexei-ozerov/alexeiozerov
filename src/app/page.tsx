import Link from "next/link";
import * as motion from "framer-motion/client"
import FooterContent from "@/components/footer";


export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <div className="flex flex-row gap-8 justify-between">
                        <Link className="hover:underline hover:underline-offset-4" href="/">art & photography</Link>
                        <Link className="hover:underline hover:underline-offset-4" href="/music">musical projects</Link>
                        <Link className="hover:underline hover:underline-offset-4"
                              href="https://github.com/alexei-ozerov">code</Link>
                    </div>
                    <div className="flex flex-row gap-8 items-center content-center">
                        <Link className="text-6xl font-bold leading-tight self-center" href="/">
                            alexei ozerov
                        </Link>
                    </div>
                    <div className="flex flex-wrap max-w-[370px]">
                        <div>
                            <p className="italic text-justify pb-5">
                                trumpet player, composer, synth enthusiast, open source supporter, and friend <b>(they /
                                them)</b>
                            </p>
                        </div>
                        <div>
                            <p className="italic text-justify">
                                warning: this website is currently under construction and some menu options are
                                non-functional, proceed at your own risk ;3
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    )
        ;
}
