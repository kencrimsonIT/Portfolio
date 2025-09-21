import React, {useState} from "react";
import "../Layouts/Menubar.css";
import {Menu, User, University, BrainCog, FolderCode, Contact} from "lucide-react";

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
                    <li className="bio"><User size={20}/>Về tôi</li>
                    <li className="education"><University size={20}/>Học vấn</li>
                    <li className="skills"><BrainCog size={20}/>Kỹ năng</li>
                    <li className="project"><FolderCode size={20}/>Dự án</li>
                    <li className="contact"><Contact size={20}/>Liên hệ</li>
                </ul>
            )}
        </>
    );
};

export default Menubar;