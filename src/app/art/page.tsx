import * as motion from "framer-motion/client"

import FooterContent from "@/components/footer";
import {Navigation, NavProps} from "@/components/navigation";
import {Header} from "@/components/header";
import {Description} from "@/components/description";


export default function Page() {
    const links: NavProps = [
        {
            linkPath: "https://www.instagram.com/alexei.ozerov/",
            linkText: "blender"
        },
        {
            linkPath: "https://editor.p5js.org/alexei.ozerov.7/full/T_lXtokl8",
            linkText: "generative"
        },
        {
            linkPath: "/art/photography",
            linkText: "photography"
        }];

    const descriptions: string[] = [
        "bits and pieces of art which bring me joy to get to work on them, from 3d rendering, to math-based drawing, to photography",
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
                    <Header linkPath={"/"} headerText={"arts projects"}/>
                    <Description data={descriptions} size={"max-w-[355px] xl:max-w-[670px]"}/>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    );
}
