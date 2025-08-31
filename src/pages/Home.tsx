import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import LogoCarousel from '../components/home/LogoCarousel';
import AIAgentsSection from '../components/home/AIAgentsSection';
import SocialProofSection from '../components/home/SocialProofSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LogoCarousel />
      <AIAgentsSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
};

export default Home;