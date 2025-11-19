import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";


export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/art/blender",
            linkText: "blender"
        },
        {
            linkPath: "https://editor.p5js.org/alexei.ozerov.7/full/T_lXtokl8",
            linkText: "math"
        },
        {
            linkPath: "/art/photo",
            linkText: "photos"
        }];

    const backLink: string = "/"
    const header: string = "arts projects"
    const descriptions: string[] = [
        "bits and pieces of art which bring me joy, from 3d rendering, to algorithmic art (p5js), to photography",
    ]

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}
