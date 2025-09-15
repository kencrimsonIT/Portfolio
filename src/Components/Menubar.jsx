import React, {useState} from "react";
import "../Layouts/Menubar.css";
import {Menu} from "lucide-react";

const Menubar = () => {
    // Menu toggle handling
    const [isOpened, setIsOpened] = useState(false);

    const handlingMenu = () => {
        setIsOpened(prev => !prev);
    };

    // Rendering
    return (
        <>
            <button className="menu-btn" onClick={handlingMenu}>
                <Menu size={20}/>
            </button>
            {isOpened && (
                <ul className={`submenu ${isOpened ? "show" : ""}`}>
                    <li className="bio">About me</li>
                    <li className="education">Education</li>
                    <li className="skills">Skills</li>
                    <li className="project">Project</li>
                    <li className="contact">Contact</li>
                </ul>
            )}
        </>
    );
};

export default Menubar;