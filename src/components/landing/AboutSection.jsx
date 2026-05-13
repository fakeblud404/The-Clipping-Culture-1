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
            src="https://media.base44.com/images/public/69f9f57268278312ff81c602/2ee1c8a56_sVNS3ZVmHBUDKxvQ87s62lWoVBfEGP2VKGSSr4WF7i1ug3fH1P00GKMVpXFBpOjJI6h_l47I8VmMSzAZXHqI8A.jpg"
            alt="The Clipping Company team system"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent to-60%" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <p className="text-gradient-orange text-sm font-bold uppercase tracking-[0.2em]">About</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] text-balance">We're Not an Agency. We're a Growth System.</h2>
          <p className="mt-6 text-lg leading-relaxed text-[hsl(0,0%,55%)]">
            The Clipping Company helps brands convert long-form content into a managed short-form distribution engine. We pair editorial standards with creator-scale execution, so one recording can become weeks of native social output.
          </p>
          <div className="mt-7 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex gap-3 text-[hsl(0,0%,97%)]">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-ember shadow-softGlow" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={onOpenDrawer} className="btn-metallic-orange mt-8 rounded-lg px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:scale-[1.02]">
            BOOK YOUR STRATEGY CALL
          </button>
        </motion.div>
      </div>
    </section>
  );
}
