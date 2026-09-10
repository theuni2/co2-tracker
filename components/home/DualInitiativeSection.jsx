'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DualInitiativeSection() {
  const [activeTab, setActiveTab] = useState('redistribution');

  const modeImages = {
    redistribution: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    recycling: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80'
  };

  return (
    <section id="initiative-modes" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-md">
          <span>🌟 Read2Rise Core Strategy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Our Two-Mode <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 animate-shimmer-text">
            Sustainability Initiative
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          We prioritize <strong className="text-emerald-400">redistribution & reuse</strong> through NGO partners to maximize social impact. Paper that cannot be reused is <strong className="text-teal-300">responsibly recycled</strong>.
        </p>
      </div>

      {/* Mode Selector Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveTab('redistribution')}
            className={`py-3.5 px-6 sm:px-8 rounded-xl font-black text-sm sm:text-base transition-all duration-300 cursor-pointer flex items-center space-x-2.5 ${
              activeTab === 'redistribution'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span className="text-lg">📚</span>
            <span>Mode 1: Redistribution & Reuse</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('recycling')}
            className={`py-3.5 px-6 sm:px-8 rounded-xl font-black text-sm sm:text-base transition-all duration-300 cursor-pointer flex items-center space-x-2.5 ${
              activeTab === 'recycling'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span className="text-lg">♻️</span>
            <span>Mode 2: Responsible Recycling</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Visual Image & Feature Highlight (7 Columns) */}
        <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-emerald-500/30 bg-slate-900 shadow-2xl">
          {/* Animated Background Image Container */}
          <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
            <img
              src={modeImages[activeTab]}
              alt={activeTab === 'redistribution' ? 'NGO Book Redistribution' : 'Responsible Paper Recycling'}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.75]"
            />

            {/* Dark Vignette Overlay for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="px-4 py-1.5 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{activeTab === 'redistribution' ? 'Primary Priority • NGO Network' : 'Secondary Fallback • EPA Standard'}</span>
              </span>
              <span className="text-2xl p-2 bg-slate-950/80 rounded-2xl border border-slate-800 backdrop-blur-md">
                {activeTab === 'redistribution' ? '📚' : '♻️'}
              </span>
            </div>

            {/* Bottom Card Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-4 z-10">
              {activeTab === 'redistribution' ? (
                <div className="space-y-3 animate-fadeIn">
                  <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                    NGO Redistribution & Book Reuse
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl">
                    Storybooks create vibrant new community libraries, while textbooks and notebooks are sorted and delivered directly to students in need.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-slate-950/90 p-3 rounded-xl border border-slate-800 backdrop-blur-md flex items-center space-x-2">
                      <span className="text-emerald-400 font-bold text-base">✓</span>
                      <span className="text-xs text-slate-200 font-medium"><strong className="text-white">Storybooks:</strong> Donated to Libraries</span>
                    </div>
                    <div className="bg-slate-950/90 p-3 rounded-xl border border-slate-800 backdrop-blur-md flex items-center space-x-2">
                      <span className="text-emerald-400 font-bold text-base">✓</span>
                      <span className="text-xs text-slate-200 font-medium"><strong className="text-white">Textbooks:</strong> Delivered to Students</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-xs">
                    <span className="text-slate-400 font-medium">Environmental Impact</span>
                    <span className="text-emerald-400 font-black">100% Virgin Paper Displaced</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 animate-fadeIn">
                  <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                    Responsible Paper Recycling
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl">
                    Materials that are torn or non-reusable are routed to certified recycling mills to produce fresh paper pulp without cutting trees.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-slate-950/90 p-3 rounded-xl border border-slate-800 backdrop-blur-md flex items-center space-x-2">
                      <span className="text-teal-300 font-bold text-base">✓</span>
                      <span className="text-xs text-slate-200 font-medium"><strong className="text-white">Zero Dumps:</strong> Landfill Methane Stopped</span>
                    </div>
                    <div className="bg-slate-950/90 p-3 rounded-xl border border-slate-800 backdrop-blur-md flex items-center space-x-2">
                      <span className="text-teal-300 font-bold text-base">✓</span>
                      <span className="text-xs text-slate-200 font-medium"><strong className="text-white">Resource Savings:</strong> Less Water & Power</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-xs">
                    <span className="text-slate-400 font-medium">Environmental Offset</span>
                    <span className="text-teal-300 font-black">EPA WARM Offset Verified</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Animated Process Steps (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <h3 className="text-xl font-black text-white flex items-center space-x-2">
                <span>🔄 3-Step Process Flow</span>
              </h3>
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-extrabold">
                Live Journey
              </span>
            </div>

            <div className="space-y-4 relative">
              {/* Step 1 */}
              <div className="flex items-start space-x-4 p-4 bg-slate-950/90 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors group">
                <span className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  1
                </span>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Collection & Sorting</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Paper, books, and notebooks are collected from schools, offices, and homes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-emerald-950/50 to-slate-950 rounded-2xl border border-emerald-500/40 hover:border-emerald-400 transition-colors group">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-emerald-500/20">
                  2
                </span>
                <div>
                  <h4 className="font-extrabold text-emerald-300 text-sm">Condition Check & NGO Routing</h4>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    Usable books move to <strong>NGO Redistribution</strong>; non-reusables move to <strong>Recycling</strong>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 p-4 bg-slate-950/90 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-colors group">
                <span className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 font-black flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  3
                </span>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Calculate & Track Dual Impact</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Calculate CO₂e avoided for both Reuse and Recycle modes using our dual tracker.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/co2-tracker"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <span>Calculate My Dual Impact</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
