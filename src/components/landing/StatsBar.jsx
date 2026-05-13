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
            <div className="text-gradient-orange text-[clamp(2.5rem,5vw,4rem)] font-black">{value}</div>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[hsl(0,0%,55%)]">{label}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 opacity-55 sm:grid-cols-3 lg:grid-cols-6">
        {['Creator Lab', 'Northstar', 'Signal', 'Launchbox', 'Reelhaus', 'Momentum'].map((brand) => (
          <div key={brand} className="grid h-16 place-items-center rounded-xl border border-white/[0.05] bg-[hsl(20,5%,8%)] text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(0,0%,55%)]">
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
