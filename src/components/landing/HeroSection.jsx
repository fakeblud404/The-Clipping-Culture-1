import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const videoUrl = 'https://media.base44.com/videos/public/69f9f57268278312ff81c602/588496832_tcc.mov';

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function VideoPlayer() {
  const videoRef = useRef(null);
  const hideTimer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);

  const showControls = () => {
    setControlsVisible(true);
    window.clearTimeout(hideTimer.current);
    if (playing) {
      hideTimer.current = window.setTimeout(() => setControlsVisible(false), 2500);
    }
  };

  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
      hideTimer.current = window.setTimeout(() => setControlsVisible(false), 2500);
    } else {
      video.pause();
      setPlaying(false);
      setControlsVisible(true);
      window.clearTimeout(hideTimer.current);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const seek = (event) => {
    const video = videoRef.current;
    const rect = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - rect.left) / rect.width) * duration;
    video.currentTime = Math.max(0, Math.min(duration, next));
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div
      className="group relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_25px_50px_rgba(225,71,0,0.05)]"
      onMouseMove={showControls}
      onMouseLeave={() => playing && setControlsVisible(false)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="aspect-video w-full bg-black object-cover"
        playsInline
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onEnded={() => {
          setPlaying(false);
          setControlsVisible(true);
        }}
      />
      {!playing && (
        <button
          type="button"
          aria-label="Play video"
          onClick={togglePlay}
          className="absolute inset-0 grid place-items-center bg-black/20"
        >
          <span className="grid h-24 w-24 place-items-center rounded-full border border-ember/60 bg-black/70 text-4xl text-white shadow-glow transition group-hover:scale-105">
            ▶
          </span>
        </button>
      )}
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-12 transition-opacity duration-300 ${
          controlsVisible || !playing ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <button type="button" onClick={togglePlay} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white hover:border-ember">
            {playing ? 'II' : '▶'}
          </button>
          <button type="button" onClick={toggleMute} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white hover:border-ember">
            {muted ? 'M' : 'S'}
          </button>
          <button type="button" aria-label="Seek video timeline" onClick={seek} className="relative h-5 flex-1 cursor-pointer">
            <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/20" />
            <span className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-ember" style={{ width: `${progress}%` }} />
            <span className="absolute top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white group-hover:block" style={{ left: `${progress}%` }} />
          </button>
          <span className="w-24 text-right text-xs md:text-sm text-zinc-300">
            {formatTime(current)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ onOpenDrawer }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 section-overlay" />
      <div className="absolute inset-x-0 top-0 h-[680px] orange-radial-glow" />
      <motion.div
        className="section-shell relative text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-ember/30 bg-ember/[0.05] px-4 py-2 text-sm font-semibold text-[#ff6b2b]">
          <span className="h-2.5 w-2.5 rounded-full bg-ember shadow-glow animate-pulse" />
          For businesses, brands, and creators
        </div>
        <h1 className="mx-auto mt-7 max-w-6xl text-[clamp(2rem,5vw,4rem)] font-black uppercase heading-tight text-balance">
          Add <span className="text-gradient-orange orange-underline">5-10M Views</span> Every Month By Turning One Long Video Into{' '}
          <span className="text-gradient-orange orange-underline">Multiple Daily Posts</span>
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-[hsl(0,0%,55%)]">
          With access to <strong className="font-bold text-[hsl(0,0%,97%)]">1.5k+ short-form editors</strong>, we distribute content at scale across <strong className="font-bold text-[hsl(0,0%,97%)]">Instagram, TikTok, and YouTube</strong> with unmatched efficiency.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={onOpenDrawer} className="btn-metallic-orange rounded-lg px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:scale-[1.02]">
            BOOK YOUR STRATEGY CALL NOW
          </button>
          <a href="#case-studies" className="outline-cta rounded-lg px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:scale-[1.02]">
            SEE CASE STUDIES
          </a>
        </div>
        <VideoPlayer />
      </motion.div>
    </section>
  );
}
