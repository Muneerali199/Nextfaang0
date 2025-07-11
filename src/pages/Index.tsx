
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SmoothScrollProvider from '../providers/SmoothScrollProvider';

import CinematicHero from '../components/CinematicHero';
import TimelineRoadmap from '../components/TimelineRoadmap';
import GlassDashboard from '../components/GlassDashboard';
import PracticeArenaShowcase from '../components/PracticeArenaShowcase';
import AIResumeBuilder from '../components/AIResumeBuilder';
import CommunityHub from '../components/CommunityHub';
import ResourceHub from '../components/ResourceHub';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import DashboardLayout from '../components/DashboardLayout';

const Index = () => {
  const [showFullDashboard, setShowFullDashboard] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Enhanced smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  // Check if we should show the full dashboard based on URL params or state
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('dashboard') === 'full') {
      setShowFullDashboard(true);
    }
  }, [location]);

  if (showFullDashboard) {
    return <DashboardLayout />;
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
       
        <CinematicHero />
        <TimelineRoadmap />
        <GlassDashboard />
        <PracticeArenaShowcase />
        <ResourceHub />
        <AIResumeBuilder />
        <TestimonialSection />
        <CommunityHub />
        <PricingSection />
        <FAQSection />
        <NewsletterSection />
        <FinalCTA />
        <Footer />
        
        {/* Mobile-Optimized Dashboard Access Button */}
        <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
          <button
            onClick={() => setShowFullDashboard(true)}
            className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-4 py-3 md:px-6 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm md:text-base touch-target"
          >
            <span className="hidden sm:inline">Open Dashboard</span>
            <span className="sm:hidden">Dashboard</span>
          </button>
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default Index;
