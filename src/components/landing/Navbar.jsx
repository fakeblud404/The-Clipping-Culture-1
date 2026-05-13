import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  ['Services', '#services'],
  ['Why Us', '#why-us'],
  ['Case Studies', '#case-studies'],
  ['About', '#about'],
  ['FAQ', '#faq'],
];

export default function Navbar({ onOpenDrawer }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (label, href) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="text-sm font-semibold text-[hsl(0,0%,55%)] transition-colors duration-200 hover:text-white"
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled ? 'border-b border-white/[0.05] bg-[rgba(10,10,11,0.8)] backdrop-blur-[16px]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="metallic-orange text-lg md:text-2xl font-extrabold uppercase tracking-[-0.02em]">
          THE CLIPPING COMPANY
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => navLink(label, href))}
          <button
            type="button"
            onClick={onOpenDrawer}
            className="btn-metallic-orange rounded-lg px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:scale-[1.02]"
          >
            BOOK A CALL
          </button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-white/15"
        >
          <span className="relative h-4 w-5">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="absolute left-0 top-0 h-0.5 w-5 bg-white" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="absolute left-0 top-2 h-0.5 w-5 bg-white" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="absolute left-0 top-4 h-0.5 w-5 bg-white" />
          </span>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-white/[0.05] bg-[rgba(10,10,11,0.95)] px-5 py-5 backdrop-blur-[16px]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-5">
              {links.map(([label, href]) => navLink(label, href))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenDrawer();
                }}
                className="btn-metallic-orange rounded-lg px-6 py-3 text-xs font-bold uppercase tracking-[0.15em]"
              >
                BOOK A CALL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
