import { NavLink } from "react-router-dom";
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export const Navigations = () => {

    const navigations = [
        {path: "/", title: "Home"},
        {path: "/skills", title: "Skills"},
        {path: "/educations", title: "Educations"},
        {path: "/projects", title: "Projects"},
        {path: "/experiences", title: "Experiences"},
        {path: "/contacts", title: "Contacts"},
    ];

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {navigations.map(list =>
                        <NavLink to={list.path}>
                            <NavigationMenuList className={ navigationMenuTriggerStyle() }>
                                { list.title }
                            </NavigationMenuList>
                        </NavLink>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};