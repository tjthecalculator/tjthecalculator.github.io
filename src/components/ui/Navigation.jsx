import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/educations">Educations</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
            </ul>
        </nav>
    );
};