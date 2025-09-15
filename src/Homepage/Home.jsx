import React from "react";
import Menubar from "../Components/Menubar";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Menubar />
            <h1 className="full-name">Xin chào! Tôi là Tống Duy Kiên</h1>
            <p className="department">Một newbie Full Stack Developer 🤓👨‍💻</p>
        </>
    );
};

export default Home;