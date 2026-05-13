import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const faqs = [
  ['How does clipping compare to paid ads?', 'Paid ads stop the moment spend stops. Clipping builds a library of organic assets and distributes them through short-form surfaces where attention compounds over time.'],
  ['Do we need a lot of existing content?', 'No. One strong long-form recording can become a month of short-form posts. More source content helps, but the system is designed to create leverage from minimal inputs.'],
  ['Are the views authentic?', 'Yes. The model is based on real short-form publishing and human engagement, not bots, paid vanity views, or traffic manipulation.'],
  ['When should we expect results?', 'Most brands can begin seeing signal within the first month, with stronger pattern recognition as hooks, formats, and posting cadence compound over repeated cycles.'],
  ['Which platforms do you cover?', 'We focus on TikTok, Instagram Reels, and YouTube Shorts, with clip formatting, captions, pacing, and scheduling adapted for each channel.'],
  ['What industries do you serve?', 'We work best with businesses, creators, founders, educators, apps, podcasts, and personality-led brands that have strong ideas or stories to distribute.'],
  ['How do we know if our brand is a fit?', 'If you have long-form video, strong points of view, customer education, demos, or founder-led content, there is likely a clipping strategy worth testing.'],
  ['How is pricing structured?', 'Pricing depends on volume, publishing scope, editorial complexity, and distribution needs. The strategy call maps the right structure before you commit.'],
];

export default function FAQSection({ onOpenDrawer }) {
  return (
    <section id="faq" className="section-shell section-pad">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-gradient-orange text-sm font-bold uppercase tracking-[0.2em]">FAQ</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase heading-tight text-balance">Your Questions, Answered.</h2>
          <button type="button" onClick={onOpenDrawer} className="btn-metallic-orange mt-8 rounded-lg px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:scale-[1.02]">
            BOOK A CALL
          </button>
        </div>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map(([question, answer]) => (
            <Accordion.Item key={question} value={question} className="overflow-hidden rounded-xl border border-white/[0.05] bg-[rgba(20,20,22,0.5)] data-[state=open]:border-ember/20">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-semibold text-[hsl(0,0%,97%)]">
                  {question}
                  <span className="text-gradient-orange text-2xl">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-5 pb-5 leading-relaxed text-[hsl(0,0%,55%)]">
                {answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
