import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";

export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/music/mwle/about",
            linkText: "about"
        },
        {
            linkPath: "/music/mwle/audio",
            linkText: "audio"
        },
        {
            linkPath: "/music/mwle/documentation",
            linkText: "documentation"
        }];

    const backLink: string = "/music"
    const header: string = "many worlds large \nensemble"
    const descriptions: string[] = [
        "an open source large ensemble project with the goal of documenting and making available the process of composing for, organizing, and rehearsing a group consisting of winds, brass, strings and rhythm section",
    ]

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}
