import { SoftSkillCards, TechnicalSkillCards } from "./components";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Skills = () => {

    const technicalSkills = [
        {
            programingLanguage: "Python",
            tools: ["Scikit-Learn", "Pandas", "Tensorflow", "RDKit", "Flask"],
            experiences: "5",
        },
        {
            programingLanguage: "JavaScript",
            tools: ["React", "Node.js", "Express.js"],
            experiences: "1",
        },
        {
            programingLanguage: "Java",
            tools: ["None"],
            experiences: "1",
        },
        {
            programingLanguage: "Julia",
            tools: ["None"],
            experiences: "1",
        },
        {
            programingLanguage: "C#",
            tools: ["None"],
            experiences: "1",
        },
        {
            programingLanguage: "ForTran",
            tools: ["None"],
            experiences: "1",
        },
        {
            programingLanguage: "GO (Golang)",
            tools: ["None"],
            experiences: "1",
        }
    ];

    const softSkills = [
        {
            skillName: "Growth Mindset",
        },
        {
            skillName: "Lifelong Learner",
        },
        {
            skillName: "Orientation to Details",
        }
    ];

    return (
        <div>
            <h2>Skills</h2>
            <Tabs defaultValue="technicalSkills">
                <TabsList>
                    <TabsTrigger value="technicalSkills">Technical Skills</TabsTrigger>
                    <TabsTrigger value="softSkills">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="technicalSkills">
                    <Carousel>
                        <CarouselContent>
                            {technicalSkills.map(list => <CarouselItem><TechnicalSkillCards content={ list }/></CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </TabsContent>
                <TabsContent value="softSkills">
                    <Carousel>
                        <CarouselContent>
                            {softSkills.map(list => <CarouselItem><SoftSkillCards content={ list }/></CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </TabsContent>
            </Tabs>
        </div>
    );
};