import React from "react";
import Menubar from "../Components/Menubar";
import Avatar from "../Components/Avatar"
import "./Home.css";
import {Facebook, Github, Linkedin} from "lucide-react";

const Home = () => {
    return (
        <>
            <Menubar />
            <div className="hero-section">
                <Avatar />
                <h1 className="full-name">Xin chào! Tôi là Tống Duy Kiên</h1>
                <p className="department">Một newbie Full Stack Developer 🤓👨‍💻</p>
                <div className="icon-container">
                    <button className="facebook-btn"><Facebook size={20}/></button>
                    <button className="github-btn"><Github size={20}/></button>
                    <button className="linkedin-btn"><Linkedin size={20}/></button>
                </div>
            </div>
        </>
    );
};

export default Home;