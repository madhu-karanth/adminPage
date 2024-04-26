import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styleChat/styles/style.css';
import '../styleChat/styles/style1.css';

function LatestAnnouncements({ getTranslatedText }) {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/announcements');
      setAnnouncements(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };
  const openVideo = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };
  return (
    <>
      <section className="latest-announcements">  
      <h1 className={`welcome-text text-center`} style={{ fontFamily: 'sans-serif' }}>
      {/* <h1 className="welcome-text"> */}
  <span className="welcome-text blue">{getTranslatedText('Optimize Your Skills:', 'ಕೌಶಲ್ಯಗಳನ್ನು ಹೆಚ್ಚಿಸಿ:')}</span>
  <span className="welcome-text red">{getTranslatedText('Powerful Tools & Resources', 'ಬಲವಾದ ಸಾಧನಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು')}</span>
</h1>
        <section className="Latest-text"> 
          <div className="announcements-container">
            {announcements.map((announcement) => (
              <div key={announcement._id} className="announcement-box">
                <p className="announcement-title">
                  {getTranslatedText(announcement.textEn, announcement.textKan)}
                </p>
                <div className="announcement-pdf">
                <a
                  href="#"  // Prevent default link behavior (navigation)
                  onClick={(event) => {
                    event.preventDefault(); // Added to prevent default routing
                    console.log(announcement.filename);
                    window.open(`http://localhost:5000/files/${announcement.filename}`, '_blank');
                  }}
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  View PDF
                </a>
                </div>
                <div className="announcement-video">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      openVideo(announcement.videoUrl);
                    }}
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default LatestAnnouncements;