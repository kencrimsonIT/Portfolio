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
                <h1 className="full-name">Tống Duy Kiên</h1>
                <p className="department">Một newbie Software Engineer 🤓👨‍💻</p>
                <div className="icon-container">
                    {/*Facebook*/}
                    <a href="https://www.facebook.com/tong.kien.5494360/" target="_blank" rel="noopener noreferrer">
                        <button className="facebook-btn"><Facebook size={20}/></button>
                    </a>

                    {/*GitHub*/}
                    <a href="https://github.com/kencrimsonIT" target="_blank" rel="noopener noreferrer">
                        <button className="github-btn"><Github size={20}/></button>
                    </a>

                    {/*LinkedIn*/}
                    <a href="https://www.linkedin.com/in/duy-ki%C3%AAn-t%E1%BB%91ng-35353a359/" target="_blank" rel="noopener noreferrer">
                        <button className="linkedin-btn"><Linkedin size={20}/></button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;