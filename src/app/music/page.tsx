import {NavProps} from "@/components/navigation";
import {Stack} from "@/components/stack";


export default function Page() {
    const links: NavProps = [
        {
            linkPath: "/music",
            linkText: "borrowed voices"
        },
        {
            linkPath: "/music",
            linkText: "many worlds large ensemble"
        }];

    const descriptions: string[] = [
        "small and large ensemble compositional endeavours for a wide range of instruments that bring me joy - warning: the two links are currently under construction and non-operational",
    ]

    const header: string = "musical projects"

    const backLink: string = "/"

    return (
        <Stack linkPath={backLink} headerText={header} descriptionTextArray={descriptions}
               links={links}/>

    );
}
