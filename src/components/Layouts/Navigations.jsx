import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export const Navigations = () => {

    const navigations = [
        {path: "/", title: "Home"},
        {path: "/skills", title: "Skills"},
        {path: "educations", title: "Educations"},
        {path: "/projects", title: "Projects"},
        {path: "/experiences", title: "Experiences"},
        {path: "/contacts", title: "Contacts"},
    ];

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {navigations.map((content) => {
                        <Link to={ content.path } key={ content.path }>
                        <NavigationMenuLink className={ navigationMenuTriggerStyle() }>{ content.title }</NavigationMenuLink>
                        </Link>
                    })}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};