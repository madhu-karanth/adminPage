import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div >
      <h1>Welcome to Our App</h1>
      <button onClick={() => handleRedirect('user')}>USER</button>
      <button onClick={() => handleRedirect('login')}>ADMIN</button>
    </div>
  );
};

export default LandingPage;
