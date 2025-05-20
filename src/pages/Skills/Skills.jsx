import { SoftSkillCards, TechnicalSkillCards } from "./components";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
                <TabsContent>
                    {technicalSkills.map((content) => (<TechnicalSkillCards content={ content }/>))}
                </TabsContent>
                <TabsContent>
                    {softSkills.map((content) => (<SoftSkillCards content={ content }/>))}
                </TabsContent>
            </Tabs>
        </div>
    );
};