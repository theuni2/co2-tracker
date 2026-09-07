export default function FeaturesSection() {
  const features = [
    {
      icon: '📊',
      title: 'EPA WARM Lifecycle Factors',
      description: 'Calculations utilize verified emission offset factors published by the U.S. EPA Waste Reduction Model (WARM).'
    },
    {
      icon: '📄',
      title: 'By Sheets or By Weight',
      description: 'Flexible inputs allow you to enter sheet counts (A4, A3, Letter) or exact paper weights in kilograms.'
    },
    {
      icon: '🔒',
      title: 'Private & Account-Free',
      description: 'No signup, passwords, or remote tracking. Your recycling logs stay stored safely inside your browser.'
    },
    {
      icon: '📈',
      title: 'Cumulative Impact Chart',
      description: 'Visualize your total avoided greenhouse gas emissions over time with responsive timeline charts.'
    }
  ];

  return (
    <section id="features" className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Why Use EcoTracker?
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto">
          A clean, scientific, and privacy-focused tool built to turn everyday paper recycling into transparent climate metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl backdrop-blur-md transition-all duration-200 space-y-3 shadow-lg"
          >
            <span className="text-3xl p-3 bg-slate-950/80 rounded-2xl border border-slate-800 inline-block mb-1">
              {item.icon}
            </span>
            <h3 className="text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
