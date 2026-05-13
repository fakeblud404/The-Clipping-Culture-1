import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function TextureCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < 1400; i += 1) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.15})`;
        ctx.fillRect(x, y, 1, 1);
      }
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[1] pointer-events-none opacity-70" />;
}

export default function Splash() {
  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0B]">
      <TextureCanvas />
      <div className="absolute left-1/2 top-1/2 z-[1] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(225,71,0,0.15)] blur-[120px]" />
      <section className="relative z-10 min-h-screen px-5 grid place-items-center text-center">
        <div className="w-full max-w-6xl">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={item}
            className="splash-logo text-balance"
          >
            The Clipping Company
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={item}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="splash-tagline mx-auto mt-6 max-w-3xl"
          >
            Engineered for Attention. Built for Scale.
          </motion.p>
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-5">
            <motion.div initial="hidden" animate="show" variants={item} transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}>
              <button
                type="button"
                onClick={() => window.open('https://whop.com/joined/the-clipping-company-1/', '_blank', 'noopener,noreferrer')}
                className="splash-button splash-button-clipper"
              >
                I'm a Clipper
              </button>
            </motion.div>
            <motion.div initial="hidden" animate="show" variants={item} transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}>
              <Link
                to="/brand"
                className="splash-button splash-button-brand"
              >
                I'm a Brand
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
