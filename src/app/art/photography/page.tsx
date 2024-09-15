'use client'

import Image from 'next/image'

import * as motion from "framer-motion/client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import FooterContent from "@/components/footer";
import {Header} from "@/components/header";
import {Description} from "@/components/description";


export default function Page() {
    const descriptions: string[] = [
        "i have found so much joy in bringing my cameras with me to family trips, walks, and gigs through the years and documenting my life - swipe through this photo gallery to view some of those snapshots",
    ]

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
    })

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between flex-wrap">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <Header linkPath={"/art"} headerText={"photography"}/>
                    <Description data={descriptions} size={"max-w-[259px] md:max-w-[390px] xl:max-w-[690px] xl:pt-5"}/>
                    <div ref={ref} className="flex flex-row keen-slider max-w-[259px] md:max-w-[390px] xl:max-w-[700px] self-center content-center items-center justify-items-center">
                        <div className="keen-slider__slide number-slide1 self-center content-center items-center">
                            <Image
                                src="/DSCF9511.jpg"
                                width={700}
                                height={518}
                                alt="A photograph taken of a shrub at the humber arboretum"
                                className="border-[10px] border-[#f4edf0]"
                            />
                            <p className="italics self-center text-center pt-5">humber arboretum / fujifilm xt-5 / 2024</p>
                        </div>
                        <div className="keen-slider__slide number-slide2 self-center content-center items-center">
                            <Image
                                src="/DSCF9508.jpg"
                                width={700}
                                height={518}
                                alt="A photograph taken of a flower surrounded by lily pads at the humber arboretum"
                                className="border-[10px] border-[#f4edf0]"
                            />
                            <p className="italics self-center text-center pt-5">humber arboretum / fujifilm xt-5 / 2024</p>
                        </div>
                        <div className="keen-slider__slide number-slide3 self-center content-center items-center">
                            <Image
                                src="/DSCF9485.jpg"
                                width={700}
                                height={518}
                                alt="A photograph taken of a set of benches and a blue-green structure at the humber arboretum"
                                className="border-[10px] border-[#f4edf0]"
                            />
                            <p className="italics self-center text-center pt-5">humber arboretum / fujifilm xt-5 / 2024</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <FooterContent/>
        </div>

    );
}
