import Link from 'next/link';

export default function CallToActionBanner() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl shadow-emerald-950/50">
        <span className="text-4xl">📄 ➔ 🌍</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Ready to Calculate Your Recycling Impact?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Start logging your office paper, cardboard boxes, and textbooks today. See your exact CO₂e avoided in seconds.
        </p>
        <div className="pt-2">
          <Link
            href="/co2-tracker"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-lg rounded-2xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Launch CO₂ Calculator</span>
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
