import { DegreeCard, BootcampCard } from "./components"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Educations = () => {

    const degree = [
        {
            degreeName: "Master Degree",
            field: "Chemistry",
            university: "Chulalongkorn University",
            year: "2017 - 2022",
            extraCourses: "Artificial Intelligence, Artificial Neural Network",
            project: "Developing Retrosynthesis Software by using Artificial Neural Network with Open Dataset",
        },
        {
            degreeName: "Bachelor Degree",
            field: "Chemistry",
            university: "Chulalongkorn University",
            year: "2013 - 2017",
            extraCourses: "",
            project: "Calculating Chemical Reaction Pathway with Computational Chemistry Software",
        },
    ];

    const bootcamp = [
        {
            bootcampName: "",
            bootcampSchool: "",
            year: "",
            bootcampDetails: "",
            project: "",
        }
    ];

    return (
        <div>
            <h2>Educations</h2>
            <Tabs defaultValue="degrees">
                <TabsList>
                    <TabsTrigger value="degrees">Degrees</TabsTrigger>
                    <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
                </TabsList>
                <TabsContent value="degrees">
                    {degree.map((content) => (<DegreeCard content={ content }/>))}
                </TabsContent>
                <TabsContent value="bootcamps">
                    {bootcamp.map((content) => (<BootcampCard content={ content }/>))}
                </TabsContent>
            </Tabs>
        </div>
    );
};