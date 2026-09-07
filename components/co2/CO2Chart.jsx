'use client';

export default function CO2Chart({ activities }) {
  if (!activities || activities.length === 0) return null;

  // Render recent activities up to 10 entries in chronological order (left to right)
  const chartData = [...activities].slice(0, 10).reverse();

  // Find max CO2 avoided for relative scaling
  const maxCo2 = Math.max(...chartData.map((d) => Number(d.co2AvoidedKg) || 0), 1);

  return (
    <section id="co2-chart" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              CO₂e Avoided Over Time
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Visual history of avoided CO₂e emissions per recorded recycling activity.
            </p>
          </div>
          <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            Recent Logs
          </span>
        </div>

        {/* SVG/CSS Bar Visualization */}
        <div className="h-64 w-full flex items-end justify-between gap-2 sm:gap-4 pt-10 pb-6 px-2 sm:px-6 bg-slate-950/70 border border-slate-800/80 rounded-2xl relative">
          {/* Background grid lines */}
          <div className="absolute inset-x-6 top-8 border-b border-slate-800/50" />
          <div className="absolute inset-x-6 top-1/2 border-b border-slate-800/50" />

          {chartData.map((item, idx) => {
            const val = Number(item.co2AvoidedKg) || 0;
            const heightPercent = Math.max(12, Math.min(100, Math.round((val / maxCo2) * 100)));

            return (
              <div
                key={item.id || idx}
                className="flex-1 flex flex-col items-center h-full justify-end group relative"
              >
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-slate-800 text-emerald-300 font-bold text-xs py-1 px-2 rounded border border-emerald-500/30 whitespace-nowrap z-20 pointer-events-none shadow-lg">
                  {val.toFixed(2)} kg CO₂e ({item.paperTypeLabel})
                </div>

                {/* Value label above bar */}
                <span className="text-[10px] sm:text-xs font-bold text-emerald-400 mb-1">
                  {val.toFixed(1)}
                </span>

                {/* Animated bar */}
                <div
                  style={{ height: `${heightPercent}%` }}
                  className="w-full max-w-[40px] bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-lg transition-all duration-300 group-hover:from-emerald-500 group-hover:to-teal-300 shadow-md shadow-emerald-950"
                />

                {/* Date label under bar */}
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-2 truncate w-full text-center">
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
