import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactModalProvider } from './context/ContactModalContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ContactModalProvider>
  );
}

export default App;