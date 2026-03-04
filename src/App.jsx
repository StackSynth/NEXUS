import React from 'react';
import Heading from './components/Heading';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading />
          <FeatureCard />
        </div>
      </div>
      <StatsSection />
      <CTASection />
    </div>
  );
}

export default App;
