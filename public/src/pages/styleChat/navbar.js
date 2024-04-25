import React, { useState } from "react";
// import './style.css';
// import './style1.css';
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ getTranslatedText, language, changeLanguage }) {
  const [open, isopen] = useState(false);
  return (
    <>
      <div className="body">
        <div id="navbar">
          <title>KEA | {getTranslatedText("Home", "ಹೋಮ್")}</title>
          <nav className="navbar navbar-expand-xl bg-white lg:opacity-70 z-1   ">
            <div className="d-flex align-items-center font-bold">
              <a className="navbar-brand">
                <img
                  alt="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHlBXHyrLKapQ8T7eqtAqkQfnEmK9pA-Vog&usqp=CAU"
                  className="logo rounded-xl  "
                />
              </a>
              <div className=" text-3xl  font-extrabold">

                {getTranslatedText(
                  "Tuition App",
                  "ವಿದ್ಯಾರ್ಥಿ ಶುಲ್ಕ ಅಪ್ಲಿಕೇಶನ್"
                )}
              </div>
            </div>

            <div className="navbar-collapse">
              <ul className="navbar-nav ml-auto mr-auto font-bold text-pretty text-lg font-serif">
                <li className="nav-item active px-2  ">
                  <NavLink  to='/' 
                    id="keaid1261"
                    className="home-text nav-link  "
                    // href="index.html"
                  >
                    {getTranslatedText("Home", "ಹೋಮ್")}
                  </NavLink>
                </li>
                
                <li className="nav-item px-2">
                  <NavLink to="/courses" className="home-text nav-link  ">
                    {getTranslatedText("Courses", "ಕೋರ್ಸುಗಳು")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact" // This should match the route path for your contact page
                    id="keaid1273"
                    className="home-text nav-link px-2  "
                  >
                    {getTranslatedText("Contact Us", "ನಮ್ಮ ಸಂಪರ್ಕಿಸಿ")}
                  </Link>
                </li>
              </ul>
              <form method="post" action="./" id="headform">
                <div className="dropdown mr-4">
                  <select
                    name="ctl00$ddlLanguage"
                    id="ddlLanguage"
                    style={{ height: "30px" }}
                    defaultValue={language}
                    onChange={(e) => changeLanguage(e.target.value)}
                  >
                    <option value="K">
                      {getTranslatedText("Kannada", "ಕನ್ನಡ")}
                    </option>
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