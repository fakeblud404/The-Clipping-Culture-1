import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  ['01', 'Short-Form Clipping', 'Viral moments from long-form content', 'We extract the strongest hooks, reactions, lessons, and story beats from podcasts, streams, webinars, and creator videos.'],
  ['02', 'Content Engine', '30+ clips/month from one source video', 'Your long-form content becomes a repeatable publishing machine with consistent volume and creative variation.'],
  ['03', 'Performance Optimization', 'Hooks, pacing, captions tuned per platform', 'Every clip is shaped for retention with platform-native pacing, caption rhythm, and scroll-stopping openings.'],
  ['04', 'Full Distribution', 'TikTok, Reels, Shorts with scheduling', 'We handle the rollout across the major short-form platforms, keeping the calendar moving without client-side drag.'],
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="services" ref={ref} className="section-shell section-pad">
      <p className="text-gradient-orange text-sm font-bold uppercase tracking-[0.2em]">Services</p>
      <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase heading-tight">What We Do</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map(([num, title, subtitle, description], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group dark-card dark-card-hover p-7"
          >
            <div className="text-gradient-orange text-6xl font-black opacity-40">{num}</div>
            <h3 className="mt-6 text-2xl md:text-3xl font-extrabold uppercase tracking-[-0.03em]">{title}</h3>
            <p className="mt-2 text-sm font-semibold text-[hsl(0,0%,97%)]">{subtitle}</p>
            <p className="mt-5 leading-relaxed text-[hsl(0,0%,55%)]">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
