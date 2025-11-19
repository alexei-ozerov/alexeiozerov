import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";


export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/music/bv",
            linkText: "borrowed voices"
        },
        {
            linkPath: "/music/mwle",
            linkText: "many worlds large ensemble"
        }];

    const backLink: string = "/"
    const header: string = "music projects"
    const descriptions: string[] = [
        "small and large ensemble compositional endeavours for a wide range of instruments that bring me joy",
    ]

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>

    );
}
