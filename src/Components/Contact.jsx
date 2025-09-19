import React from "react";
import "../Layouts/Contact.css";
import {Mail, Phone, MapPin} from "lucide-react";

const Contact = () => {
    return (
        <>
            <h1 className="contact-title">Liên hệ với tôi</h1>
            <div className="contact-info">
                <ul>
                    <li className="contact-mail"><Mail size={30}/>tongkien930@gmail.com</li>
                    <li className="contact-phone"><Phone size={30}/>0896490338</li>
                    <li className="contact-address"><MapPin size={30}/>TP.Hồ Chí Minh, Việt Nam</li>
                </ul>
            </div>
        </>
    );
}

export default Contact;