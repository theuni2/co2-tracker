'use client';

export default function CO2Result({ result, onSaveActivity, isSaved }) {
  if (!result || !result.success) return null;

  return (
    <section id="co2-result" className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6">
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-500/10">
        
        {/* Glow backdrop effects */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span>🌱 Calculated Result</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Your Recycling Impact
          </h3>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {result.sheets && (
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-2 text-slate-200 text-sm font-medium">
                📄 <span className="font-bold text-white">{result.sheets.toLocaleString()}</span> sheets recycled ({result.sheetSize})
              </div>
            )}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-4 py-2 text-slate-200 text-sm font-medium">
              ⚖️ <span className="font-bold text-white">{result.paperWeightFormatted} kg</span> {result.paperTypeLabel} recycled
            </div>
          </div>

          {/* Main Visual Number Display */}
          <div className="my-8 py-8 px-6 bg-slate-950/70 border border-emerald-500/30 rounded-3xl backdrop-blur-md max-w-md mx-auto">
            <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 tracking-tight">
              {result.co2AvoidedFormatted} <span className="text-3xl sm:text-4xl font-extrabold">kg CO₂e</span>
            </p>
            <p className="text-slate-300 text-base font-semibold mt-3">
              Estimated CO₂e avoided
            </p>
          </div>

          {/* Track Activity Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onSaveActivity}
              disabled={isSaved}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center space-x-2 mx-auto cursor-pointer ${
                isSaved
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 cursor-default'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 active:scale-95'
              }`}
            >
              {isSaved ? (
                <>
                  <span>✓ Activity Tracked</span>
                </>
              ) : (
                <>
                  <span>📌 Track This Activity</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
