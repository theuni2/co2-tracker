import Link from 'next/link';
import { PAPER_TYPES } from '../../lib/co2Factors.js';

export default function PaperGuideSection() {
  const descriptions = {
    officePaper: 'High-grade white or copy paper. Unusable paper is recycled into fresh pulp.',
    newspaper: 'Daily newsprint & circulars. Groundwood paper recycled into packaging pulp.',
    cardboard: 'Corrugated packaging boxes. Flattened and recycled into heavy paperboard.',
    textbooks: 'Educational books & manuals. Usable books are repurposed for students via NGO partners!',
    mixedPaper: 'Magazines, storybooks, notebooks & mailers. Storybooks enrich community libraries.'
  };

  const reuseNotes = {
    textbooks: '🎓 Reused & donated to students via NGO partners first!',
    mixedPaper: '📚 Storybooks repurposed for new community libraries!'
  };

  return (
    <section id="paper-guide" className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Know Your Recyclables & Reuse Potential
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Usable books are redistributed first; non-reusable paper is recycled to avoid net CO₂e emissions.
            </p>
          </div>
          <Link
            href="/co2-tracker#co2-calculator"
            className="px-5 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-sm font-bold transition-all whitespace-nowrap"
          >
            Open Calculator ➔
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAPER_TYPES.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 space-y-3 hover:border-emerald-500/30 transition-colors relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">{item.label}</h3>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                    {item.factor} kg CO₂e / kg
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {descriptions[item.id] || 'Paper recycling material.'}
                </p>
              </div>

              {reuseNotes[item.id] && (
                <div className="pt-2 text-[11px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-2.5 py-1">
                  {reuseNotes[item.id]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
