'use client';

export default function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* 1. Full-Width Animated GIF Background (User Specified Giphy WebP/GIF) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-45 mix-blend-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.giphy.com/XDiwD32MhnXg7fIMyx.webp'), url('https://media.giphy.com/media/XDiwD32MhnXg7fIMyx/giphy.gif')`,
          filter: 'contrast(115%) brightness(90%)'
        }}
      />

      {/* 2. Secondary Animated Overlay Texture for Depth */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay bg-cover bg-center animate-pulse-glow"
        style={{
          backgroundImage: `url('https://i.giphy.com/XDiwD32MhnXg7fIMyx.webp')`
        }}
      />

      {/* 3. Dark Gradient Vignette Overlay for High-Contrast Readable Text */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-slate-950/75 to-slate-950" />

      {/* 4. Ambient Breathing Glowing Sunbeam Radial Lights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[150px] animate-pulse-glow" />
    </div>
  );
}
