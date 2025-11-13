import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import PostureAnalysis from './components/PostureAnalysis/PostureAnalysis';
import Statistics from './components/Statistics/Statistics';
import Gamification from './components/Gamification/Gamification';
import Chatbot from './components/Chatbot/Chatbot';
import Board from './components/Board/Board';
import Profile from './components/Profile/Profile';
import StretchingGuide from './components/StretchingGuide/StretchingGuide';
import PrivacyPolicy from './components/Policies/PrivacyPolicy';
import TermsOfService from './components/Policies/TermsOfService';
import './App.css';

function App() {
  // Set sidebar open by default on desktop, closed on mobile
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AuthProvider>
      <Router basename="/KT-AIVLE-SCHOOL/dashboard/">
        <div className="app">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="app-container">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/posture-analysis" element={<PostureAnalysis />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/gamification" element={<Gamification />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/board" element={<Board />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/stretching-guide" element={<StretchingGuide />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
