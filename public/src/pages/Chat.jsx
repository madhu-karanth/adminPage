// Chat.js
import React, { useState } from 'react';
import Navbar from './styleChat/navbar';
import LatestAnnouncements from './styleChat/LatestAnnouncement';
import AboutTuition from './styleChat/AboutTution';
import AboutCourses from './styleChat/AboutCourse';
import CustomComponent from './styleChat/CustomComponent';

function Chat() {
  const [language, setLanguage] = useState("E"); // E for English, K for Kannada

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const getTranslatedText = (englishText, kannadaText) => {
    return language === "E" ? englishText : kannadaText;
  };

  return (
    <div>
      <Navbar
        getTranslatedText={getTranslatedText}
        language={language}
        changeLanguage={changeLanguage}
      />
      <LatestAnnouncements
        getTranslatedText={getTranslatedText}
      />
      <AboutTuition
        getTranslatedText={getTranslatedText}
      />
      <AboutCourses
        getTranslatedText={getTranslatedText}
      />
      <CustomComponent
        getTranslatedText={getTranslatedText}
      />
      {/* Your other chat content goes here */}
    </div>
  );
}

export default Chat;