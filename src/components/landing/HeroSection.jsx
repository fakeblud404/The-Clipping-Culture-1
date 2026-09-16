import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const videoUrl = '/tcc_video.mp4';
const videoPoster = '/tcc_video_poster.jpg';

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
      video.play().catch(() => {});
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
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const seek = (event) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - rect.left) / rect.width) * duration;
    video.currentTime = Math.max(0, Math.min(duration, next));
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div
      className="glass-card glass-glare-effect group relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-1.5 shadow-[0_30px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      onMouseMove={showControls}
      onMouseLeave={() => playing && setControlsVisible(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={videoPoster}
          className="aspect-video w-full object-cover"
          playsInline
          preload="auto"
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
            className="absolute inset-0 grid place-items-center bg-black/30 backdrop-blur-[2px] transition-all hover:bg-black/20"
          >
            <span className="grid h-24 w-24 place-items-center rounded-full border border-ember/70 bg-black/60 text-4xl text-white shadow-glow backdrop-blur-md transition-all group-hover:scale-110 hover:border-ember hover:bg-black/80">
              ▶
            </span>
          </button>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent px-4 pb-4 pt-12 transition-opacity duration-300 ${
            controlsVisible || !playing ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-ember hover:bg-ember/20 transition"
            >
              {playing ? 'II' : '▶'}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-ember hover:bg-ember/20 transition"
            >
              {muted ? 'M' : 'S'}
            </button>
            <button type="button" aria-label="Seek video timeline" onClick={seek} className="relative h-5 flex-1 cursor-pointer">
              <span className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-white/20" />
              <span className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-ember shadow-[0_0_10px_#e14700]" style={{ width: `${progress}%` }} />
              <span className="absolute top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md group-hover:block" style={{ left: `${progress}%` }} />
            </button>
            <span className="video-time w-24 text-right">{formatTime(current)} / {formatTime(duration)}</span>
          </div>
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
        <div className="hero-badge glass-card mx-auto inline-flex items-center gap-3 rounded-full border border-ember/40 bg-ember/[0.08] px-5 py-2 backdrop-blur-md shadow-glow">
          <span className="h-2.5 w-2.5 rounded-full bg-ember shadow-glow animate-pulse" />
          <span>For businesses, brands, and creators</span>
        </div>
        <h1 className="hero-headline mx-auto mt-7 max-w-6xl uppercase text-balance">
          Add <span className="metallic-text orange-underline">5-10M Views</span> Every Month By Turning One Long Video Into{' '}
          <span className="hero-italic-accent orange-underline">Multiple Daily Posts</span>
        </h1>
        <p className="hero-subtext mx-auto mt-7 max-w-3xl">
          With access to <span className="hero-emphasis">1.5k+ short-form editors</span>, we distribute content at scale across <span className="hero-emphasis">Instagram, TikTok, and YouTube</span> with unmatched efficiency.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={onOpenDrawer} className="hero-cta-primary btn-metallic-orange rounded-lg transition hover:scale-[1.02]">
            Book Your Strategy Call Now
          </button>
          <a href="#case-studies" className="hero-cta-secondary outline-cta rounded-lg hover:scale-[1.02]">
            See Case Studies
          </a>
        </div>
        <VideoPlayer />
      </motion.div>
    </section>
  );
}

