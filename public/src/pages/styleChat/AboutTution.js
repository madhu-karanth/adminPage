// AboutTuition.js
import React ,{useEffect} from "react";
import './styles/style.css';
import './styles/style1.css';

function AboutTuition({ getTranslatedText }) {
return(
<>
<section className="Latest-text">
{/* <div className="container">
        <div className="row"> */}
    <div className="card-conatiner">
    {/* <div className="late-text col-md-6"> */}
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
{/* </div>
</div> */}
</section>
</>
);
}

export default AboutTuition;