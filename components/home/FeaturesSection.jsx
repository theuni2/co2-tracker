'use client';

import { useState } from 'react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'epa-warm',
      icon: '📊',
      badge: 'EPA WARM Methodology',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      title: 'Scientific EPA Lifecycle Factors',
      subtitle: 'Precision Carbon Offset Math',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'Calculations utilize verified emission offset factors published by the U.S. Environmental Protection Agency (EPA) Waste Reduction Model (WARM).',
      highlights: [
        'Accounts for methane off-gassing avoidance in landfills',
        'Includes net transportation and grid power overhead',
        'Updated continuously against international climate standards'
      ]
    },
    {
      id: 'flexible-input',
      icon: '📄',
      badge: 'Flexible Unit Engine',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      title: 'Log By Sheets or By Weight',
      subtitle: 'No Math Required',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
      description: 'Flexible inputs allow you to enter sheet counts (A4, A3, Letter, Notebooks) or exact paper weights in kilograms or pounds.',
      highlights: [
        'Pre-configured weight density for major paper types',
        'Supports bulk weight entries for offices & institutions',
        'Instant live preview of carbon offset before saving'
      ]
    },
    {
      id: 'privacy-first',
      icon: '🔒',
      badge: '100% Private & Local',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      title: 'Private & Account-Free',
      subtitle: 'Zero Cloud Tracking',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      description: 'No signup, passwords, or remote tracking required. Your recycling logs stay stored safely inside your browser.',
      highlights: [
        'Local storage persistence with zero third-party telemetry',
        'Export/import log backups in JSON format anytime',
        'Complete user autonomy over your environmental data'
      ]
    },
    {
      id: 'impact-analytics',
      icon: '📈',
      badge: 'Real-Time Insights',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      title: 'Cumulative Impact Analytics',
      subtitle: 'Visual Progress Tracking',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Visualize your total avoided greenhouse gas emissions over time with responsive, interactive timeline charts.',
      highlights: [
        'Tracks cumulative CO₂e avoided, trees saved & water conserved',
        'Breakdown by recycling vs reuse redistribution modes',
        'Milestone badges when reaching key eco achievements'
      ]
    },
    {
      id: 'dual-pipeline',
      icon: '🌱',
      badge: 'Social & Eco Impact',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      title: 'Dual Initiative Pipeline',
      subtitle: 'Reuse Before Recycling',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      description: 'Prioritizes redistributing usable books to underprivileged students through partner NGOs before sending damaged paper to recyclers.',
      highlights: [
        'Extends paper lifecycle through direct educational reuse',
        'Empowers local communities while avoiding net waste',
        'Detailed NGO distribution tracking per contribution batch'
      ]
    },
    {
      id: 'certifications',
      icon: '🏆',
      badge: 'ESG Ready',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      title: 'Shareable Eco Certificates',
      subtitle: 'Verified Impact Proof',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      description: 'Generate formatted environmental impact certificates to showcase your carbon reduction accomplishments on social media or ESG reports.',
      highlights: [
        'Downloadable high-resolution impact badges',
        'Formatted metrics for corporate CSR reporting',
        'Shareable public verification links'
      ]
    }
  ];

  return (
    <section id="features" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative">
      {/* Dynamic Animated Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Platform Capabilities</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineered for <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Scientific Carbon Precision
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          A modern, privacy-focused sustainability suite designed to transform everyday paper logging into transparent climate metrics.
        </p>
      </div>

      {/* Featured Interactive Spotlight Banner with Animation & Image */}
      {features[activeFeature] && (
        <div className="mb-14 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl group transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image Box with Animated Hover Effects */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group/img">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border backdrop-blur-md shadow-lg ${features[activeFeature].badgeColor}`}>
                  {features[activeFeature].badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Featured Module</p>
                  <p className="text-lg font-black">{features[activeFeature].title}</p>
                </div>
                <span className="text-3xl p-2.5 bg-slate-950/80 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-lg">
                  {features[activeFeature].icon}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">{features[activeFeature].subtitle}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{features[activeFeature].title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Highlights</p>
                <div className="space-y-2">
                  {features[activeFeature].highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-3 text-xs sm:text-sm bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </span>
                      <span className="text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Cards Grid with Image Headers & Micro-Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveFeature(idx)}
            className={`group cursor-pointer rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${
              activeFeature === idx
                ? 'bg-slate-900 border-emerald-500/80 ring-2 ring-emerald-500/30 shadow-emerald-500/10'
                : 'bg-slate-900/70 border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900'
            }`}
          >
            {/* Top Image Banner */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="text-2xl p-2 bg-slate-950/80 rounded-xl border border-slate-800/80 backdrop-blur-md shadow-lg inline-block">
                  {item.icon}
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border backdrop-blur-md ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                <span>{activeFeature === idx ? 'Currently Viewing' : 'Explore Feature'}</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
