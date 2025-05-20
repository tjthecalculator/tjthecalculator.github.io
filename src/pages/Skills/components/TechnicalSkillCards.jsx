import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TechnicalSkillCards = ({ content }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.programingLanguage }</CardTitle>
            </CardHeader>
            <CardContent>
                <h3>Experiences:</h3>
                <p>{ content.experiences } Year(s)</p>
                <h3>Tools:</h3>
                <ul>
                    { content.tools.map((components) => (<li>{ components }</li>)) }
                </ul>
            </CardContent>
        </Card>
    );
};