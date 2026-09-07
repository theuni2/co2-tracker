'use client';

export default function ImpactSummary({ totals }) {
  const { totalPaperKg, totalCo2AvoidedKg, totalActivities } = totals || {
    totalPaperKg: '0.00',
    totalCo2AvoidedKg: '0.00',
    totalActivities: 0
  };

  return (
    <section id="impact-summary" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="space-y-4 text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          My Total Impact
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Cumulative statistics from your recorded recycling activities.
        </p>
      </div>

      {totalActivities === 0 ? (
        <div className="p-8 text-center bg-slate-900/60 border border-slate-800 rounded-3xl backdrop-blur-md">
          <span className="text-4xl mb-3 block">🌱</span>
          <h3 className="text-lg font-bold text-white mb-1">
            Start recycling to build your impact!
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Use the calculator above to estimate your paper recycling avoided emissions and click &quot;Track This Activity&quot; to log it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Card 1: Paper Recycled */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all rounded-3xl p-6 text-center space-y-2 shadow-lg">
            <span className="text-2xl">📦</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              {totalPaperKg} <span className="text-lg font-bold text-emerald-400">kg</span>
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Paper Recycled
            </p>
          </div>

          {/* Card 2: CO2e Avoided */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 rounded-3xl p-6 text-center space-y-2 shadow-xl shadow-emerald-950/40">
            <span className="text-2xl">🌍</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              {totalCo2AvoidedKg} <span className="text-lg font-bold text-emerald-400">kg</span>
            </p>
            <p className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              CO₂e Avoided
            </p>
          </div>

          {/* Card 3: Recycling Activity */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all rounded-3xl p-6 text-center space-y-2 shadow-lg">
            <span className="text-2xl">🔄</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              {totalActivities}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              {totalActivities === 1 ? 'Recycling Activity' : 'Activities'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
