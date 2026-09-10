import Link from 'next/link';
import Read2RiseLogo from '../../components/common/Read2RiseLogo.jsx';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <Read2RiseLogo size="medium" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Empowering education through book redistribution & protecting our planet through responsible recycling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <a href="/#initiative-modes" className="hover:text-emerald-400 transition-colors">
              Two Initiative Modes
            </a>
            <a href="/#ngo-partners" className="hover:text-teal-400 transition-colors">
              NGO Partners
            </a>
            <Link href="/co2-tracker" className="hover:text-emerald-400 transition-colors">
              CO₂ Tracker
            </Link>
            <Link href="/co2-tracker#methodology" className="hover:text-white transition-colors">
              Methodology
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Read2Rise Initiative. All rights reserved.</p>
          <p>Estimates referenced from EPA WARM lifecycle emissions factors.</p>
        </div>
      </div>
    </footer>
  );
}
