import React, { useState } from "react";
import './style.css';
import './style1.css';

function Navbar({ getTranslatedText, language, changeLanguage }) {
    // const [language, setLanguage] = useState("E"); // E for English, K for Kannada

    // const changeLanguage = (selectedLanguage) => {
    //     setLanguage(selectedLanguage);
    // };

    // const getTranslatedText = (englishText, kannadaText) => {
    //     return language === "E" ? englishText : kannadaText;
    // };

    return (
        <>
            <div className="body">
                <div id="navbar">
                    <title>KEA | {getTranslatedText("Home", "ಹೋಮ್")}</title>
                    <nav className="navbar navbar-expand-xl bg-white">
                        <div className="d-flex align-items-center">
                            <a className="navbar-brand">
                                <img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHlBXHyrLKapQ8T7eqtAqkQfnEmK9pA-Vog&usqp=CAU" className="logo" />
                            </a>
                            <span className="title">{getTranslatedText("Tuition App", "ವಿದ್ಯಾರ್ಥಿ ಶುಲ್ಕ ಅಪ್ಲಿಕೇಶನ್")}</span>
                        </div>

                        <div className="navbar-collapse">
                            <ul className="navbar-nav ml-auto mr-auto">
                                <li className="nav-item active">
                                    <a id="keaid1261" className="home-text nav-link" href="index.html">{getTranslatedText("Home", "ಹೋಮ್")}</a>
                                </li>
                                <li className="home-text nav-item dropdown">
                                    <a href="#" className="home-text nav-link dropdown-toggle" id="navbarDropdownMenuLinkpu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span id="keaid6023">{getTranslatedText("Fees Refund", "ಶುಲ್ಕ ಹಿಂಪಡೆ")}</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkpu3">
                                        <li> <a id="keaid6024" className="dropdown-item" href="http://kea.kar.nic.in/pget2021/pget_cancellation.pdf">{getTranslatedText("Fees Refund types", "ಶುಲ್ಕ ಹಿಂಪಡೆ ಪ್ರಕಾರಗಳು")}</a></li>
                                        <li> <a id="keaid6025" className="dropdown-item">{getTranslatedText("Fees Refund type1", "ಶುಲ್ಕ ಹಿಂಪಡೆ ಪ್ರಕಾರ 1")}</a></li>
                                        <li> <a id="keaid6026" className="dropdown-item">{getTranslatedText("Fees Refund type2", "ಶುಲ್ಕ ಹಿಂಪಡೆ ಪ್ರಕಾರ 2")}</a></li>
                                        <li> <a id="keaid6027" className="dropdown-item">{getTranslatedText("Fees Refund type3", "ಶುಲ್ಕ ಹಿಂಪಡೆ ಪ್ರಕಾರ 3")}</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a id="keaid8" className="home-text nav-link" href="">{getTranslatedText("Courses", "ಕೋರ್ಸುಗಳು")}</a>
                                </li>
                                <li className="nav-item">
                                    <a id="keaid1273" className="home-text nav-link" href="">{getTranslatedText("Contact Us", "ನಮ್ಮ ಸಂಪರ್ಕಿಸಿ")}</a>
                                </li>
                            </ul>
                            <form method="post" action="./" id="headform">
                                <div className="dropdown">
                                    <select name="ctl00$ddlLanguage" id="ddlLanguage" style={{ height: '30px' }} defaultValue={language} onChange={(e) => changeLanguage(e.target.value)}>
                                        <option value="K">{getTranslatedText("Kannada", "ಕನ್ನಡ")}</option>
                                        <option value="E">English</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> */}
            {/* <section className="Latest-text">
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
            </section> */}
                {/* <section className="latest-text">
                        <div className="late-text col-md-6">
                            <div className="card h-100">
                                <div className="card-body pt-5">
                                    <div className="icon-text text-center position-absolute">
                                        <div className="icon-box">
                                            <div className="icon-box-inner">
                                                <i className="icon-body fas fa-book fa-5x text-white"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-text text-center mt-5">
                                        <h2 className="announ-text py-2 font-weight-bolder">
                                            <span id="ContentPlaceHolder1_keaid2103">{getTranslatedText("About Tuition", "ಶಿಕ್ಷಣ ಕುಲ ಬಗ್ಗೆ")}</span>
                                        </h2>
                                    </div>
                                    <p>
                                        <span id="ContentPlaceHolder1_keaid2104">
                                            {getTranslatedText("We prioritize personalized attention, fostering a supportive environment for students to thrive.", "ನಾವು ವೈಯಕ್ತಿಕ ಗಮನಕ್ಕೆ ಪ್ರಾಧಿಕೃತವನ್ನು ಕೊಡುತ್ತಿದ್ದೇವೆ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ ನೀಡಲು ಹಿಡಿಸುವ ಒಂದು ಬೆಂಬಲವಾದ ವಾತಾವರಣವನ್ನು ಪ್ರಾಥಮಿಕಗೊಳಿಸುತ್ತಿದ್ದೇವೆ.")}
                                        </span>
                                    </p>
                                    <p>
                                    <a id="ContentPlaceHolder1_keaid2105" href="" style={{ color: 'black' }}>
    {getTranslatedText("Our experienced tutors are dedicated to guiding individuals", "ನಮ್ಮ ಅನುಭವಿಯಾದ ಟ್ಯೂಟರ್ಗಳು ವ್ಯಕ್ತಿಗಳನ್ನು ಮಾರ್ಗದರ್ಶನ ಮಾಡಲು ನಿರಂತರವಾಗಿ ನಿರೀಕ್ಷಿಸಿದ್ದಾರೆ.")}
</a>
</p>
<p className="icon-color">
    <a id="ContentPlaceHolder1_keaid2106" href="" style={{ color: 'black' }}>
        {getTranslatedText("Through tailored educational journeys, ensuring comprehension and mastery", "ರೂಪಿತ ಶಿಕ್ಷಣ ಪ್ರಯಾಣಗಳ ಮೂಲಕ, ಅರಿವಿನ ಮತ್ತು ನಿಯಂತ್ರಣದ ಖಂಡನೆಗಳನ್ನು ಖಚಿತಪಡಿಸುವುದರ ಮೂಲಕ")}
    </a>
</p>
<p className="icon-color">
    <a id="ContentPlaceHolder1_keaid2107" href="" style={{ color: 'black' }}>
        {getTranslatedText("Making learning an inspiring and enriching experience for every student.", "ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗಾಗಿ ಕಲಿಕೆಯನ್ನು ಉತ್ಸಾಹದ ಮತ್ತು ಸಂಪೃಷ್ಟ ಅನುಭವವನ್ನಾಗಿ ಮಾಡುವುದು.")}
    </a>
</p>
<p className="icon-color">
    <a id="ContentPlaceHolder1_keaid2108" href="" style={{ color: 'black' }}>
        {getTranslatedText("Lorem ipsum dolor sit amet.", "ಲೋರೆಮ್ ಇಪ್ಸಮ್ ಡಾಲರ್ ಸಿಟ್ ಅಮೆಟ್.")}
    </a>
</p>
</div>
</div>
</div>
</section> */}
{/* <section className="about-text my-5 position-relative">
    <div className="cet-text container">
        <div className="cet-body">
            <h2 className="text-white text-center font-weight-bolder pt-3 pb-4">
                <span id="ContentPlaceHolder1_keaid1275">{getTranslatedText("About the Courses", "ಕೋರ್ಸುಗಳ ಬಗ್ಗೆ")}</span>
            </h2>
            <p className="text-white text-left py-3">
                <span id="ContentPlaceHolder1_keaid1276">
                    {getTranslatedText("Our curriculum is thoughtfully developed to provide comprehensive coverage of subjects, ensuring an in-depth understanding. Whether you're a beginner or seeking advanced knowledge, our courses are tailored to accommodate learners at every level.Dive into a transformative educational experience and empower yourself with the skills needed for success in today's dynamic world.","ನಮ್ಮ ಪಾಠ್ಯಕ್ರಮವು ವಿಷಯಗಳ ವಿಶೇಷ ಆವೃತ್ತಿಯನ್ನು ಒದಗಿಸಲು ಯಾವಾಗಲೂ ಚಿಂತಾನುಸಾರವಾಗಿ ಅಭಿವೃದ್ಧಿಗೊಳ್ಳಲು ಹೊರಗೊಮ್ಮಲಾಗಿದೆ. ನೀವು ಪ್ರಾರಂಭಿಕನೋ ಅಥವಾ ಹೆಚ್ಚು ಜ್ಞಾನವನ್ನು ಹೊಂದಲು ಯಾವಾಗಲೂ ನೀವು ಯೋಗ್ಯತಾ ಸಾಧಿಸಲು ನಮ್ಮ ಅಭ್ಯರ್ಥನೆಗೆ ಅನುಗುಣವಾಗಿದೆ. ಇಂದಿನ ಪ್ರವಾಹಶೀಲ ಜಗತ್ತಿನ ಯಶಸ್ಸಿಗಾಗಿ ನಡೆಸುವ ಒಂದು ಬದಲಾಯಿಸುವ ಶಿಕ್ಷಣ ಅನುಭವಕ್ಕೆ ನೀವು ಕುಳಿತುಕೊಳ್ಳಿ, ನಿಮ್ಮನ್ನು ಶಕ್ತಿಶಾಲಿಗೊಳಿಸಿ.")}
                </span>
            </p>
        </div>
    </div>
</section> */}
{/* <section className="about-text my-5 position-relative">
    <div className="about-box-out position-absolute w-100">
        <div className="container">
            <div className="row py-3">
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body pt-5">
                            <div className="box-out bg-white p-4 shadow mb-2 h-100">
                                <div className="icon-group text-center py-3">
                                    <i className="icon-pic font-weight-bolder fas fa-arrow-down fa-2x"></i>
                                </div>
                                <p className="font-text font-weight-bold text-center">
                                    <span id="ContentPlaceHolder1_keaid1277">{getTranslatedText("Discover a world of academic excellence with our tutorial website, where we strive to provide top-notch education and support to students.. Our platform offers a diverse range of courses, expert instructors, and interactive learning resources to enhance your academic journey.Join us in exploring a dynamic and enriching educational experience.", "ನಮ್ಮ ಟ್ಯೂಟೋರಿಯಲ್ ವೆಬ್‌ಸೈಟ್ ನಲ್ಲಿ ಶಿಕ್ಷಣದ ಉತ್ಕೃಷ್ಟತೆಯ ಜಗತ್ತನ್ನು ಹೊಂದಿರಿ, ನಾವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶ್ರೇಷ್ಠ ಶಿಕ್ಷಣ ಮತ್ತು ಬೆಂಬಲ ಒದಗಿಸಲು ಹೊಸದಾಗಿ ಹೋರಾಡುತ್ತಿದ್ದೇವೆ. ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ವಿದ್ಯಾರ್ಥಿಗಳ ಶಿಕ್ಷಣ ಪ್ರಯಾಣವನ್ನು ಹೆಚ್ಚಿನಂತೂ ಹೆಚ್ಚಿನದಾಗಿ ಮಾಡಲು ವಿವಿಧ ಕೋರ್ಸುಗಳ ವಿಶೇಷಜ್ಞ ನಿರ್ದೇಶಕರು ಮತ್ತು ಇಂಟರ್ಯಾಕ್ಟಿವ್ ಅಧ್ಯಯನ ಸಾಧನೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.")}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
    <div className="card h-100">
        <div className="card-body pt-5">
            <div className="box-out bg-white p-4 shadow mb-2 h-100">
                <div className="icon-group text-center py-3">
                    <i className="icon-pic font-weight-bolder fas fa-arrow-down fa-2x "></i>
                </div>
                <p className="font-text font-weight-bold text-center">
                    <span id="ContentPlaceHolder1_keaid1278">{getTranslatedText("Elevate your learning experience on our tutorial website, where quality meets convenience. We offer a streamlined approach to education, providing comprehensive courses taught by experienced tutors. Navigate through our user-friendly platform, designed for optimal understanding and engagement.", "ನಮ್ಮ ಟ್ಯೂಟೋರಿಯಲ್ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನಿಖರತೆ ಮತ್ತು ಸುಲಭತೆ ಸಂಧಿಸುವ ಸ್ಥಳದಲ್ಲಿ ನಿಮ್ಮ ಶಿಕ್ಷಣ ಅನುಭವವನ್ನು ಪ್ರಶಾಂತಗೊಳಿಸಿ. ನಾವು ಅನುಭವಿ ಟ್ಯೂಟರ್‌ಗಳ ನಿರ್ದೇಶನದಲ್ಲಿ ವಿಸ್ತೃತವಾದ ಕೋರ್ಸುಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದೇವೆ. ನಮ್ಮ ಬಳಸಿಕೊಳ್ಳಲು ಸುಲಭವಾದ ಪ್ಲ್ಯಾಟ್‌ಫೋರಮ್ ಮೂಲಕ ಸರಿಹೋಗುವ ಶಿಕ್ಷಣಕ್ರಮಕ್ಕೆ ಒಯ್ಯಿರಿ, ಯೋಗ್ಯತಾ ಹಾಗೂ ಸಂಭಾಷಣೆಗಾಗಿ ಅಭಿರುಚಿಯಾಗಿದೆ.")}</span>
                </p>
            </div>
        </div>
    </div>
</div>
                <div className="col-md-4">
    <div className="card h-100">
        <div className="card-body pt-5">
            <div className="box-out bg-white p-4 shadow mb-2 h-100">
                <div className="icon-group text-center py-3">
                    <i className="icon-pic font-weight-bolder fas fa-arrow-down fa-2x "></i>
                </div>
                <p className="font-text font-weight-bold text-center">
                    <span id="ContentPlaceHolder1_keaid1279">{getTranslatedText("Embark on a transformative learning journey with our tutorial website, a hub of educational excellence. Our carefully curated courses, led by seasoned instructors, foster a dynamic and inclusive learning environment. Explore a plethora of subjects, master new skills, and achieve your academic goals effortlessly.", "ನಮ್ಮ ಟ್ಯೂಟೋರಿಯಲ್ ವೆಬ್‌ಸೈಟ್ ಸ್ವರ್ಣಸೂಚಿಯ ಹೊರಗೊಮ್ಮಲಾಗಿ ಕೈಜೋಡಿಸುವ ಶಿಕ್ಷಣ ಪ್ರಯಾಣದ ಮೂಲಕ ಪ್ರಾರಂಭಿಸಿ. ನಮ್ಮ ಅನುಭವಿಯಾದ ನಿರ್ದೇಶಕರ ನಡುವಿನ ಸಂರಿಚ್ಛಿತ ಕೋರ್ಸುಗಳು, ಒಂದು ಚಂಚಲ ಹಾಗೂ ಸಮಾನಾಂತರ ಶಿಕ್ಷಣ ಸರಣಿಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತವೆ. ಅನೇಕ ವಿಷಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಹೊಸ ಹಂಚುಗಳನ್ನು ಹೊಂದಿ, ನಿಮ್ಮ ಶಿಕ್ಷಣ ಲಕ್ಷ್ಯಗಳನ್ನು ಸುಲಭವಾಗಿ ಸಾಧಿಸಿ.")}</span>
                </p>
            </div>
        </div>
    </div>
</div>
            </div>
        </div>
    </div>
</section> */}
</>
);
}

export default Navbar;