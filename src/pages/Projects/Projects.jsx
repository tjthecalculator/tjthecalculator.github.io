import { FinishedProjects, OngoingProjects } from "./components";

export const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <p>Here are some of my projects.</p>
            <FinishedProjects />
            <OngoingProjects />
        </div>
    );
};