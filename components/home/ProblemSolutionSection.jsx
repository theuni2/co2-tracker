export default function ProblemSolutionSection() {
  const problems = [
    {
      icon: '📚',
      tag: 'Social & Educational Gap',
      title: 'Book Shortages & Literacy Barriers',
      description: 'Millions of children and students in underserved communities lack access to essential storybooks, textbooks, and study notebooks, limiting educational opportunities.'
    },
    {
      icon: '🌍',
      tag: 'Environmental Crisis',
      title: 'Deforestation & Carbon Waste',
      description: 'Tons of usable books and recyclable paper are dumped into landfills each year, leading to unnecessary tree logging, high industrial energy use, and methane emissions.'
    }
  ];

  return (
    <section id="problem-solution" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-md">
          <span>🎯 Why We Are Doing This • Core Agenda</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Why Are We Doing This? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 animate-shimmer-text">
            Reuse First to Save Trees, Recycle Second to Protect Our Planet.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Our core agenda is simple: If a book or notebook can be used, we redistribute it to children and community libraries—directly saving trees, eliminating virgin paper manufacturing, and reducing CO₂ emissions. If paper is damaged or non-reusable, we recycle it responsibly, protecting the environment and saving carbon every step of the way.
        </p>
      </div>

      {/* The Dual Problem Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {problems.map((prob, idx) => (
          <div
            key={idx}
            className="p-8 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl backdrop-blur-md transition-all duration-300 space-y-4 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-4xl p-3.5 bg-slate-950 rounded-2xl border border-slate-800 group-hover:scale-110 transition-transform">
                {prob.icon}
              </span>
              <span className="px-3 py-1 bg-rose-500/10 text-rose-300 border border-rose-500/30 rounded-full text-xs font-bold uppercase">
                {prob.tag}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
              {prob.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {prob.description}
            </p>
          </div>
        ))}
      </div>

      {/* The Read2Rise Dual Solution Hero Box */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-950 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase">
            <span>✨ The Read2Rise Core Agenda</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Reuse Books First. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Recycle Paper Second. Save Trees & CO₂ Always.
            </span>
          </h3>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Every book and sheet of paper collected follows our strict sustainability rule: <strong className="text-emerald-400">reuse whenever possible</strong> to save living trees and slash maximum carbon emissions, and <strong className="text-teal-300">recycle when non-reusable</strong> to keep waste out of landfills and protect our environment.
          </p>
        </div>

        {/* Dual Outcome Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {/* Outcome 1: Reuse & Literacy */}
          <div className="p-6 bg-slate-950/90 border border-emerald-500/30 rounded-2xl space-y-3 shadow-lg">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">📚</span>
              <div>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">Priority 1 • Reuse Usable Books</span>
                <h4 className="text-lg font-bold text-white">Save Trees & Boost Literacy</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If a book or notebook can be read, we redistribute it to students and community libraries. Reusing directly saves trees from logging, avoids virgin paper manufacturing emissions, and empowers children.
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-bold text-emerald-400">
              🌳 100% Virgin Paper Displaced & Maximum CO₂ Saved
            </div>
          </div>

          {/* Outcome 2: Recycling & Environment */}
          <div className="p-6 bg-slate-950/90 border border-teal-500/30 rounded-2xl space-y-3 shadow-lg">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🌿</span>
              <div>
                <span className="text-xs font-black text-teal-300 uppercase tracking-wider">Priority 2 • Responsible Recycling</span>
                <h4 className="text-lg font-bold text-white">Protect Environment & Save Carbon</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If paper is torn or non-reusable, we route it to certified paper recycling mills. Recycling repulps paper fibers without cutting trees, saving industrial energy, water, and landfill emissions.
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-bold text-teal-300">
              ♻️ Zero Landfill Waste & EPA CO₂ Offset Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
