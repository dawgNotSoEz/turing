import React from 'react';
import './index.css';
import { FaCode, FaShieldAlt, FaBookOpen, FaTrophy, FaUsers, FaBolt, FaGithub, FaStar, FaRobot, FaDiscord, FaCalendarAlt, FaAward } from 'react-icons/fa';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import CommunitySection from './components/sections/CommunitySection';
import ChallengeSection from './components/sections/ChallengeSection';
import DomainsSection from './components/sections/DomainsSection';
import EventsSection from './components/sections/EventsSection';
import ResourcesSection from './components/sections/ResourcesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import DiscordBotSection from './components/sections/DiscordBotSection';
import TeamSection from './components/sections/TeamSection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CommunitySection />
        <ChallengeSection />
        <DomainsSection />
        <EventsSection />
        <ResourcesSection />
        <TestimonialsSection />
        <DiscordBotSection />
        <TeamSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
