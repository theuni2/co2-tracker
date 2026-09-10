'use client';

import { useState } from 'react';

export default function NGOPartnersSection() {
  const [filter, setFilter] = useState('all');

  const partners = [
    {
      id: 'library-child',
      category: 'libraries',
      name: 'Library For Every Child',
      logo: '📚',
      tag: 'Storybook Libraries',
      location: 'Rural & Suburban Schools',
      impact: '5,200+ Storybooks Donated',
      stat: '18 Libraries Established',
      description: 'Collects donated storybooks to build colorful reading corners and village libraries for young learners.'
    },
    {
      id: 'edu-for-all',
      category: 'students',
      name: 'Education For All Foundation',
      logo: '🎓',
      tag: 'Student Textbooks',
      location: 'Community Learning Centers',
      impact: '12,400+ Textbooks Redistributed',
      stat: '4,100+ Students Supported',
      description: 'Repurposes curriculum textbooks and reference guides for students who cannot afford new study materials.'
    },
    {
      id: 'bright-future',
      category: 'students',
      name: 'Bright Future Youth Alliance',
      logo: '✏️',
      tag: 'Notebooks & Stationery',
      location: 'Urban & Semi-Urban Slums',
      impact: '8,500+ Notebooks Reused',
      stat: '35 Partner Schools',
      description: 'Sorts partially used notebooks into clean, usable study notebooks for primary school children.'
    },
    {
      id: 'green-recycling',
      category: 'recycling',
      name: 'Green Paper Recycling Alliance',
      logo: '♻️',
      tag: 'Certified Recycling Mills',
      location: 'Industrial Processing Facilities',
      impact: '45,000+ kg Responsibly Recycled',
      stat: '141,000+ kg CO₂e Avoided',
      description: 'Processes damaged or un-reusable paper into recycled paper pulp, replacing virgin tree logging.'
    }
  ];

  const filteredPartners = filter === 'all'
    ? partners
    : partners.filter(p => p.category === filter);

  return (
    <section id="ngo-partners" className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-bold uppercase tracking-wide">
          <span>🤝 Impact Network</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Our NGO Partners & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Community Impact
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          We collaborate with non-profits, educators, and recycling networks to ensure every book finds a reader or gets responsibly repulped.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          All Partners ({partners.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('libraries')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            filter === 'libraries'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          📚 Storybook Libraries
        </button>
        <button
          type="button"
          onClick={() => setFilter('students')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            filter === 'students'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          🎓 Student Textbooks
        </button>
        <button
          type="button"
          onClick={() => setFilter('recycling')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            filter === 'recycling'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          ♻️ Recycling Mills
        </button>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPartners.map((item) => (
          <div
            key={item.id}
            className="group relative bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-4 backdrop-blur-md transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:scale-110 transition-transform">
                  {item.logo}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">{item.location}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-[11px] font-bold">
                {item.tag}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Stats row */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                <span>📍</span>
                <span>{item.impact}</span>
              </div>
              <span className="text-slate-300 font-extrabold bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                {item.stat}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Partner CTA Box */}
      <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 via-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-3xl text-center space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          Are You an NGO or Educational Institution?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Partner with Read2Rise to receive storybooks, textbooks, or donate unused school notebooks to community libraries.
        </p>
        <a
          href="mailto:partners@read2rise.org"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition-all cursor-pointer"
        >
          <span>Become an NGO Partner</span>
          <span>✉️</span>
        </a>
      </div>
    </section>
  );
}
