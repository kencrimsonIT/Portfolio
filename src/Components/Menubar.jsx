import React, {useState} from "react";
import "../Layouts/Menubar.css";
import {Menu, User, University, BrainCog, FolderCode, Phone} from "lucide-react";

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
                    <li className="bio"><User size={18}/>About me</li>
                    <li className="education"><University size={18}/>Education</li>
                    <li className="skills"><BrainCog size={18}/>Skills</li>
                    <li className="project"><FolderCode size={18}/>Project</li>
                    <li className="contact"><Phone size={18}/>Contact</li>
                </ul>
            )}
        </>
    );
};

export default Menubar;