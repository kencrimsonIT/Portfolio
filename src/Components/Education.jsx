import React from "react";
import "../Layouts/Education.css";

const Education = () => {
    return (
        <>
            <h1 className="education-title">Học vấn</h1>
            <ul className="education-info">
                <li className="school"><strong>Trường:</strong> Đại học Nông Lâm TPHCM</li>
                <li className="major"><strong>Ngành:</strong> Công nghệ thông tin</li>
                <li className="course"><strong>Niên khóa:</strong> 2022 - 2027</li>
                <li className="gpa"><strong>GPA:</strong> 2.68</li>
            </ul>
        </>
    );
}

export default Education;