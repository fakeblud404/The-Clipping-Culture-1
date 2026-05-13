import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  ['5-10M', 'Monthly Views'],
  ['1,500+', 'Active Editors'],
  ['98%', 'Client Retention'],
  ['66x', 'ROI vs Paid Ads'],
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section ref={ref} className="section-shell section-pad">
      <div className="grid gap-0 overflow-hidden rounded-2xl border border-white/[0.06] md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <motion.div
            key={label}
            className="border-b border-white/[0.06] bg-[rgba(10,10,11,0.55)] p-7 text-center md:border-b-0 md:border-r last:border-r-0"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="stat-number">{value}</div>
            <p className="stat-label mt-2">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
