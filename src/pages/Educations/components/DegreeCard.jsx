import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export const DegreeCard = ({ content }) => {

    const { degreeName, field, university, year, project, extraCourses } = content;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ degreeName }</CardTitle>
                <CardDescription>{ field }</CardDescription>
            </CardHeader>
            <CardContent>
                <p>University: { university }</p>
                <p>Year: { year } </p>
                <p>Project/Thesis: { project }</p>
                <p>Extra Courses: { extraCourses } </p>
            </CardContent>
        </Card>
    );
};