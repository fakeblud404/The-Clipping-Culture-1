import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  ['BS', 'Brand-Safe Editing', 'Strict editorial guidelines keep tone, claims, captions, and creative choices aligned with your brand.'],
  ['EN', '1,500+ Editor Network', 'Vetted creators across every niche let us match your content to editors who understand the audience.'],
  ['RV', 'Real Views Only', '100% human engagement with no bots, artificial traffic, or vanity tactics that distort performance.'],
  ['DF', 'Done-For-You', 'Full management from clip selection to publishing, so your team gets distribution without extra effort.'],
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="why-us" ref={ref} className="section-shell section-pad">
      <p className="section-badge">Why Us</p>
      <h2 className="section-heading mt-4 max-w-4xl uppercase">The Clipping Company Difference</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(([icon, title, description], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="dark-card dark-card-hover p-6"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-ember/10 text-lg font-black text-[#e14700]">{icon}</div>
            <h3 className="card-title mt-6">{title}</h3>
            <p className="card-description mt-4">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
