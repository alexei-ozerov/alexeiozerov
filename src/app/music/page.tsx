import * as motion from "framer-motion/client"

import FooterContent from "@/components/footer";
import {Navigation, NavProps} from "@/components/navigation";
import {Header} from "@/components/header";
import {Description} from "@/components/description";


export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/music/bv",
            linkText: "borrowed voices"
        },
        {
            linkPath: "/music/mwle",
            linkText: "many worlds large ensemble"
        }];

    const descriptions: string[] = [
        "small and large ensemble compositional endeavours for a wide range of instruments that bring me joy",
    ]

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between flex-wrap">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <Navigation data={links}/>
                    <Header linkPath={"/"} headerText={"musical projects"}/>
                    <Description data={descriptions} size={"max-w-[500px]"}/>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    );
}
