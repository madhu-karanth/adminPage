import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Admin from './pages/AnnouncementManager';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Chat/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
