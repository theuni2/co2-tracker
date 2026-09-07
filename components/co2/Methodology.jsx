'use client';

export default function Methodology() {
  const steps = [
    {
      num: '1',
      title: 'Enter Quantity',
      desc: 'Enter the number of paper sheets or direct paper weight in kilograms.'
    },
    {
      num: '2',
      title: 'Weight Estimation',
      desc: 'If sheets are entered, paper weight is estimated based on standard sheet size factors (e.g. A4 = 5g/sheet).'
    },
    {
      num: '3',
      title: 'Factor Multiplication',
      desc: 'Paper weight is multiplied by the specific lifecycle emission factor for that paper category.'
    },
    {
      num: '4',
      title: 'Net CO₂e Avoided',
      desc: 'The final result represents the estimated net CO₂e avoided by diverting paper from landfills and replacing virgin pulp.'
    }
  ];

  return (
    <section id="methodology" className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6">
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-sm">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            How Do We Calculate CO₂e Avoided?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Our calculations use verified greenhouse gas emission offset factors for paper recycling based on EPA WARM lifecycle assessments.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 flex space-x-4 items-start"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-extrabold text-sm">
                {step.num}
              </span>
              <div>
                <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NGO Reuse & Recycling Mechanism Note */}
        <div className="p-5 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl space-y-2">
          <h3 className="text-emerald-400 font-bold text-sm flex items-center space-x-2">
            <span>📚 Reuse First & Net Savings Mechanism</span>
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Wherever possible, storybooks, textbooks, and notebooks are repurposed and redistributed to community libraries and students through NGO partners. Material that cannot be reused is responsibly recycled.
            Although recycling consumes energy, avoiding virgin timber pulping and landfill methane emissions yields a <strong>net positive CO₂e saving</strong>.
          </p>
        </div>

        {/* Data Source & Disclaimer */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs sm:text-sm text-slate-400">
          <p className="font-semibold text-slate-300">
            📊 <span className="font-bold text-white">Data source:</span> U.S. Environmental Protection Agency (EPA), Waste Reduction Model (WARM).
          </p>
          <p className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-slate-400 leading-relaxed text-xs">
            <strong className="text-slate-300">Disclaimer:</strong> These calculations provide an estimate of <strong className="text-emerald-400">CO₂e avoided</strong> based on standard lifecycle emission factors. Actual environmental impacts may vary depending on paper type, recycling process, transportation, and local conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
