import { SoftSkills, TechnicalSkills } from "./components";

export const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
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