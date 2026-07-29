import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function AppContent() {
  const [active, setActive] = useState('about');

  return (
    <Layout
      sidebar={<Sidebar active={active} onNav={setActive} />}
      profileCard={<ProfileCard />}
    >
      {active === 'about' && <AboutSection />}
      {active === 'resume' && <ResumeSection />}
      {active === 'portfolio' && <PortfolioSection />}
      {active === 'blog' && <BlogSection />}
      {active === 'contact' && <ContactSection />}
      <Footer />
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
