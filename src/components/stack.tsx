import {Header} from "@/components/header";
import {Navigation, NavProps} from "@/components/navigation";
import {Description} from "@/components/description";
import * as motion from "framer-motion/client";
import FooterContent from "@/components/footer";

type StackProps = { links: NavProps, linkPath: string, headerText: string, descriptionTextArray: string[] };

export const Stack = ({
                          links: links,
                          linkPath: path,
                          headerText: text,
                          descriptionTextArray: descriptions
                      }: StackProps) => {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between mx-auto max-w-screen-md">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <div className="max-w-min">
                        <Navigation data={links}/>
                        <Header linkPath={path} headerText={text}/>
                        <Description data={descriptions}/>
                    </div>
                </motion.div>
            </div>
            <FooterContent/>
        </div>
    )
}