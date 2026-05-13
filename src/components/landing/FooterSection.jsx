import React from 'react';

const links = [
  ['Services', '#services'],
  ['Why Us', '#why-us'],
  ['About', '#about'],
  ['FAQ', '#faq'],
];

export default function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05] bg-[#0A0A0B] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#top" className="text-gradient-orange text-2xl md:text-3xl font-black uppercase tracking-[-0.03em]">
            THE CLIPPING COMPANY
          </a>
          <p className="mt-3 max-w-md text-[hsl(0,0%,55%)]">Short-form distribution for brands that want more reach from every recording.</p>
          <p className="mt-6 text-sm text-[hsl(0,0%,35%)]">© 2026 The Clipping Company. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-[hsl(0,0%,55%)] transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
