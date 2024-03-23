import React, { useState } from "react";
import './style.css';
import './style1.css';

function Navbar({ getTranslatedText, language, changeLanguage }) {
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
</>
);
}

export default Navbar;