import { Link } from "react-router-dom";

const Taskbar = () => {
    return (
        <nav className="taskbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Taskbar;