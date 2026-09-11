'use client';

import { useState } from 'react';

export default function NGOPartnersSection() {
  const [activeTab, setActiveTab] = useState('partners'); // 'partners' | 'gallery'
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [activeCertModal, setActiveCertModal] = useState(null);

  const partners = [
    {
      id: 'suma-blessings',
      name: 'Suma Blessings Foundation',
      logo: '/images/suma-blessings-logo.png',
      tag: 'Official NGO Partner',
      location: 'Community & Child Welfare',
      impact: 'Book Redistribution & Education',
      description: 'Dedicated to empowering underprivileged children through book distribution, educational drives, and community welfare.',
      certType: 'pdf',
      certSrc: '/images/saesha-ghosla.pdf',
      certTitle: 'Suma Blessings NGO Certificate (Saesha Ghosla)'
    },
    {
      id: 'rotaract-club',
      name: 'Rotaract Club',
      logo: '/images/rotaract-logo.png',
      tag: 'Youth & Literacy Partner',
      location: 'Youth Community Network',
      impact: 'Storybook Libraries & Drives',
      description: 'Mobilizing youth leadership to collect and donate storybooks, establishing community reading spaces for young learners.',
      certType: 'image',
      certSrc: '/images/ROTRACT%20CERTIFICATE.jpeg',
      certTitle: 'Rotaract Club Partnership Certificate'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/images/WhatsApp%20Image%202026-06-06%20at%2011.49.45.jpeg',
      title: 'Book Collection & Sorting Drive'
    },
    {
      id: 2,
      src: '/images/WhatsApp%20Image%202026-06-06%20at%2011.52.03.jpeg',
      title: 'Community Library Setup'
    },
    {
      id: 3,
      src: '/images/WhatsApp%20Image%202026-06-06%20at%2013.01.52.jpeg',
      title: 'Student Textbook & Notebook Distribution'
    },
    {
      id: 4,
      src: '/images/WhatsApp%20Image%202026-06-06%20at%2013.01.59.jpeg',
      title: 'Storybooks Donated to Young Readers'
    },
    {
      id: 5,
      src: '/images/WhatsApp%20Image%202026-06-06%20at%2013.02.02.jpeg',
      title: 'Paper Collection & Responsible Recycling Drive'
    }
  ];

  return (
    <section id="ngo-partners" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 space-y-12">
      
      {/* SECTION HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-bold uppercase tracking-wide">
          <span>🤝 Impact Network</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Our NGO Partners & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Community Partnerships
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          We partner with certified non-profits to ensure storybooks, textbooks, and notebooks reach students in need.
        </p>
      </div>

      {/* DUAL TABS: ONLY 'PARTNERS' AND 'GALLERY' */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl">
          <button
            type="button"
            onClick={() => setActiveTab('partners')}
            className={`py-3 px-8 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
              activeTab === 'partners'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🤝 NGO Partners</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('gallery')}
            className={`py-3 px-8 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
              activeTab === 'gallery'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📸 Gallery</span>
          </button>
        </div>
      </div>

      {/* TAB 1: NGO PARTNERS VIEW */}
      {activeTab === 'partners' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-md transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Partner Top Logo & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                      {partner.tag}
                    </span>
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      📍 {partner.location}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed pt-1">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Certificate Action & Impact Footer */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                    <span>Focus Impact</span>
                    <span>{partner.impact}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveCertModal(partner)}
                    className="w-full py-3 px-4 bg-slate-950 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-emerald-400 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <span>View Partnership Certificate</span>
                    <span>📜</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: GALLERY VIEW (PURE IMAGES, CLEAN & SIMPLE) */}
      {activeTab === 'gallery' && (
        <div id="gallery" className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center space-x-2">
              <span>📸 Field Photo Gallery</span>
            </h3>
            <span className="text-xs text-slate-400 font-medium">Click any photo to view full size</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImageModal(img)}
                className="group relative bg-slate-950 border border-slate-800/90 hover:border-emerald-500/50 rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Partner CTA Box */}
      <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 via-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-3xl text-center space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          Are You an NGO or Educational Institution?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Partner with Read2Rise to receive storybooks, textbooks, or donate unused school notebooks to community libraries.
        </p>
        <a
          href="mailto:partners@read2rise.org"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition-all cursor-pointer"
        >
          <span>Become an NGO Partner</span>
          <span>✉️</span>
        </a>
      </div>

      {/* FULL-SIZE GALLERY IMAGE LIGHTBOX MODAL */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-emerald-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">{activeImageModal.title}</h3>
              <button
                type="button"
                onClick={() => setActiveImageModal(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-base font-bold transition-colors cursor-pointer"
                title="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="relative max-h-[65vh] sm:max-h-[70vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center">
              <img
                src={activeImageModal.src}
                alt={activeImageModal.title}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATE LIGHTBOX / PDF MODAL */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-emerald-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 sm:p-8 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">Official Certificate</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">{activeCertModal.certTitle}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertModal(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-base font-bold transition-colors cursor-pointer"
                title="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center min-h-[450px]">
              {activeCertModal.certType === 'pdf' ? (
                <iframe
                  src={`${activeCertModal.certSrc}#toolbar=0&navpanes=0`}
                  title={activeCertModal.certTitle}
                  className="w-full h-[550px] rounded-2xl border-0"
                />
              ) : (
                <img
                  src={activeCertModal.certSrc}
                  alt={activeCertModal.certTitle}
                  className="w-full h-full max-h-[65vh] object-contain rounded-2xl"
                />
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href={activeCertModal.certSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black transition-all cursor-pointer shadow-md inline-flex items-center space-x-2"
              >
                <span>Open Document In Full Window</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
