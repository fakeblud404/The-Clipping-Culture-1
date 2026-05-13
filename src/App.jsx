import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Splash from './pages/Splash.jsx';
import Home from './pages/Home.jsx';

function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian px-6 text-white grid place-items-center">
      <div className="relative z-10 text-center">
        <p className="text-gradient-orange text-xl font-black tracking-[0.25em]">404</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-black uppercase">Page Not Found</h1>
        <Link
          to="/"
          className="outline-cta mt-8 inline-flex rounded-lg px-7 py-3 text-sm font-bold uppercase tracking-[0.2em]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <div className="orange-grid" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/brand" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
