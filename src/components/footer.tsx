import Image from "next/image";

export default function FooterContent() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-[#8b243b]">
            <p>© 2024 alexei ozerov</p>
    <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://github.com/alexei-ozerov/alexeiozerov"
    target="_blank"
    rel="noopener noreferrer"
        >
        <Image
            aria-hidden
    src="https://nextjs.org/icons/window.svg"
    alt="Window icon"
    width={16}
    height={16}
    />
    source
    </a>
    <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="mailto:alexei.ozerov.7@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
        >
        <Image
            aria-hidden
    src="https://nextjs.org/icons/file.svg"
    alt="Window icon"
    width={16}
    height={16}
    />
    contact me
    </a>
    </footer>
)
}

