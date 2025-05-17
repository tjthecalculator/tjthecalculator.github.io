import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
    return (
        <div>
            <Avatar>
                <AvatarImage src=""/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>TJ the Calculator's Portfolio Website</h1>
        </div>
    );
};