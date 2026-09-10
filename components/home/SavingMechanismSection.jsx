'use client';

import { useState } from 'react';

export default function SavingMechanismSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      value: '17 Trees',
      label: 'Preserved per Ton',
      description: 'Prevents deforestation & maintains natural carbon sequestration sinks.'
    },
    {
      value: '28x',
      label: 'Methane Reduction',
      description: 'Stops paper decomposing anaerobically into potent greenhouse gas in landfills.'
    },
    {
      value: '60%',
      label: 'Less Energy Consumed',
      description: 'Repulping requires significantly lower electricity than chemical timber pulping.'
    },
    {
      value: '~3.5 Tons',
      label: 'Net CO₂e Avoided',
      description: 'Calculated using EPA Waste Reduction Model (WARM) methodology per ton recycled.'
    }
  ];

  const breakdownStages = [
    {
      id: 'virgin-pulp',
      stepNumber: '01',
      title: 'Virgin Pulp Production Saved',
      badge: '+2.3 t CO₂e Saved',
      badgeType: 'saved',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
      summary: 'Manufacturing paper from fresh timber requires harvesting trees, heavy transportation, and chemical pulping at high temperatures.',
      details: [
        'Harvesting & Deforestation: Mature trees absorb hundreds of kilograms of carbon. Cutting them down destroys natural carbon sinks.',
        'Kraft Chemical Pulping: Treating wood chips with caustic chemicals at 170°C consumes massive fossil-fuel energy.',
        'Bleaching & Washing: High water consumption and heavy industrial emissions released during pulp whitening.'
      ]
    },
    {
      id: 'landfill-methane',
      stepNumber: '02',
      title: 'Landfill Methane Avoided',
      badge: '+1.8 t CO₂e Saved',
      badgeType: 'saved',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80',
      summary: 'When paper decomposes anaerobically trapped in landfills without oxygen, microbes convert cellulose into methane (CH₄) gas.',
      details: [
        'Methane Potency: Methane traps 28 times more heat than carbon dioxide over a 100-year timescale.',
        'Long-term Off-gassing: Uncaptured landfill emissions leach into the atmosphere over decades.',
        'Zero Landfill Diversion: Recycling completely eliminates this anaerobic decomposition phase.'
      ]
    },
    {
      id: 'recycling-process',
      stepNumber: '03',
      title: 'Recycling Process Energy Overhead',
      badge: '-0.8 t CO₂e Cost',
      badgeType: 'cost',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80',
      summary: 'Recycling is not zero-energy. Collection trucks, de-inking processes, and water repulping consume electricity and fuel.',
      details: [
        'Logistics & Transport: Curb-side collection and transportation to sorting facilities.',
        'Mechanical Repulping: Mixing post-consumer paper with water to break fibers back into slurry.',
        'De-inking & Screening: Filtering out inks, adhesives, and staples to produce clean recycled fiber.'
      ]
    },
    {
      id: 'net-savings',
      stepNumber: '04',
      title: 'Net Climate Benefit Realized',
      badge: '= ~3.3-3.8 t CO₂e Net Savings',
      badgeType: 'net',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
      summary: 'Summing saved virgin logging emissions and avoided landfill methane minus recycling energy yields significant net positive climate savings.',
      details: [
        'Positive Net Balance: Bypassing virgin timber and preventing methane far outweighs the energy needed to recycle.',
        'Circular Economy Loop: Fibers can be recycled up to 5-7 times before becoming too short.',
        'Quantified Carbon Credits: Every kilogram recorded in Read2Rise translates directly to verified CO₂e avoidance.'
      ]
    }
  ];

  const comparisonData = [
    { metric: 'Virgin Trees Destroyed', virgin: '17-24 Trees / Ton', recycled: '0 Trees', impact: '100% Tree Preservation' },
    { metric: 'Energy Consumption', virgin: '9,500 kWh / Ton', recycled: '3,800 kWh / Ton', impact: '60% Energy Saved' },
    { metric: 'Water Usage', virgin: '26,000 Liters / Ton', recycled: '13,000 Liters / Ton', impact: '50% Water Conserved' },
    { metric: 'Greenhouse Gas Footprint', virgin: '3.3 kg CO₂e / kg Paper', recycled: '0.8 kg CO₂e / kg Paper', impact: '75% Lower Carbon Emissions' },
    { metric: 'Landfill Space Occupied', virgin: '3.3 cubic meters', recycled: '0 cubic meters', impact: '100% Waste Diverted' }
  ];

  const openStage = (idx) => {
    setActiveStage(idx);
    setIsModalOpen(true);
  };

  const handleStageSelect = (idx) => {
    setActiveStage(idx);
    const elem = document.getElementById('featured-stage-view');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="savings-mechanism" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md">
          <span>⚡ Lifecycle Science & WARM Model</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How Does Paper Recycling <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Actually Save CO₂e Emissions?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Recycling plants consume energy and fuel to repulp paper. So how do we achieve massive net carbon savings? Explore each stage of the lifecycle equation below.
        </p>
      </div>

      {/* Metric Highlight Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl space-y-2 group">
            <p className="text-3xl font-black text-emerald-400 group-hover:scale-105 transition-transform duration-300">{stat.value}</p>
            <p className="text-sm font-bold text-white uppercase tracking-wider">{stat.label}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Visual Interactive Lifecycle Stages */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
        
        {/* Stage Tabs Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h3 className="text-2xl font-black text-white">Paper Lifecycle Breakdown</h3>
            <p className="text-slate-400 text-sm">Select any stage below to inspect the carbon mechanics and visual evidence.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {breakdownStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${
                  activeStage === idx
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>Stage {stage.stepNumber}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stage Featured Display */}
        {breakdownStages[activeStage] && (
          <div id="featured-stage-view" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 transition-all">
            {/* Image Container */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-2xl group border border-slate-800 shadow-2xl h-72 sm:h-96">
              <img
                src={breakdownStages[activeStage].image}
                alt={breakdownStages[activeStage].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg ${
                  breakdownStages[activeStage].badgeType === 'saved'
                    ? 'bg-emerald-500 text-slate-950'
                    : breakdownStages[activeStage].badgeType === 'cost'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950'
                }`}>
                  {breakdownStages[activeStage].badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  Stage {breakdownStages[activeStage].stepNumber} of 04
                </span>
                <p className="text-xl font-black text-white">{breakdownStages[activeStage].title}</p>
              </div>
            </div>

            {/* Details Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white">{breakdownStages[activeStage].title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  {breakdownStages[activeStage].summary}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Key Impact Factors</p>
                <div className="space-y-2.5">
                  {breakdownStages[activeStage].details.map((detail, dIdx) => {
                    const [head, ...rest] = detail.split(':');
                    return (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm bg-slate-900/90 border border-slate-800/80 p-3.5 rounded-xl">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <p className="text-slate-300 leading-snug">
                          <strong className="text-white font-bold">{head}:</strong>{rest.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>🔍 Open Full Science Modal</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        )}

        {/* 4-Card Stage Overview Grid with Active Button */}
        <div className="space-y-4 pt-4">
          <h4 className="text-lg font-black text-white flex items-center justify-between">
            <span>Visual Lifecycle Pathway</span>
            <span className="text-xs font-semibold text-slate-400">Click any card to explore</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {breakdownStages.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openStage(idx)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  activeStage === idx
                    ? 'border-emerald-500 bg-slate-900 shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/30 scale-[1.02]'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/60 hover:-translate-y-1'
                }`}
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-slate-950/90 border border-slate-700 text-emerald-400 font-black text-xs flex items-center justify-center shadow-md">
                    {item.stepNumber}
                  </span>
                  <span className={`absolute top-2.5 right-2.5 px-2 py-1 rounded-md text-[10px] font-extrabold uppercase ${
                    item.badgeType === 'saved' ? 'bg-emerald-500/90 text-slate-950' : item.badgeType === 'cost' ? 'bg-amber-500/90 text-slate-950' : 'bg-teal-400 text-slate-950'
                  }`}>
                    {item.badgeType === 'saved' ? '+ Saved' : item.badgeType === 'cost' ? '- Cost' : '= Net'}
                  </span>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h5 className="font-extrabold text-sm text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openStage(idx);
                    }}
                    className="w-full py-2 px-3 bg-slate-900 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-slate-950 border border-emerald-500/30 group-hover:border-emerald-500 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span>Explore Stage</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formula Math Box */}
        <div className="p-6 sm:p-8 bg-slate-950 border border-emerald-500/30 rounded-2xl text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold">The Net Carbon Equation</p>
            <h4 className="text-xl sm:text-2xl font-black text-white">Universal Climate Accounting Formula</h4>
          </div>

          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl inline-block max-w-full">
            <p className="text-sm sm:text-xl font-mono font-extrabold text-white leading-relaxed">
              <span className="text-emerald-400">Net Avoided CO₂e</span> = (<span className="text-teal-300">Virgin Pulp Saved</span> + <span className="text-emerald-300">Landfill CH₄ Avoided</span>) − <span className="text-amber-400">Recycling Energy Overhead</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our platform strictly follows the EPA Waste Reduction Model (WARM) framework, accounting for transport distance, grid energy carbon intensity, and methane capture ratios for transparent carbon accounting.
          </p>
        </div>
      </div>

      {/* Comparative Data Matrix */}
      <div className="mt-14 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Virgin vs. Recycled Paper Environmental Footprint</h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">Direct resource consumption comparison per metric ton of paper produced.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950 text-slate-300 font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Environmental Metric</th>
                <th className="py-4 px-6 text-rose-400">Virgin Paper (Raw Timber)</th>
                <th className="py-4 px-6 text-emerald-400">Recycled Paper (Read2Rise)</th>
                <th className="py-4 px-6 text-teal-300">Net Environmental Dividend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {comparisonData.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{row.metric}</span>
                  </td>
                  <td className="py-4 px-6 font-mono text-slate-400">{row.virgin}</td>
                  <td className="py-4 px-6 font-mono text-emerald-400 font-bold">{row.recycled}</td>
                  <td className="py-4 px-6 font-bold text-teal-300">
                    <span className="px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30">
                      {row.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FULL SCIENCE INTERACTIVE STAGE DETAIL MODAL */}
      {isModalOpen && breakdownStages[activeStage] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Modal Top Controls */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center">
                  {breakdownStages[activeStage].stepNumber}
                </span>
                <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">
                  Stage {breakdownStages[activeStage].stepNumber} Scientific Deep-Dive
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-lg font-bold transition-colors cursor-pointer"
                title="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-800">
              <img
                src={breakdownStages[activeStage].image}
                alt={breakdownStages[activeStage].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase ${
                  breakdownStages[activeStage].badgeType === 'saved' ? 'bg-emerald-500 text-slate-950' : breakdownStages[activeStage].badgeType === 'cost' ? 'bg-amber-500 text-slate-950' : 'bg-teal-400 text-slate-950'
                }`}>
                  {breakdownStages[activeStage].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">{breakdownStages[activeStage].title}</h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                {breakdownStages[activeStage].summary}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Detailed Science & Lifecycle Mechanisms</h4>
                <div className="space-y-3">
                  {breakdownStages[activeStage].details.map((detail, dIdx) => {
                    const [head, ...rest] = detail.split(':');
                    return (
                      <div key={dIdx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                        <p className="font-bold text-white text-sm sm:text-base flex items-center space-x-2">
                          <span className="text-emerald-400">⚡</span>
                          <span>{head}</span>
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                          {rest.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Bottom Controls */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStage((activeStage - 1 + breakdownStages.length) % breakdownStages.length)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                ← Previous Stage
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-lg"
              >
                Done
              </button>

              <button
                type="button"
                onClick={() => setActiveStage((activeStage + 1) % breakdownStages.length)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Next Stage →
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
