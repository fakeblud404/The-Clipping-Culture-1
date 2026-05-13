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
          <a href="#top" className="footer-logo">
            THE CLIPPING COMPANY
          </a>
          <p className="footer-tagline mt-3 max-w-md">Short-form distribution for brands that want more reach from every recording.</p>
          <p className="footer-copyright mt-6">© 2026 The Clipping Company. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="footer-link transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
