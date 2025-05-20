import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCards } from "./components";

export const Projects = () => {

    const ongoingProjects = [
        {
            title: "Reaction Transformer",
            description: "Building Chemical Reaction Transformation from Reactant to Product with Transformer Model",
            languages: ["Python"],
            toolsAndFrameworks: ["Tensorflow", "RDKit"],
        }
    ];

    const finishedProjects = [
        {
            title: "QSAR",
            description: "Building Multiple Linear Regression with Partial Least Square for Quantitaty Structure-Activity Relationship.",
            languages: ["Python"],
            toolsAndFrameworks: ["Scikit-Learn"],
        },
        {
            title: "Pickled-Cat",
            description: "Building Full-Stack E-Commerces Website",
            languages: ["HTML", "CSS", "JavaScript"],
            toolsAndFrameworks: ["React", "Express.js", "Node.js", "MongoDB"],
        }
    ];

    return (
        <div>
            <h2>Projects</h2>
            <p>Here are some of my projects.</p>
            <Tabs defaultValue="finishedProjects">
                <TabsList>
                    <TabsTrigger value="finishedProjects">Finished Projects</TabsTrigger>
                    <TabsTrigger value="ongoingProjects">Ongoing Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="finishedProjects">
                    {finishedProjects.map((content) => (<ProjectCards content={ content }/>))}
                </TabsContent>
                <TabsContent value="ongoingProjects">
                    {ongoingProjects.map((content) => (<ProjectCards content={ content }/>))}
                </TabsContent>
            </Tabs>
        </div>
    );
};