import React from 'react';
import './index.css';
import './styles/index.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components (only updated ones for now)
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ChallengeSection from './components/sections/ChallengeSection';
import DomainsSection from './components/sections/DomainsSection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ChallengeSection />
        <DomainsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
