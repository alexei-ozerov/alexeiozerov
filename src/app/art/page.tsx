import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";


export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/art",
            linkText: "blender"
        },
        {
            linkPath: "https://editor.p5js.org/alexei.ozerov.7/full/T_lXtokl8",
            linkText: "math"
        },
        {
            linkPath: "/art",
            linkText: "photography"
        }];

    const descriptions: string[] = [
        "bits and pieces of art which bring me joy to get to work on them, from 3d rendering, to math-based drawing, to photography - warning: two of the links are currently under construction and non-operational",
    ]

    const header: string = "arts projects"

    const backLink: string = "/"

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}
