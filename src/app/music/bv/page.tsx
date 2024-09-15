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
            linkText: "recordings"
        },
        {
            linkPath: "/music",
            linkText: "documentation"
        }];

    const descriptions: string[] = [
        "a small ensemble project focused on mixing acoustic and electronic instruments in a home recording setting - using what is on hand to create something moving",
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
                    <Header linkPath={"/music"} headerText={"borrowed voices"}/>
                    <Description data={descriptions} size={"max-w-[500px] xl:max-w-[880px]"}/>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    );
}