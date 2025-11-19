import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";


export default function Page() {
    const links: NavProps = [];

    const backLink: string = "/music/bv"
    const header: string = "documentation"
    const descriptions: string[] = [
        "this page is under construction :3 alexei needs to implement that markdown renderer..",
    ]

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}
