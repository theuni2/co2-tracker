import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative pt-12 sm:pt-20 pb-12 px-4 sm:px-6 text-center max-w-5xl mx-auto space-y-8">
      {/* Feature Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
          <span>📚 Reuse & Donate First • 🌿 Recycle Responsibly</span>
        </span>
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-bold tracking-wide">
          <span>🔒 100% Local Storage Privacy</span>
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
        Turn Every Sheet Recycled Into <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
          Measurable Climate Action
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
        Books & notebooks are redistributed to students & libraries through NGO partners. Non-reusables are responsibly recycled to avoid CO₂e emissions.
      </p>

      {/* Hero CTA Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/co2-tracker"
          className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-lg rounded-2xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Calculate My Impact</span>
          <span className="text-xl">→</span>
        </Link>
        <a
          href="#ngo-mission"
          className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-lg rounded-2xl transition-all flex items-center justify-center space-x-2"
        >
          <span>Our NGO Mission</span>
          <span className="text-xl">↓</span>
        </a>
      </div>

      {/* Quick Metrics Bar */}
      <div className="pt-8 max-w-3xl mx-auto grid grid-cols-3 gap-4 border-t border-slate-800/80">
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Reuse First</p>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">NGO Book Partner Network</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">3.15 - 3.91</p>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">kg CO₂e / kg Net Avoided</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">Browser Private</p>
        </div>
      </div>
    </section>
  );
}
