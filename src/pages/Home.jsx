import React, { useState } from 'react';
import Navbar from '../components/landing/Navbar.jsx';
import HeroSection from '../components/landing/HeroSection.jsx';
import StatsBar from '../components/landing/StatsBar.jsx';
import ServicesSection from '../components/landing/ServicesSection.jsx';
import WhyUsSection from '../components/landing/WhyUsSection.jsx';
import CaseStudySection from '../components/landing/CaseStudySection.jsx';
import AboutSection from '../components/landing/AboutSection.jsx';
import FAQSection from '../components/landing/FAQSection.jsx';
import FooterSection from '../components/landing/FooterSection.jsx';
import ContactDrawer from '../components/landing/ContactDrawer.jsx';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => setDrawerOpen(true);

  return (
    <div className="relative min-h-screen bg-obsidian text-white">
      <Navbar onOpenDrawer={openDrawer} />
      <HeroSection onOpenDrawer={openDrawer} />
      <StatsBar />
      <ServicesSection />
      <WhyUsSection />
      <CaseStudySection onOpenDrawer={openDrawer} />
      <AboutSection onOpenDrawer={openDrawer} />
      <FAQSection onOpenDrawer={openDrawer} />
      <FooterSection />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
