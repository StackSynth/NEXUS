import React from 'react';
import Heading from './components/Heading';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureCard';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <div className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Heading />
          <FeatureGrid />
        </div>
      </div>
      <StatsSection />
      <CTASection />
    </div>
  );
}

export default App;
