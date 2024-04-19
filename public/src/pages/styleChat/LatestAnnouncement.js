import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import './style1.css';
 
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

  return (
    <>
      <section className="Latest-text">
        <div className="card-conatiner">
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
                  <tbody>
                    {announcements.map((announcement) => (
                      <tr key={announcement._id}>
                        <td>
                          <div>
                            {/* Render textEn and textKan as clickable links */}
                            <p className="announcement-text">
                              <a href={announcement.videoUrl} target="_blank" rel="noreferrer">
                                {getTranslatedText(announcement.textEn, announcement.textKan)}
                              </a>
                            </p>
                          </div>
                        </td>
                        <td>
                          {announcement.videoUrl && (
                            <a href={announcement.videoUrl} target="_blank" rel="noreferrer">
                              
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestAnnouncements;
