import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const SoftSkillCards = ({ content }) => {
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