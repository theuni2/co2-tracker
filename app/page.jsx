import HomeHero from '../components/home/HomeHero.jsx';
import ProblemSolutionSection from '../components/home/ProblemSolutionSection.jsx';
import DualInitiativeSection from '../components/home/DualInitiativeSection.jsx';
import NGOPartnersSection from '../components/home/NGOPartnersSection.jsx';
import SavingMechanismSection from '../components/home/SavingMechanismSection.jsx';
import FeaturesSection from '../components/home/FeaturesSection.jsx';
import PaperGuideSection from '../components/home/PaperGuideSection.jsx';
import RecyclingTipsSection from '../components/home/RecyclingTipsSection.jsx';
import FAQSection from '../components/home/FAQSection.jsx';
import CallToActionBanner from '../components/home/CallToActionBanner.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-slate-950">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 space-y-16 pb-20">
        <HomeHero />
        <ProblemSolutionSection />
        <DualInitiativeSection />
        <NGOPartnersSection />
        <SavingMechanismSection />
        <FeaturesSection />
        <PaperGuideSection />
        <RecyclingTipsSection />
        <FAQSection />
        <CallToActionBanner />
      </div>
    </div>
  );
}
