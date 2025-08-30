import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SideMenu from './components/SideMenu.jsx';
import Footer from './components/Footer.jsx';
import Clips from './pages/Clips.jsx';
import Shorts from './pages/Shorts.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        <SideMenu />
        <main className="main-view">
          <Routes>
            <Route path="/" element={<Clips />} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
