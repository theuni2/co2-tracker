export default function NGOMissionSection() {
  const pillars = [
    {
      icon: '📚',
      title: 'Storybooks for Libraries',
      description: 'Donated storybooks help set up brand new community libraries and enrich existing reading spaces for children.'
    },
    {
      icon: '🎓',
      title: 'Textbooks & Notebooks for Students',
      description: 'Usable textbooks and notebooks are sorted and delivered to students and schools in underserved communities.'
    },
    {
      icon: '♻️',
      title: 'Responsible Recycling',
      description: 'Paper that cannot be reused is responsibly recycled into paper pulp, conserving energy and reducing landfill waste.'
    }
  ];

  return (
    <section id="ngo-mission" className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-12 space-y-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow backdrop effect */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <span>🤝 Our NGO Partner Network</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reuse & Redistribute First, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Recycle Responsibly
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Wherever possible, collected books and notebooks are reused, repurposed, and redistributed through our NGO partners. Materials that cannot be reused are diverted to responsible recycling mills to lower carbon emissions.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl p-6 space-y-3 transition-colors shadow-lg"
            >
              <span className="text-3xl p-3 bg-slate-900 rounded-xl border border-slate-800 inline-block mb-1">
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow Banner */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Collecting ➔ Sorting ➔ Redistributing to Libraries & Students ➔ Recycling Non-reusables</span>
          </div>
          <span className="text-emerald-400 font-bold">100% Circular Mission</span>
        </div>
      </div>
    </section>
  );
}
