import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
    return (
        <div>
            <Avatar>
                <AvatarImage src=""/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>TJ the Calculator's Portfolio Website</h1>
            <ModeToggle />
        </div>
    );
};