import { SoftSkills, TechnicalSkills } from "./components";

export const Skills = () => {

    const technicalSkills = [
        {
            programingLanguage: "Python",
            tools: ["Scikit-Learn", "Pandas", "Tensorflow", "RDKit", "Flask"],
            experiences: 5,
        },
        {
            programingLanguage: "JavaScript",
            tools: ["React", "Node.js", "Express.js"],
            experiences: 1,
        },
        {
            programingLanguage: "Java",
            tools: [],
            experiences: 1,
        },
        {
            programingLanguage: "Julia",
            tools: [],
            experiences: 1,
        },
        {
            programingLanguage: "C#",
            tools: [],
            experiences: 1,
        },
        {
            programingLanguage: "ForTran",
            tools: [],
            experiences: 1,
        },
        {
            programingLanguage: "GO (Golang)",
            tools: [],
            experiences: 1,
        },
    ];

    const softSkills = [
        {
            skillName: "",
            skillDescription: "",
        },
        {
            skillName: "Lifelong Learner",
            skillDescription: "",
        },
        {
            skillName: "Orientation to Details",
            skillDescription: "",
        },
    ];

    return (
        <div>
            <h2>Skills</h2>
            <p>Here are my skills.</p>
            <div className="skills">
                <h2>Technical Skills</h2>
                <TechnicalSkills />
                <h2>Soft Skills</h2>
                <SoftSkills />
            </div>
        </div>
    );
};