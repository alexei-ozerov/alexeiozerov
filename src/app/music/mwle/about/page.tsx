import Link from "next/link";

import FooterContent from "@/components/footer";

export default function Page() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between w-1/2">

                <div className="flex flex-col gap-8">
                    <Link className="text-6xl font-bold leading-tight text-center self-center" href="/music">
                        many worlds
                        <br/>
                        large ensemble
                    </Link>

                    <div className="flex flex-wrap text-justify content-center self-center">
                        <div>
                            <h2 className="text-xl font-bold leading-tight pt-10 pb-5">
                                about
                            </h2>
                            <p className="pb-5">
                                an open source initiative with the goal of documenting and making available the
                                process
                                of composing for, organizing, rehearsing the ensemble.
                            </p>
                            <p>
                                written for four winds, three trumpets, trombone, bass trombone, string quartet, and
                                rhythm section, the music aims to mix these timbres to tell stories encoded in song.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold leading-tight pt-10 pb-5">
                                inspiration
                            </h2>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id erat ac massa
                                eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Aliquam pretium feugiat vehicula. Donec imperdiet est quis
                                porta vestibulum. Nullam id dui elit. Praesent eu rhoncus turpis, sed mollis quam.
                                Pellentesque in pellentesque tellus, at interdum leo.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold leading-tight pt-10 pb-5">
                                journey home
                            </h2>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id erat ac massa
                                eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Aliquam pretium feugiat vehicula. Donec imperdiet est quis
                                porta vestibulum. Nullam id dui elit. Praesent eu rhoncus turpis, sed mollis quam.
                                Pellentesque in pellentesque tellus, at interdum leo.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold leading-tight pt-10 pb-5">
                                documentation
                            </h2>
                            <p className="pb-5">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id erat ac massa
                                eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Aliquam pretium feugiat vehicula. Donec imperdiet est quis
                                porta vestibulum. Nullam id dui elit. Praesent eu rhoncus turpis, sed mollis quam.
                                Pellentesque in pellentesque tellus, at interdum leo.
                            </p>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id erat ac massa
                                eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Aliquam pretium feugiat vehicula. Donec imperdiet est quis
                                porta vestibulum. Nullam id dui elit. Praesent eu rhoncus turpis, sed mollis quam.
                                Pellentesque in pellentesque tellus, at interdum leo.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <FooterContent/>

        </div>

    );
}
