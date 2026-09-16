import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Splash() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0B]">

      {/* ── Full-screen background video ── */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/homevid.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Soft dark vignette over the video ── */}
      <div className="absolute inset-0 z-[1] bg-black/55" />

      {/* ── Centered content ── */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-5">

        {/* Glassy card — only as wide/tall as its content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="splash-glass-card"
        >
          {/* Moving grey glare sweep */}
          <div className="splash-glass-glare" aria-hidden="true" />

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={item}
            className="splash-logo text-balance relative z-10"
          >
            The Clipping Company
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial="hidden"
            animate="show"
            variants={item}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="splash-tagline relative z-10 mt-4"
          >
            Engineered for Attention. Built for Scale.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={item}
            transition={{ duration: 0.65, delay: 0.4, ease: 'easeOut' }}
            className="relative z-10 mt-6 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://whop.com/joined/the-clipping-company-1/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="splash-button splash-button-clipper"
            >
              I'm a Clipper
            </button>

            <Link to="/brand" className="splash-button splash-button-brand">
              I'm a Brand
            </Link>
          </motion.div>
        </motion.div>

      </section>
    </main>
  );
}
