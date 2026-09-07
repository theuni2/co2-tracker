export default function RecyclingTipsSection() {
  const tips = [
    {
      num: '01',
      title: 'Keep Paper Clean & Dry',
      text: 'Food grease or liquids weaken paper fibers and contaminate recycling batches. Dispose of heavily soiled parts before recycling.'
    },
    {
      num: '02',
      title: 'Flatten Cardboard Boxes',
      text: 'Breaking down packaging saves collection space, prevents transportation inefficiencies, and speeds up sorting facilities.'
    },
    {
      num: '03',
      title: 'Remove Non-Paper Materials',
      text: 'Strip away plastic film, metal spiral bindings, and heavy plastic adhesive tapes before placing items into paper bins.'
    },
    {
      num: '04',
      title: 'Contain Shredded Paper',
      text: 'Shredded paper has shorter fibers; group it inside a paper bag so small pieces don’t scatter or get lost during automated sorting.'
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Paper Recycling Best Practices
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto">
          Maximize the quality of recycled paper pulp by following clean sorting habits.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tips.map((item) => (
          <div
            key={item.num}
            className="p-6 bg-slate-900/70 border border-slate-800/80 rounded-3xl backdrop-blur-sm space-y-3 relative overflow-hidden"
          >
            <span className="text-4xl font-black text-slate-800 absolute right-4 top-4 select-none">
              {item.num}
            </span>
            <h3 className="text-lg font-bold text-white relative z-10">
              {item.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
