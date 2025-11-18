import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";


export default function Page() {
    const links: NavProps = [
        // {
        //     linkPath: "/art",
        //     linkText: "blender"
        // },
        // {
        //     linkPath: "https://editor.p5js.org/alexei.ozerov.7/full/T_lXtokl8",
        //     linkText: "math"
        // },
        // {
        //     linkPath: "/art",
        //     linkText: "photo"
        // }
    ];

    const backLink: string = "/art"
    const header: string = "blender 3d"
    const descriptions: string[] = [
        "this page is under construction :3",
    ]

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>
    );
}
