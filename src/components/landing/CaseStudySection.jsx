import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const rows = [
  ['10K Views', 200, 3],
  ['100K Views', 2000, 30],
  ['1M Views', 20000, 300],
];

const cases = [
  {
    name: 'Jynxzi',
    niche: 'Streaming/Gaming',
    image: 'https://media.base44.com/images/public/69f9f57268278312ff81c602/c571e8956_SvfM2OjELzjYl6xLwThDM1FYaSfDpK-fcjGY4tchgdK0wloBLPItz0VhXQdxovPDryv4OjtdcA5MkdkaEIj7HA.jpg',
    stat: '40M+ Monthly Views',
    quote: 'Consistent clipping turns live moments into compounding discovery.',
    bullets: ['Stream highlights become daily distribution.', 'Community moments create repeatable share loops.', 'Volume keeps the creator present between live sessions.'],
  },
  {
    name: 'Andrew Tate',
    niche: 'Personal Brand',
    image: 'https://media.base44.com/images/public/69f9f57268278312ff81c602/e10100d35_wp13180610.jpg',
    stat: '11B+ Total Impressions',
    quote: 'The right short-form network can make one message feel omnipresent.',
    bullets: ['Polarizing clips travel farther when framed clearly.', 'A distributed creator network multiplies reach.', 'Repetition creates brand recall across platforms.'],
  },
  {
    name: 'Cluely',
    niche: 'App/Product Marketing',
    image: 'https://media.base44.com/images/public/69f9f57268278312ff81c602/6c3af6eb6_Cluely_1745308240981_1745308253604.jpg',
    stat: '80% Reduction in CAC',
    quote: 'Product narratives work best when users see the use case quickly.',
    bullets: ['Demos become native short-form stories.', 'Multiple angles reveal different buyer triggers.', 'Organic distribution lowers paid acquisition pressure.'],
  },
];

function money(value) {
  return `$${value.toLocaleString()}`;
}

export default function CaseStudySection({ onOpenDrawer }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="case-studies" ref={ref} className="section-shell section-pad">
      <p className="text-gradient-orange text-sm font-bold uppercase tracking-[0.2em]">Case Studies</p>
      <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl font-black uppercase heading-tight">Clipping vs Paid Attention</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-7">
          <p className="text-[hsl(0,0%,55%)] uppercase tracking-[0.24em]">Meta Ads</p>
          <div className="mt-3 text-5xl font-black text-zinc-300">$0.02<span className="text-lg text-zinc-500">/view</span></div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-ember/20 bg-[#0f0f0f] p-7">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-ember/15 blur-3xl" />
          <p className="text-gradient-orange relative uppercase tracking-[0.24em]">Clipping</p>
          <div className="text-gradient-orange relative mt-3 text-[3.75rem] font-black">$0.0003<span className="text-lg">/view</span></div>
        </div>
      </div>
      <div className="mt-8 space-y-5">
        {rows.map(([label, meta, clipping], index) => {
          const saving = meta - clipping;
          const percent = Math.round((saving / meta) * 100);
          return (
            <div key={label} className="rounded-2xl border border-white/[0.05] bg-[hsl(20,5%,8%)] p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-black uppercase">{label}</h3>
                <p className="text-gradient-orange">Save {money(saving)} ({percent}%)</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-20 text-sm text-zinc-500">Meta</span>
                  <div className="h-4 flex-1 rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: '100%' } : {}} transition={{ duration: 0.8, delay: index * 0.08 }} className="h-4 rounded-full bg-zinc-500" />
                  </div>
                  <span className="w-20 text-right text-sm">{money(meta)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gradient-orange w-20 text-sm">Clipping</span>
                  <div className="h-4 flex-1 rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: `${Math.max((clipping / meta) * 100, 2)}%` } : {}} transition={{ duration: 0.8, delay: 0.15 + index * 0.08 }} className="h-4 rounded-full bg-ember" />
                  </div>
                  <span className="w-20 text-right text-sm">{money(clipping)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <blockquote className="mt-10 border-l-4 border-ember pl-5 text-[clamp(1.5rem,4vw,3rem)] font-black uppercase text-balance">
        Ads <span className="text-[hsl(0,0%,30%)]">rent</span> attention. <span className="text-gradient-orange">Clipping builds it</span> at scale.
      </blockquote>
      <div className="mt-20">
        <p className="text-sm text-zinc-500">* These are not our previous clients or testimonials.</p>
        <p className="mt-3 text-gradient-orange text-sm uppercase tracking-[0.25em]">Hover or Tap on the image for more details</p>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.name} tabIndex="0" className="case-card relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-white/10 bg-[hsl(20,5%,8%)] transition duration-300">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-5">
                <h3 className="text-3xl font-black uppercase">{item.name}</h3>
                <p className="text-zinc-300">{item.niche}</p>
              </div>
              <div className="case-overlay absolute inset-0 translate-y-5 overflow-y-auto bg-black/75 p-6 opacity-0 transition duration-300">
                <p className="text-gradient-orange text-3xl font-black">{item.stat}</p>
                <p className="mt-5 text-xl text-white">"{item.quote}"</p>
                <ul className="mt-5 space-y-3 text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <button type="button" onClick={onOpenDrawer} className="btn-metallic-orange mt-10 rounded-lg px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:scale-[1.02]">
          BOOK YOUR STRATEGY CALL
        </button>
      </div>
    </section>
  );
}
