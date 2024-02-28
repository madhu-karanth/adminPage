// LatestAnnouncements.js
import React from "react";
import './style.css';
import './style1.css';

function LatestAnnouncements({ getTranslatedText }) {
return(
<>
    <section className="Latest-text">
    <div className="container">
        <div className="row">
            <div className="late-text col-md-6">
                <div className="card h-100">
                    <div className="card-body pt-6">
                        <div className="icon-text text-center position-absolute">
                            <div className="icon-box">
                                <div className="icon-box-inner">
                                    <i className="icon-body fas fa-bell fa-5x text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card-text text-center mt-5">
                            <h2 className="announ-text py-2 font-weight-bolder">
                                <span id="ContentPlaceHolder1_keaid1274">{getTranslatedText("Latest Announcements", "ಕೊನೆಯ ಘೋಷಣೆಗಳು")}</span>
                            </h2>
                        </div>
                        <div style={{ height: '300px' }} className="overflow-auto">
                            <table cellSpacing="0" id="ContentPlaceHolder1_Gridlatestannoc" style={{ borderCollapse: 'collapse' }}>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_0" className="icon-color" href="">
                                            {getTranslatedText("Notification/ Announcement Number 1", "ಅಧಿಸೂಚನೆ/ ಘೋಷಣೆ ಸಂಖ್ಯೆ 1")}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_1" className="icon-color" href="">
                                            {getTranslatedText("Notification/ Announcement Number 2", "ಅಧಿಸೂಚನೆ/ ಘೋಷಣೆ ಸಂಖ್ಯೆ 2")}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_106" className="icon-color">
                                            {getTranslatedText("Notification/ Announcement Number 3", "ಅಧಿಸೂಚನೆ/ ಘೋಷಣೆ ಸಂಖ್ಯೆ 3")}
                                        </a>
                                        <span className="pr-3"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a id="ContentPlaceHolder1_Gridlatestannoc_hypertext_107" className="icon-color" href="">
                                            {getTranslatedText("Notification/ Announcement Number 4", "ಅಧಿಸೂಚನೆ/ ಘೋಷಣೆ ಸಂಖ್ಯೆ 4")}
                                        </a>
                                        <span className="pr-3"></span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
);
}

export default LatestAnnouncements;