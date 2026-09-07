'use client';

export default function RecyclingHistory({ activities, onDeleteActivity }) {
  if (!activities || activities.length === 0) {
    return null; // When empty, ImpactSummary already informs the user
  }

  return (
    <section id="recycling-history" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            My Recycling History
          </h2>
          <p className="text-slate-400 text-sm">
            Saved logs stored locally in your browser.
          </p>
        </div>
        <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-bold">
          {activities.length} {activities.length === 1 ? 'entry' : 'entries'}
        </span>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950/80 text-xs uppercase font-bold text-slate-400 border-b border-slate-800">
            <tr>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-4">Paper Type</th>
              <th scope="col" className="px-6 py-4">Quantity / Weight</th>
              <th scope="col" className="px-6 py-4">CO₂e Avoided</th>
              <th scope="col" className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {activities.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 font-semibold text-white">
                  {item.date}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
                    {item.paperTypeLabel}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-200">
                  {item.sheets ? (
                    <span>{item.sheets.toLocaleString()} sheets ({item.weightKg} kg)</span>
                  ) : (
                    <span>{item.weightKg} kg</span>
                  )}
                </td>
                <td className="px-6 py-4 font-extrabold text-emerald-400">
                  {Number(item.co2AvoidedKg).toFixed(2)} kg
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => onDeleteActivity(item.id)}
                    aria-label={`Delete activity from ${item.date}`}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                    title="Delete entry"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden space-y-4">
        {activities.map((item) => (
          <div key={item.id} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 relative shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">{item.date}</span>
              <button
                type="button"
                onClick={() => onDeleteActivity(item.id)}
                className="text-xs text-red-400 bg-red-500/10 px-2.5 py-1 rounded-lg hover:bg-red-500/20 font-semibold"
              >
                Delete
              </button>
            </div>
            <div>
              <p className="text-base font-bold text-white mb-1">{item.paperTypeLabel}</p>
              <p className="text-xs text-slate-400">
                {item.sheets ? `${item.sheets.toLocaleString()} sheets (${item.weightKg} kg)` : `${item.weightKg} kg`}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-medium">CO₂e Avoided</span>
              <span className="text-lg font-black text-emerald-400">{Number(item.co2AvoidedKg).toFixed(2)} kg</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
