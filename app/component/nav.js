import Link from 'next/link';
import Read2RiseLogo from '../../components/common/Read2RiseLogo.jsx';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Read2RiseLogo size="medium" />

        {/* Navigation Links */}
        <nav className="flex items-center space-x-3 sm:space-x-6">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Home
          </Link>

          <a
            href="/#initiative-modes"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors hidden sm:inline-block"
          >
            Two Initiative Modes
          </a>

          <a
            href="/#ngo-partners"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors hidden md:inline-block"
          >
            NGO Partners
          </a>

          <Link
            href="/co2-tracker"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors hidden md:inline-block"
          >
            CO₂ Tracker
          </Link>

          <Link
            href="/co2-tracker#methodology"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors hidden lg:inline-block"
          >
            Methodology
          </Link>

          {/* Primary CTA Button */}
          <Link
            href="/co2-tracker#co2-calculator"
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            Calculate Impact
          </Link>
        </nav>
      </div>
    </header>
  );
}
