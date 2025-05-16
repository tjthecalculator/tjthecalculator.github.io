import { FinishedProjects, OngoingProjects } from "./components";

export const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of my projects.</p>
            <FinishedProjects />
            <OngoingProjects />
        </div>
    );
};