import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export const DegreeCard = ({ content }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ content.degreeName }</CardTitle>
                <CardDescription>{ content.field }</CardDescription>
            </CardHeader>
            <CardContent>
                <p>University: { content.university }</p>
                <p>Year: { content.year } </p>
                <p>Project/Thesis: { content.project }</p>
                <p>Extra Courses: { content.extraCourses } </p>
            </CardContent>
        </Card>
    );
};