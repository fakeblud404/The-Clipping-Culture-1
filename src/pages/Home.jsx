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
    <>
      {/* ── Fixed background video with blur — lives outside overflow-hidden wrapper ── */}
      <video
        className="fixed inset-0 h-full w-full object-cover pointer-events-none"
        style={{ zIndex: -2, filter: 'blur(16px)', transform: 'scale(1.08)', opacity: 0.70 }}
        src="/homevid.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Dark tint overlay (lighter to let video bleed through clearly) ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1, background: 'rgba(5, 5, 8, 0.25)' }}
      />

      <div className="relative min-h-screen text-white bg-transparent" style={{ zIndex: 1 }}>
        <div className="moving-ambient-glare" aria-hidden="true" />
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
    </>
  );
}

