import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      className="navbar-link transition-colors duration-200"
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.1] bg-[rgba(12,12,16,0.75)] backdrop-blur-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'border-b border-white/[0.05] bg-[rgba(10,10,11,0.4)] backdrop-blur-[12px]'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="navbar-logo transition-opacity hover:opacity-80">
          The Clipping Company
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => navLink(label, href))}
          <button
            type="button"
            onClick={onOpenDrawer}
            className="navbar-button btn-metallic-orange rounded-lg transition hover:scale-[1.02]"
          >
            Book a Call
          </button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
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
            className="lg:hidden border-t border-white/[0.08] bg-[rgba(12,12,16,0.92)] px-5 py-5 backdrop-blur-[24px]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-5">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="mobile-menu-link"
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenDrawer();
                }}
                className="navbar-button btn-metallic-orange rounded-lg"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

