import Link from "next/link";

import FooterContent from "@/components/footer";

export default function Home() {
  return (
      <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-x-8 gap-y-2 row-start-2 justify-between">
              <div className="flex flex-row gap-8 justify-between">
                  <Link className="hover:underline hover:underline-offset-4" href="/art">art & photography</Link>
                  <Link className="hover:underline hover:underline-offset-4" href="/music">musical projects</Link>
                  <Link className="hover:underline hover:underline-offset-4"
                        href="https://github.com/alexei-ozerov">code</Link>
              </div>
              <div className="flex flex-row gap-8">
                  <Link className="text-6xl font-bold leading-tight self-center" href="/">
                      alexei ozerov
                  </Link>
              </div>
          </div>
          <FooterContent/>

          {/*
            Noise SVG taken from Juxtopposed's codepen project: https://codepen.io/Juxtopposed/pen/BaqLEQY
          */}
          <div className="blob-cont">
              <div className="yellow blob"></div>
              <div className="red blob"></div>
              <div className="green blob"></div>
          </div>
          <svg>
              <filter id='noiseFilter'>
                  <feTurbulence
                      type='fractalNoise'
                      baseFrequency='0.6'
                      stitchTiles='stitch'/>
                  <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>
                  <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
                  <feBlend in="SourceGraphic" in2="monoNoise" mode="screen"/>
              </filter>
          </svg>
      </div>

  );
}
