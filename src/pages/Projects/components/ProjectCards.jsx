import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const ProjectCards = ({ content }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.projectTitle }</CardTitle>
                <CardDescription>{ content.projectDescription }</CardDescription>
            </CardHeader>
            <CardContent>
                <h3>Project Language</h3>
                <ul>
                    { content.projectLanguage.map((components, index) => (<li key={ index }>{ components }</li>)) }
                </ul>
                <h3>Project Tools</h3>
                <ul>
                    { content.projectTools.map((components, index) => (<li key={ index }>{ components }</li>)) }
                </ul>
            </CardContent>
        </Card>
    );
};
