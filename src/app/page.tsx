import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";

export default function Home() {
    const links: NavProps = [
        {
            linkPath: "/art",
            linkText: "arts"
        },
        {
            linkPath: "/music",
            linkText: "music"
        },
        {
            linkPath: "https://github.com/alexei-ozerov",
            linkText: "code"
        }];

    const descriptions: string[] = [
        "(she / her) · trumpet player, composer, synthesizer enthusiast, open source developer, rustacean, friend ",
    ]

    const header: string = "alexei ozerov"

    const backLink: string = "/"

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}
