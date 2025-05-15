import React from "react";
import { Link } from "react-router";

const Taskbar = () => {
    return (
        <div className="taskbar">
        <div className="taskbar__container">
            <Link to="/home" className="taskbar__link">
            Home
            </Link>
            <Link to="/about" className="taskbar__link">
            About
            </Link>
            <Link to="/contact" className="taskbar__link">
            Contact
            </Link>
        </div>
        </div>
    );
}

export default Taskbar;