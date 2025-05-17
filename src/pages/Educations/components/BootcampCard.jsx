import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const BootcampCard = ({ content }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.bootcampName }</CardTitle>
            </CardHeader>
            <CardContent>
                <p>School: { content.bootcampSchool }</p>
                <p>Year: { content.year }</p>
                <p>Content: { content.bootcampDetails }</p>
                <p>Project: { content.project }</p>
            </CardContent>
        </Card>
    );
};