import { DegreeCard, CertificationCard } from "./components"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

    const certification = [
        {
            certificationName: "",
            school: "",
            year: "",
            courseDetails: ""
        }
    ];

    return (
        <div>
            <h2>Educations</h2>
            <Tabs defaultValue="degrees">
                <TabsList>
                    <TabsTrigger value="degrees">Degrees</TabsTrigger>
                    <TabsTrigger value="bootcamps">Certifications</TabsTrigger>
                </TabsList>
                <TabsContent value="degrees">
                    <Carousel>
                        <CarouselContent>
                            {degree.map(content => <CarouselItem><DegreeCard content={ content }/></CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </TabsContent>
                <TabsContent value="bootcamps">
                    <Carousel>
                        <CarouselContent>
                            {certification.map(content => <CarouselItem><CertificationCard content={ content }/></CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </TabsContent>
            </Tabs>
        </div>
    );
};