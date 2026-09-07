'use client';

import { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What does CO₂e mean?',
      answer: 'CO₂e stands for Carbon Dioxide Equivalent. It is a standard metric used in environmental science to express the impact of various greenhouse gases (like methane and nitrous oxide) in terms of the amount of CO₂ that would create the same warming effect.'
    },
    {
      question: 'How is paper sheet weight calculated?',
      answer: 'Sheet weights are based on standard paper industry benchmarks: A4 paper is estimated at 5 grams per sheet, A3 at 10 grams per sheet, and Letter size at 4.5 grams per sheet.'
    },
    {
      question: 'Is my recycling data stored on any server?',
      answer: 'No. EcoTracker is 100% client-side. All saved activity logs and cumulative impact statistics reside exclusively in your browser’s local storage (localStorage).'
    },
    {
      question: 'Why does paper recycling reduce greenhouse gas emissions?',
      answer: 'Recycling paper diverts organic waste from landfills (where decomposing paper releases methane) and reduces the heavy fossil fuel energy required to harvest virgin timber and process raw pulp.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Learn more about our methodology and data calculations.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left flex items-center justify-between font-bold text-white text-base sm:text-lg hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>{faq.question}</span>
              <span className="text-emerald-400 text-xl font-mono ml-4">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>

            {openIndex === idx && (
              <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
