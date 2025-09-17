import React from "react";
import myAvatar from "../Avatar/3687fd4f-fe8d-4c80-8331-aa543de13ff0.jpg";
import "../Layouts/Avatar.css";

const Avatar = () => {
    return (
        <>
            <img className="profile-avatar" src={myAvatar} alt=""/>
        </>
    );
}

export default Avatar;