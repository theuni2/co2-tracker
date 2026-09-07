import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <span className="text-xl">🌱</span>
          <div>
            <p className="text-sm font-bold text-white">CO₂ Paper Recycling Tracker</p>
            <p className="text-xs text-slate-500">Estimates based on EPA WARM lifecycle emissions data.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs sm:text-sm font-semibold">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/co2-tracker" className="hover:text-emerald-400 transition-colors">
            CO₂ Tracker
          </Link>
          <Link href="/co2-tracker#methodology" className="hover:text-white transition-colors">
            Methodology
          </Link>
        </div>

        <p className="text-xs text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} EcoTracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
