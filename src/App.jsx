import React from 'react';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import HeroSection from './components/HeroSection';
import FitnessSection from './components/FitnessSection';
import AdventureSection from './components/AdventureSection';
import SleepSection from './components/SleepSection';
import WatchFacesSection from './components/WatchFacesSection';
import HeartHealthSection from './components/HeartHealthSection';
import FamilySetupSection from './components/FamilySetupSection';
import SafetySection from './components/SafetySection';
import ConnectivitySection from './components/ConnectivitySection';
import FitnessPlusSection from './components/FitnessPlusSection';
import WhyBuyGrid from './components/WhyBuyGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased overflow-x-hidden">
      {/* 1. Apple Global Navigation */}
      <Navbar />

      {/* 2. Apple Watch Sticky Subnav */}
      <SubNav />

      {/* 3. Hero Section ("Why Apple Watch: Extremely insightful. Exceptionally powerful.") */}
      <HeroSection />

      {/* 4. Fitness Section (Three Rings, Workout App, Heart Rate Zones, Race Route) */}
      <FitnessSection />

      {/* 5. Adventure & Ultra Section + Water Resistance (50m Swimproof & Ejection) */}
      <AdventureSection />

      {/* 6. Sleep Section (Sleep Stages Breakdown, Awake, REM, Core, Deep) */}
      <SleepSection />

      {/* 7. Watch Faces & Band Studio (Endless Faces, Interactive Switcher) */}
      <WatchFacesSection />

      {/* 8. Heart Health Section (ECG App, AFib History, Doctor Reports) */}
      <HeartHealthSection />

      {/* 9. Family Setup Section (Apple Watch For Kids, Schooltime Mode) */}
      <FamilySetupSection />

      {/* 10. Safety Section (Crash Detection, Fall Detection, Emergency SOS) */}
      <SafetySection />

      {/* 11. Connectivity Section (Cellular, iMessage, Apple Pay, Apple Music) */}
      <ConnectivitySection />

      {/* 12. Apple Fitness+ Section (Synchronized Workouts, Live HUD Metrics) */}
      <FitnessPlusSection />

      {/* 13. Why Buy From Apple Grid (Trade-in, Installments, Free Delivery, Setup) */}
      <WhyBuyGrid />

      {/* 14. Official Apple Footer (Legal Footnotes, Directory Columns, Copyright) */}
      <Footer />
    </div>
  );
}
