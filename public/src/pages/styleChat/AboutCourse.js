// AboutCourses.js
import React from "react";
import './style.css';
import './style1.css';

function AboutCourses({ getTranslatedText }) {
return(
<>
    <section className="about-text my-5 position-relative">
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
</section>
</>
);
}

export default AboutCourses;