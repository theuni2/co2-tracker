import Link from 'next/link';

export default function Read2RiseLogo({ size = 'medium', className = '' }) {
  const iconSizes = {
    small: 'w-8 h-8 text-base',
    medium: 'w-10 h-10 text-xl',
    large: 'w-12 h-12 text-2xl'
  };

  const textSizes = {
    small: 'text-lg',
    medium: 'text-xl sm:text-2xl',
    large: 'text-2xl sm:text-3xl'
  };

  return (
    <Link href="/" className={`inline-flex items-center space-x-3 group ${className}`}>
      {/* Animated Glowing Logo Icon */}
      <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:shadow-emerald-500/40 transition-all duration-300 ${iconSizes[size] || iconSizes.medium}`}>
        <span className="relative z-10 transform group-hover:rotate-6 transition-transform">
          📖
        </span>
        <span className="absolute -top-1 -right-1 text-xs animate-bounce">
          🌱
        </span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-black tracking-tight text-white leading-none ${textSizes[size] || textSizes.medium}`}>
          Read<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">2Rise</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/90 leading-tight">
          Reuse • Redistribute • Recycle
        </span>
      </div>
    </Link>
  );
}
