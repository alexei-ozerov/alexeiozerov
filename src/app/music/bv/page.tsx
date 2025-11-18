import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";

export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/music",
            linkText: "about"
        },
        {
            linkPath: "/music",
            linkText: "audio"
        },
        {
            linkPath: "/music",
            linkText: "documentation"
        }];

    const backLink: string = "/music"
    const header: string = "borrowed voices"
    const descriptions: string[] = [
        "a small ensemble project focused on mixing acoustic and electronic instruments in a home recording setting - trying to use what is on hand to create something moving",
    ]

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}