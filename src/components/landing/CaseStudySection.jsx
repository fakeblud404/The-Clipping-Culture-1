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
      <p className="section-badge">Case Studies</p>
      <h2 className="section-heading mt-4 max-w-4xl uppercase">Clipping vs Paid Ads: <span className="metallic-text">The Real Cost of Attention</span></h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="cost-card-meta dark-card dark-card-hover rounded-2xl p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="method-label">METHOD A</p>
              <h3 className="cost-title mt-2">Paid Ads (Meta)</h3>
            </div>
            <div className="text-zinc-500 opacity-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
          </div>
          <div className="mt-6">
            <div className="cost-number-dark">$0.02<span className="text-lg text-zinc-500">/view</span></div>
          </div>
          <ul className="mt-6 space-y-3">
            <li className="cost-bullet flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500 flex-shrink-0"></span>
              <span>Pay for every impression</span>
            </li>
            <li className="cost-bullet flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500 flex-shrink-0"></span>
              <span>Stops when budget stops</span>
            </li>
            <li className="cost-bullet flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500 flex-shrink-0"></span>
              <span>Often skipped / low retention</span>
            </li>
          </ul>
        </div>
        <div className="cost-card-clipping dark-card dark-card-hover relative overflow-hidden rounded-2xl p-7">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[rgba(225,71,0,0.08)] blur-[80px]" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="method-label-orange">METHOD B</p>
              <h3 className="cost-title mt-2">Clipping-Based Growth</h3>
            </div>
            <div className="text-ember opacity-70">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
          </div>
          <div className="relative mt-6">
            <div className="cost-number-orange">$0.0003<span className="text-lg">/view</span></div>
          </div>
          <ul className="relative mt-6 space-y-3">
            <li className="cost-bullet-light flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ember flex-shrink-0"></span>
              <span>Organic distribution</span>
            </li>
            <li className="cost-bullet-light flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ember flex-shrink-0"></span>
              <span>Compounding reach over time</span>
            </li>
            <li className="cost-bullet-light flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ember flex-shrink-0"></span>
              <span>Built for attention (hooks, pacing, retention)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 space-y-5">
        {rows.map(([label, meta, clipping], index) => {
          const saving = meta - clipping;
          const percent = Math.round((saving / meta) * 100);
          return (
            <div key={label} className="scale-row">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="scale-volume uppercase">{label}</h3>
                <p className="scale-savings">Save {money(saving)} <span className="scale-savings-percent">({percent}%)</span></p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="scale-bar-label w-20">Meta</span>
                  <div className="h-4 flex-1 rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: '100%' } : {}} transition={{ duration: 0.8, delay: index * 0.08 }} className="h-4 rounded-full bg-zinc-500" />
                  </div>
                  <span className="scale-bar-value w-20 text-right">{money(meta)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="scale-bar-label w-20">Clipping</span>
                  <div className="h-4 flex-1 rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: `${Math.max((clipping / meta) * 100, 2)}%` } : {}} transition={{ duration: 0.8, delay: 0.15 + index * 0.08 }} className="h-4 rounded-full bg-ember" />
                  </div>
                  <span className="scale-bar-value w-20 text-right">{money(clipping)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="punchline-wrap mt-10">
        <blockquote className="punchline-quote text-balance">
          Ads <span className="punchline-rent">rent</span> attention. <span className="punchline-clipping">Clipping builds it</span> at scale.
        </blockquote>
      </div>
      <div className="mt-20">
        <p className="disclaimer italic text-sm">* These are not our previous clients or testimonials.</p>
        <p className="real-results-badge mt-3 text-lg uppercase tracking-[0.25em]">Real Results</p>
        <h3 className="section-heading mt-4">Why Clipping Works</h3>
        <p className="hover-instruction mt-2 text-sm">Hover or Tap on image for more details</p>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.name} tabIndex="0" className="case-card relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-white/10 bg-[hsl(20,5%,8%)] transition duration-300">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-5">
                <h3 className="case-name uppercase">{item.name}</h3>
                <p className="case-niche">{item.niche}</p>
              </div>
              <div className="case-overlay absolute inset-0 translate-y-5 overflow-y-auto bg-black/75 p-6 opacity-0 transition duration-300">
                <p className="case-stat-number">{item.stat}</p>
                <p className="case-stat-label mt-2">MONTHLY VIEWS</p>
                <p className="case-insight mt-5 text-xl">"{item.quote}"</p>
                <ul className="mt-5 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="case-bullet">- {bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <button type="button" onClick={onOpenDrawer} className="section-cta centered-case-cta btn-metallic-orange mt-10 rounded-lg px-8 py-4 transition hover:scale-[1.02]">
          Book Your Strategy Call
        </button>
      </div>
    </section>
  );
}
