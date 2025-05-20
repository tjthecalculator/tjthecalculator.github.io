import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const CertificationCard = ({ content }) => {

    const { certificationName, school, year, courseDetails } = content;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ certificationName }</CardTitle>
            </CardHeader>
            <CardContent>
                <p>School: { school }</p>
                <p>Year: { year }</p>
                <p>Content: { courseDetails }</p>
            </CardContent>
        </Card>
    );
};