'use client';

import { useState } from 'react';
import { PAPER_TYPES, SHEET_SIZES } from '../../lib/co2Factors.js';
import { calculateCO2Impact } from '../../lib/co2Calculator.js';

export default function CO2Calculator({ onCalculate }) {
  const [approachMode, setApproachMode] = useState('reuse'); // 'reuse' | 'recycle'
  const [method, setMethod] = useState('sheets'); // 'sheets' | 'weight'
  const [paperType, setPaperType] = useState('officePaper');
  const [sheetSize, setSheetSize] = useState('A4');
  const [sheets, setSheets] = useState('500');
  const [weightKg, setWeightKg] = useState('10');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const result = calculateCO2Impact({
      approachMode,
      method,
      sheets: method === 'sheets' ? sheets : null,
      sheetSize: method === 'sheets' ? sheetSize : null,
      directWeightKg: method === 'weight' ? weightKg : null,
      paperType
    });

    if (!result.success) {
      setError(result.error);
      return;
    }

    if (onCalculate) {
      onCalculate(result);
    }
  };

  return (
    <section id="co2-calculator" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="relative bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/40">
        
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-2xl font-bold">
            ⚡
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dual CO₂ Impact Calculator
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Calculate avoided carbon emissions for both <strong className="text-emerald-400">Redistribution & Reuse</strong> and <strong className="text-teal-300">Responsible Recycling</strong>.
            </p>
          </div>
        </div>

        {/* Approach Mode Selector (Redistribute vs Recycle) */}
        <div className="mb-8 p-4 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-3">
          <label className="block text-sm font-bold text-slate-300">
            Select Initiative Approach Mode
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => { setApproachMode('reuse'); setError(null); }}
              className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                approachMode === 'reuse'
                  ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between font-extrabold text-base mb-1">
                <span>📚 Redistribute & Reuse</span>
                {approachMode === 'reuse' && <span className="text-xs bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-black">SELECTED</span>}
              </div>
              <p className="text-xs text-slate-300">
                Storybooks & textbooks donated to students and libraries. Displaces 100% new virgin paper.
              </p>
            </button>

            <button
              type="button"
              onClick={() => { setApproachMode('recycle'); setError(null); }}
              className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                approachMode === 'recycle'
                  ? 'bg-teal-500/15 border-teal-500 text-white shadow-lg shadow-teal-500/10'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between font-extrabold text-base mb-1">
                <span>♻️ Responsible Recycle</span>
                {approachMode === 'recycle' && <span className="text-xs bg-teal-400 text-slate-950 px-2 py-0.5 rounded font-black">SELECTED</span>}
              </div>
              <p className="text-xs text-slate-300">
                Non-reusable paper repulped in recycling mills. EPA WARM lifecycle emissions offset.
              </p>
            </button>
          </div>
        </div>

        {/* Calculation Method Toggle (By Sheets vs By Weight) */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-300 mb-3">
            Calculation Method
          </label>
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => { setMethod('sheets'); setError(null); }}
              className={`py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                method === 'sheets'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              📄 By Sheets
            </button>
            <button
              type="button"
              onClick={() => { setMethod('weight'); setError(null); }}
              className={`py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                method === 'weight'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              秤 By Weight (kg)
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Paper Type Selection */}
          <div>
            <label htmlFor="paper-type" className="block text-sm font-semibold text-slate-300 mb-2">
              Paper Material Category
            </label>
            <select
              id="paper-type"
              value={paperType}
              onChange={(e) => setPaperType(e.target.value)}
              className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3.5 px-4 text-white text-base transition-colors cursor-pointer"
            >
              {PAPER_TYPES.map((type) => {
                const factorVal = approachMode === 'reuse' ? type.reuseFactor : type.recycleFactor;
                return (
                  <option key={type.id} value={type.id}>
                    {type.label} ({factorVal} kg CO₂e / kg {approachMode === 'reuse' ? 'reused' : 'recycled'})
                  </option>
                );
              })}
            </select>
          </div>

          {/* Conditional Input: By Sheets vs By Weight */}
          {method === 'sheets' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sheet-count" className="block text-sm font-semibold text-slate-300 mb-2">
                  Number of Sheets / Pages
                </label>
                <input
                  id="sheet-count"
                  type="number"
                  min="1"
                  step="1"
                  placeholder="e.g. 500"
                  value={sheets}
                  onChange={(e) => setSheets(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3 px-4 text-white placeholder-slate-500 text-base transition-colors"
                />
              </div>
              <div>
                <label htmlFor="sheet-size" className="block text-sm font-semibold text-slate-300 mb-2">
                  Sheet Format Size
                </label>
                <select
                  id="sheet-size"
                  value={sheetSize}
                  onChange={(e) => setSheetSize(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3 px-4 text-white text-base transition-colors cursor-pointer"
                >
                  {SHEET_SIZES.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.label} - {size.weightGrams}g/sheet
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="paper-weight" className="block text-sm font-semibold text-slate-300 mb-2">
                Paper Weight (kg)
              </label>
              <div className="relative">
                <input
                  id="paper-weight"
                  type="number"
                  min="0.1"
                  step="0.1"
                  placeholder="e.g. 10"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3 px-4 pr-16 text-white placeholder-slate-500 text-base transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-emerald-400 pointer-events-none">
                  kg
                </span>
              </div>
            </div>
          )}

          {/* Validation Error Message */}
          {error && (
            <div role="alert" className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start space-x-3 text-red-300 text-sm">
              <span className="text-lg">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Submit CTA Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-lg rounded-2xl shadow-xl shadow-emerald-500/25 transition-all transform active:scale-[0.99] cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Calculate {approachMode === 'reuse' ? 'Reuse & Redistribution' : 'Recycling'} Impact</span>
            <span className="text-xl">➔</span>
          </button>
        </form>
      </div>
    </section>
  );
}
