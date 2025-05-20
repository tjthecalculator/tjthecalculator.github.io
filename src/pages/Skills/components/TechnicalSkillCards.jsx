import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TechnicalSkillCards = ({ content }) => {

    const { programingLanguage, tools, experiences } = content;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ programingLanguage }</CardTitle>
            </CardHeader>
            <CardContent>
                <h3>Experiences: { experiences } Year(s)</h3>
                <h3>Tools and/or Frameworks:</h3>
                { tools.map(list => <Badge>{ list }</Badge>) }
            </CardContent>
        </Card>
    );
};