export default function Animation() {
    return (
        <div className="fixed -z-50 top-0 max-h-screen">
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
    )
}

