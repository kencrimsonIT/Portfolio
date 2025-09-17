import React from "react";
import Menubar from "../Components/Menubar";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Menubar />
            <div className="hero-section">
                <h1 className="full-name">Xin chào! Tôi là Tống Duy Kiên</h1>
                <p className="department">Một newbie Full Stack Developer 🤓👨‍💻</p>
            </div>
        </>
    );
};

export default Home;