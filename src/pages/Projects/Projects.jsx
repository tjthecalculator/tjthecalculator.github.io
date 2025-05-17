import { ProjectCards } from "./components";

export const Projects = () => {

    const ongoingProjects = [
        {
            projectTile: "Reaction Transformer",
            projectDescription: "Building Chemical Reaction Transformation from Reactant to Product with Transformer Model",
            projectLanguage: "Python",
            projectTools: "Tensorflow, RDKit",
        },
    ];

    const finishedProjects = [
        {
            projectTitle: "QSAR",
            projectDescription: "Building Multiple Linear Regression with Partial Least Square for Quantitaty Structure-Activity Relationship.",
            projectLanguage: "Python",
            projectTools: "Scikit-Learn",
        },
        {
            projectTile: "Pickled-Cat",
            projectDescription: "Building Full-Stack E-Commerces Website",
            projectLanguage: "HTML, CSS, JavaScript",
            projectTools: "React, Express.js, Node.js, MongoDB",
        }
    ];

    return (
        <div>
            <h2>Projects</h2>
            <p>Here are some of my projects.</p>
                {finishedProjects.map((content) => (<ProjectCards content={ content }/>))}
                {ongoingProjects.map((content) => (<ProjectCards content={ content }/>))}
        </div>
    );
};