import * as motion from "framer-motion/client"

import FooterContent from "@/components/footer";
import {Header} from "@/components/header";
import {Navigation, NavProps} from "@/components/navigation";
import {Description} from "@/components/description";

export default function Home() {
    const links: NavProps = [
        {
            linkPath: "/art",
            linkText: "art & photography"
        },
        {
            linkPath: "/music",
            linkText: "musical projects"
        },
        {
            linkPath: "https://github.com/alexei-ozerov",
            linkText: "code"
        }];

    const descriptions: string[] = [
        "(they / them) · trumpet player, composer, synthesizer enthusiast, open source developer, rustacean, friend ",
    ]

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <Navigation data={links}/>
                    <Header linkPath={"/"} headerText={"alexei ozerov"}/>
                    <Description data={descriptions} size={"md:max-w-[390px] xl:max-w-[700px]"}/>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    );
}
