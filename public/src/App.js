import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Admin from './pages/AnnouncementManager';
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ContactUs';
import CoursesAvailable from './pages/styleChat/CoursesAvailable';
import AboutCourses  from './pages/styleChat/AboutCourse';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem('chat-app-user');
    if (storedUser) {
      setIsLoggedIn(true);
      console.log("isLoggedIn set from localStorage:", isLoggedIn); // Add this line
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
  path="/admin"
  element={
    isLoggedIn ? ( 
      <Admin />
    ) : (
      <Navigate to="/login" replace /> 
    )
  }
/>
console.log("isLoggedIn value in conditional rendering:", isLoggedIn);
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path='/chat' element={<Chat/>}/>
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/courses" element={<CoursesAvailable />} />
      </Routes>
    </BrowserRouter>
  );
}