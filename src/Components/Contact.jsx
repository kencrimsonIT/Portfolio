import React from "react";
import "../Layouts/Contact.css";
import {Mail, Phone, MapPin} from "lucide-react";

const Contact = () => {
    return (
        <>
            <Mail size={22}/>
            <Phone size={22}/>
            <MapPin size={22}/>
        </>
    );
}

export default Contact;