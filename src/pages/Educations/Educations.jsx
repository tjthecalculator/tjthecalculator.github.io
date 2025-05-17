import { DegreeCard, BootcampCard } from "./components"

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
            year: "2013 - 2016",
            extraCourses: "",
            project: "Calculating Chemical Reaction Pathway with Computational Chemistry Software",
        },
    ];

    const bootcamp = [
        {
            bootcampName: "Junior Software Developer",
            bootcampSchool: "Generation Thailand",
            year: "2015",
            bootcampDetails: "Software Development with MERN stack",
            project: "E-Commerces webapp",
        }
    ];

    return (
        <div>
            <h2>Educations</h2>
                {degree.map((content) => (<DegreeCard content={ content }/>))};
                {bootcamp.map((content) => (<BootcampCard content={ content }/>))}
        </div>
    );
};