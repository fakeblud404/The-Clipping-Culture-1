import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const points = [
  'A creator-native editor network instead of a slow agency bench.',
  'Platform-specific clipping systems for TikTok, Reels, and Shorts.',
  'Full workflow ownership from source footage to scheduled posts.',
  'Performance feedback loops that keep improving hooks and pacing.',
];

export default function AboutSection({ onOpenDrawer }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="about" ref={ref} className="section-shell section-pad">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.05]"
        >
          <img
            src="/about.jpg"
            alt="Video editing timeline on a monitor"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent to-60%" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <p className="about-badge">About</p>
          <h2 className="about-heading mt-4 text-balance">We're Not an Agency. We're a Growth System.</h2>
          <p className="about-body mt-6">
            The Clipping Company helps brands convert long-form content into a managed short-form distribution engine. We pair editorial standards with creator-scale execution, so one recording can become weeks of native social output.
          </p>
          <div className="about-points mt-7 space-y-4">
            {points.map((point) => (
              <div key={point} className="about-point flex gap-3">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-ember shadow-softGlow" />
                <span className="about-bullet">{point}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={onOpenDrawer} className="section-cta btn-metallic-orange mt-8 rounded-lg transition hover:scale-[1.02]">
            Book Your Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
