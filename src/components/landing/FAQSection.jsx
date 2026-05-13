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
          <p className="about-badge">FAQ</p>
          <h2 className="section-heading mt-4 text-balance">Your Questions, <span className="orange-underline">Answered.</span></h2>
          <button type="button" onClick={onOpenDrawer} className="section-cta btn-metallic-orange mt-8 rounded-lg transition hover:scale-[1.02]">
            Book a Call
          </button>
        </div>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map(([question, answer]) => (
            <Accordion.Item key={question} value={question} className="overflow-hidden rounded-xl border border-white/[0.05] bg-[rgba(20,20,22,0.5)] data-[state=open]:border-ember/20">
              <Accordion.Header>
                <Accordion.Trigger className="accordion-question flex w-full items-center justify-between gap-4 px-5 py-5 text-left">
                  {question}
                  <span className="metallic-text text-2xl">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-answer px-5 pb-5">
                {answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
