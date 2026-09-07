export default function SavingMechanismSection() {
  const breakdownSteps = [
    {
      step: '1',
      title: 'Virgin Pulp Production Saved',
      description: 'Manufacturing new paper from virgin trees requires timber harvesting, chemical pulping, and high fossil-fuel energy consumption.',
      type: 'saved'
    },
    {
      step: '2',
      title: 'Landfill Methane Avoided',
      description: 'Paper decomposing anaerobically in landfills releases potent methane (CH₄) emissions into the atmosphere.',
      type: 'saved'
    },
    {
      step: '3',
      title: 'Recycling Process Energy Used',
      description: 'Collecting, transporting, and repulping recycled paper consumes some electricity and fuel.',
      type: 'cost'
    },
    {
      step: '=',
      title: 'Net CO₂e Avoided (Net Climate Savings)',
      description: 'The emissions saved by bypassing virgin production and landfill methane far outweigh recycling energy, yielding net climate savings.',
      type: 'net'
    }
  ];

  return (
    <section id="savings-mechanism" className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="space-y-6 text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
          <span>⚡ Lifecycle Science</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How Does Paper Recycling <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Actually Save CO₂e Emissions?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Recycling plants consume energy and fuel to repulp paper. So how do we achieve net carbon savings? Here is the lifecycle equation:
        </p>
      </div>

      {/* Lifecycle Formula Visualizer */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {breakdownSteps.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between ${
                item.type === 'saved'
                  ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                  : item.type === 'cost'
                  ? 'bg-slate-950/80 border-slate-800 text-slate-400'
                  : 'bg-gradient-to-b from-emerald-500 to-teal-500 text-slate-950 border-emerald-400 md:col-span-1 shadow-lg'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm ${
                    item.type === 'net' ? 'bg-slate-950 text-emerald-400' : 'bg-slate-800 text-slate-200'
                  }`}>
                    {item.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {item.type === 'saved' ? '+ Saved' : item.type === 'cost' ? '- Cost' : '= Net Saving'}
                  </span>
                </div>
                <h3 className={`font-extrabold text-base ${item.type === 'net' ? 'text-slate-950 text-lg' : 'text-white'}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-xs leading-relaxed ${item.type === 'net' ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Formula Math Box */}
        <div className="p-6 bg-slate-950/90 border border-emerald-500/20 rounded-2xl text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">The Net Savings Equation</p>
          <p className="text-base sm:text-xl font-mono font-extrabold text-white">
            <span className="text-emerald-400">Net CO₂e Avoided</span> = (Virgin Pulp Saved + Landfill Methane Avoided) − Recycling Process Energy
          </p>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto pt-1">
            EPA Waste Reduction Model (WARM) accounts for all transportation, energy consumption, and processing overhead to calculate the true net benefit.
          </p>
        </div>
      </div>
    </section>
  );
}
