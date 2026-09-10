import Link from 'next/link';
import AnimatedHeroBackground from './AnimatedHeroBackground.jsx';

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[88vh] flex flex-col justify-center items-center py-20 px-4 sm:px-6 text-center bg-slate-950 overflow-hidden border-b border-emerald-500/20 shadow-2xl">
      
      {/* FULL WIDTH ANIMATED GIF BACKGROUND */}
      <AnimatedHeroBackground />

      {/* FLOATING DECORATIVE BADGES */}
      <div className="absolute left-6 sm:left-12 top-20 hidden lg:flex items-center space-x-2 px-3.5 py-2 bg-slate-900/90 border border-emerald-500/40 rounded-2xl backdrop-blur-md shadow-xl animate-float z-10">
        <span className="text-2xl">📚</span>
        <span className="text-xs font-bold text-emerald-300">Storybooks for Libraries</span>
      </div>

      <div className="absolute right-6 sm:right-12 top-28 hidden lg:flex items-center space-x-2 px-3.5 py-2 bg-slate-900/90 border border-teal-500/40 rounded-2xl backdrop-blur-md shadow-xl animate-float-reverse z-10">
        <span className="text-2xl">🎓</span>
        <span className="text-xs font-bold text-teal-300">Textbooks for Students</span>
      </div>

      <div className="absolute left-12 bottom-24 hidden lg:flex items-center space-x-2 px-3.5 py-2 bg-slate-900/90 border border-emerald-500/40 rounded-2xl backdrop-blur-md shadow-xl animate-float-reverse z-10">
        <span className="text-2xl">♻️</span>
        <span className="text-xs font-bold text-emerald-300">Responsible Recycling</span>
      </div>

      {/* FOREGROUND HERO CONTENT CONTAINER */}
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
        
        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-emerald-950/80 backdrop-blur-md transform hover:scale-105 transition-transform cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>📖 Read2Rise Initiative</span>
          </span>
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/50 text-teal-200 text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-teal-950/80 backdrop-blur-md transform hover:scale-105 transition-transform cursor-default">
            <span>🤝 NGO Book Redistribution + Responsible Recycling</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
          Empower Education & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 animate-shimmer-text">
            Track Your Climate Impact
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
          Books & notebooks are redistributed to students & libraries through NGO partners. Non-reusable paper is responsibly recycled to save trees & avoid CO₂e emissions.
        </p>

        {/* Hero CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/co2-tracker"
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-lg rounded-2xl shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer group"
          >
            <span>Launch Dual Impact Tracker</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a
            href="#initiative-modes"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-lg rounded-2xl backdrop-blur-md transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <span>Explore Two Modes</span>
            <span className="text-xl">↓</span>
          </a>
        </div>

        {/* Quick Metrics Bar */}
        <div className="pt-8 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
          <div className="p-4 bg-slate-900/85 border border-slate-800/90 rounded-2xl backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
            <p className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">Mode 1</p>
            <p className="text-xs text-slate-400 font-medium mt-1">NGO Redistribution</p>
          </div>
          <div className="p-4 bg-slate-900/85 border border-slate-800/90 rounded-2xl backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
            <p className="text-xl sm:text-2xl font-black text-emerald-400">Mode 2</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Responsible Recycling</p>
          </div>
          <div className="p-4 bg-slate-900/85 border border-slate-800/90 rounded-2xl backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
            <p className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">2.99 - 4.50</p>
            <p className="text-xs text-slate-400 font-medium mt-1">kg CO₂e / kg Avoided</p>
          </div>
          <div className="p-4 bg-slate-900/85 border border-slate-800/90 rounded-2xl backdrop-blur-md hover:border-teal-500/40 transition-colors group">
            <p className="text-xl sm:text-2xl font-black text-teal-300">100%</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Browser Private</p>
          </div>
        </div>

      </div>
    </section>
  );
}
