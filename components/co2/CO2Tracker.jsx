'use client';

import { useState, useEffect } from 'react';
import CO2Calculator from './CO2Calculator.jsx';
import CO2Result from './CO2Result.jsx';
import ImpactSummary from './ImpactSummary.jsx';
import RecyclingHistory from './RecyclingHistory.jsx';
import CO2Chart from './CO2Chart.jsx';
import Methodology from './Methodology.jsx';
import { getActivities, saveActivity, deleteActivity, getCumulativeImpact } from '../../lib/co2Storage.js';

export default function CO2Tracker() {
  const [activities, setActivities] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load activities from localStorage on mount
  useEffect(() => {
    const loaded = getActivities();
    setActivities(loaded);
    setIsLoaded(true);
  }, []);

  const handleCalculate = (result) => {
    setCurrentResult(result);
    setIsSaved(false);

    // Smooth scroll down to result
    setTimeout(() => {
      const resultElem = document.getElementById('co2-result');
      if (resultElem) {
        resultElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const handleSaveActivity = () => {
    if (!currentResult || isSaved) return;

    const updated = saveActivity(currentResult);
    setActivities(updated);
    setIsSaved(true);
  };

  const handleDeleteActivity = (id) => {
    const updated = deleteActivity(id);
    setActivities(updated);
  };

  const scrollToCalculator = () => {
    const calcElem = document.getElementById('co2-calculator');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totals = getCumulativeImpact(activities);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-slate-950">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 space-y-12 pb-16">
        {/* HERO SECTION */}
        <section className="relative pt-12 sm:pt-20 pb-8 px-4 sm:px-6 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-emerald-950/50">
            <span>🌿 CO₂ Paper Recycling Tracker</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Turn Paper Recycling Into <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Measurable Climate Impact
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Track the paper you recycle and see the estimated CO₂e emissions you help avoid.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={scrollToCalculator}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-lg rounded-2xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Calculate My Impact</span>
              <span className="text-xl">↓</span>
            </button>
          </div>
        </section>

        {/* CALCULATOR */}
        <CO2Calculator onCalculate={handleCalculate} />

        {/* RESULT */}
        {currentResult && (
          <CO2Result
            result={currentResult}
            onSaveActivity={handleSaveActivity}
            isSaved={isSaved}
          />
        )}

        {/* CUMULATIVE IMPACT SUMMARY */}
        {isLoaded && <ImpactSummary totals={totals} />}

        {/* IMPACT CHART */}
        {isLoaded && <CO2Chart activities={activities} />}

        {/* RECYCLING HISTORY */}
        {isLoaded && (
          <RecyclingHistory
            activities={activities}
            onDeleteActivity={handleDeleteActivity}
          />
        )}

        {/* METHODOLOGY & DISCLAIMER */}
        <Methodology />
      </div>
    </div>
  );
}
