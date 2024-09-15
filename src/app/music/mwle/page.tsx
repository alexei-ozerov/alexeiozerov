import * as motion from "framer-motion/client"
import FooterContent from "@/components/footer";
import {Navigation, NavProps} from "@/components/navigation";
import {Header} from "@/components/header";
import {Description} from "@/components/description";

export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/music",
            linkText: "about"
        },
        {
            linkPath: "/music",
            linkText: "audio"
        },
        {
            linkPath: "/music",
            linkText: "documentation"
        }];

    const descriptions: string[] = [
        "an open source large ensemble project with the goal of documenting and making available the process of composing for, organizing, and rehearsing an ensemble consisting of winds, brass, strings and rhythm section",
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
                    <Header linkPath={"/music"} headerText={"many worlds"}/>
                    <Description data={descriptions} size={"max-w-[265px] md:max-w-[400px] xl:pt-5"}/>
                </motion.div>
            </div>
            <FooterContent/>
        </div>
    );
}
