import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TechnicalSkillCards = ({ content }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.programingLanguage }</CardTitle>
            </CardHeader>
            <CardContent>
                <h3>Experiences: { content.experiences } Year(s)</h3>
                <h3>Tools:</h3>
                <ul>
                    { content.tools.map(components => { return <li>{ components }</li>}) }
                </ul>
            </CardContent>
        </Card>
    );
};