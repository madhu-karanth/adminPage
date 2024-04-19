import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'
const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = (page) => {
    if (page === 'user') {
      navigate('/chat'); 
    } else if (page === 'login') {
      navigate('/login'); 
    }
  };

  return (
    <div className="landing-page-container">
      <div className="transparent-box">
        <h1>Welcome to Our App</h1>
        <div className="button-container">
          <button onClick={() => handleRedirect('user')}>USER</button>
        </div>
        
        <div className="button-container">
          <button onClick={() => handleRedirect('login')}>ADMIN</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
