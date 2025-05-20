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
                    <NavLink to="/">
                        <NavigationMenuList className={ navigationMenuTriggerStyle() }>Home</NavigationMenuList>
                    </NavLink>
                    <NavLink to="/skills">
                        <NavigationMenuList className={ navigationMenuTriggerStyle() }>Skills</NavigationMenuList>
                    </NavLink>
                    <NavLink to="/educations">
                        <NavigationMenuList className={ navigationMenuTriggerStyle() }>Educations</NavigationMenuList>
                    </NavLink>
                    <NavLink to="/projects">
                        <NavigationMenuList className={ navigationMenuTriggerStyle() }>Projects</NavigationMenuList>
                    </NavLink>
                    <NavLink to="/experiences">
                        <NavigationMenuList className={ navigationMenuTriggerStyle() }>Experiences</NavigationMenuList>
                    </NavLink>
                    <NavLink to="/contacts">
                        <NavigationMenuList className={ navigationMenuTriggerStyle() }>Contacts</NavigationMenuList>
                    </NavLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};