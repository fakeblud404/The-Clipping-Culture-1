import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ContactDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            className="absolute bottom-0 left-0 right-0 h-[90vh] overflow-hidden rounded-t-[2rem] border-t border-white/10 bg-[hsl(20,5%,8%)] shadow-glow"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mx-auto mt-3 h-[6px] w-12 rounded-[3px] bg-white/20" />
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 md:px-8">
              <div>
                <h2 className="contact-heading">Cut to the Chase</h2>
                <p className="contact-sub-description mt-1">Book your 30-minute strategy call</p>
              </div>
              <button
                type="button"
                aria-label="Close contact drawer"
                onClick={onClose}
                className="drawer-close-button"
              >
                X
              </button>
            </div>
            <iframe
              title="Calendly strategy call"
              className="h-[calc(90vh-112px)] w-full rounded-2xl"
              src="https://calendly.com/clippingculture2025/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0b&text_color=f7f7f7&primary_color=e14700"
            />
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
