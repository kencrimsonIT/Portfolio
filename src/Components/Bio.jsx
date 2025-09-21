import React from "react";
import "../Layouts/Bio.css";

const Bio = () => {
    return (
        <>
            <h1 className="bio-title">Về tôi</h1>
            <div className="bio-info">
                <p className="bio-intro">
                    <h3 className="greetings"><strong>Xin chào! 👋 </strong></h3>
                    Tôi là sinh viên năm cuối ngành CNTT tại Đại học Nông Lâm TP.HCM, đang tìm kiếm vị trí Intern
                    Software Engineer. Hiện đã thành thạo ngôn ngữ Java, Kotlin, ReactJS, Spring Boot, và đã áp
                    vào các dự án nhóm cũng như cá nhân về web app, mobile app, API back-end. Luôn mong muốn
                    được đóng góp và học hỏi trong môi trường làm việc chuyên nghiệp, đồng thời nâng cao kỹ năng
                    lập trình thực tế và cách thưc làm việc nhóm.
                </p>
            </div>
        </>
    );
}

export default Bio;