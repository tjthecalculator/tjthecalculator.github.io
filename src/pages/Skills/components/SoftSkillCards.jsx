import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SoftSkillCards = ({ content }) => {

    const { skillName } = content;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.skillName }</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    );
};