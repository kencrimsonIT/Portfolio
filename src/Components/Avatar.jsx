import React from "react";
import myAvatar from "../Avatar/profile_avatar.jpg";
import "../Layouts/Avatar.css";

const Avatar = () => {
    return (
        <>
            <img className="profile-avatar" src={myAvatar} alt=""/>
        </>
    );
}

export default Avatar;