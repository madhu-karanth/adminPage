// AboutCourses.js
import React from "react";
import './styles/style.css';
import './styles/style1.css';

function AboutCourses({ getTranslatedText }) {
return(
<>
    <section className="about-text my-5 position-relative">
    <div className="cet-text container">
        <div className="cet-body">
            <h2 className="text-white text-center font-weight-bolder pt-3 pb-4">
                <span id="ContentPlaceHolder1_keaid1275">{getTranslatedText("About the Courses", "ಕೋರ್ಸುಗಳ ಬಗ್ಗೆ")}</span>
            </h2>
            <p className="justified-paragraph" >
                <span id="ContentPlaceHolder1_keaid1276">
                    {getTranslatedText("Our meticulously designed curriculum caters to all levels, providing personalized learning paths that ensure in-depth subject exploration without overwhelming you with extraneous details. Whether you're a complete beginner or have a foundation of knowledge, our program meets you where you are and helps you progress at your own pace.  Through interactive activities, discussions, projects, and even gamified elements, you'll move beyond passive learning and develop critical thinking and problem-solving skills that will equip you to not just consume information, but to analyze it, evaluate different perspectives, and apply it to real-world challenges.  This engaging approach, coupled with the support of a collaborative learning community where you can connect with fellow learners, ask questions, share ideas, and learn from each other, empowers you to thrive in today's ever-changing world.  You'll leave our program not just with a strong foundation in your chosen subject, but also with the critical thinking and problem-solving skills necessary to navigate the complexities of the modern world, and the confidence to continuously learn and adapt throughout your career.  In addition, our curriculum fosters a growth mindset, encouraging you to embrace challenges and see them as opportunities for deeper learning and personal development.","ನಮ್ಮ ಪಾಠ್ಯಕ್ರಮವು ವಿಷಯಗಳ ವಿಶೇಷ ಆವೃತ್ತಿಯನ್ನು ಒದಗಿಸಲು ಯಾವಾಗಲೂ ಚಿಂತಾನುಸಾರವಾಗಿ ಅಭಿವೃದ್ಧಿಗೊಳ್ಳಲು ಹೊರಗೊಮ್ಮಲಾಗಿದೆ. ನೀವು ಪ್ರಾರಂಭಿಕನೋ ಅಥವಾ ಹೆಚ್ಚು ಜ್ಞಾನವನ್ನು ಹೊಂದಲು ಯಾವಾಗಲೂ ನೀವು ಯೋಗ್ಯತಾ ಸಾಧಿಸಲು ನಮ್ಮ ಅಭ್ಯರ್ಥನೆಗೆ ಅನುಗುಣವಾಗಿದೆ. ಇಂದಿನ ಪ್ರವಾಹಶೀಲ ಜಗತ್ತಿನ ಯಶಸ್ಸಿಗಾಗಿ ನಡೆಸುವ ಒಂದು ಬದಲಾಯಿಸುವ ಶಿಕ್ಷಣ ಅನುಭವಕ್ಕೆ ನೀವು ಕುಳಿತುಕೊಳ್ಳಿ, ನಿಮ್ಮನ್ನು ಶಕ್ತಿಶಾಲಿಗೊಳಿಸಿ.")}
                </span>
            </p>
        </div>
    </div>
</section>
</>
);
}

export default AboutCourses;