import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2.5 text-white group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-lg group-hover:scale-105 transition-transform">
            🌱
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight">
            Eco<span className="text-emerald-400">Tracker</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4 sm:space-x-8">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/co2-tracker"
            className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-1"
          >
            <span>CO₂ Tracker</span>
            <span className="hidden sm:inline px-2 py-0.5 text-[10px] uppercase font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
              v1
            </span>
          </Link>
          <Link
            href="/co2-tracker#co2-calculator"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
          >
            Calculate Impact
          </Link>
        </nav>
      </div>
    </header>
  );
}
