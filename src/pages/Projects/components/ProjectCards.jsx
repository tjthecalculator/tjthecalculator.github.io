import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const ProjectCards = ({ content }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.title }</CardTitle>
                <CardDescription>{ content.description }</CardDescription>
            </CardHeader>
            <CardContent>
                <h3>Project Language</h3>
                <ul>
                    { content.languages.map(components => { return <li>{ components }</li> }) }
                </ul>
                <h3>Project Tools and/or Frameworks</h3>
                <ul>
                    { content.toolsAndFrameworks.map(components => { return <li>{ components }</li> }) }
                </ul>
            </CardContent>
        </Card>
    );
};
