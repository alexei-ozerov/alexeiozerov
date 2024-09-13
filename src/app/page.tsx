import Link from "next/link";

import FooterContent from "@/components/footer";
import Waveform from "@/components/waveform";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
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
              <div className="rotate-180 opacity-70 self-center">
                  <Waveform/>
              </div>
          </div>
        <FooterContent/>
      </div>

  );
}
