import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProjectCards = ({ content }) => {

    const { title, description, languages, toolsAndFrameworks } = content;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ title }</CardTitle>
                <CardDescription>{ description }</CardDescription>
            </CardHeader>
            <CardContent>
                <h3>Project Language</h3>
                { languages.map(list => <Badge>{ list }</Badge>) }
                <h3>Project Tools and/or Frameworks</h3>
                { toolsAndFrameworks.map(list => <Badge>{ list }</Badge>) }
            </CardContent>
        </Card>
    );
};
