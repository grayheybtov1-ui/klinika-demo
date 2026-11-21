'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Check, Eye } from 'lucide-react';
import { FACILITIES } from '@/data/clinicData';
import { Facility } from '@/types';

export const Facilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxFacility, setLightboxFacility] = useState<Facility | null>(null);

  const categories = [
    { id: 'all', label: 'Bütün Sahələr' },
    { id: 'qebul', label: 'Qəbul & Gözləmə' },
    { id: 'diaqnostika', label: 'Müayinə Otaqları' },
    { id: 'laboratoriya', label: 'Laboratoriya' },
    { id: 'palata', label: 'Palatalar' },
    { id: 'cerrahiyye', label: 'Cərrahiyyə Bloku' },
  ];

  const filteredFacilities = activeCategory === 'all'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              İnfrastruktur
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Klinika Mühiti və İnteryer
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
            Sterillik, qabaqcıl texnoloji təchizat və pasiyentin psixoloji rahatlığını təmin edən geniş, işıqlı klinika məkanlarımız.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center overflow-x-auto pb-4 mb-8 space-x-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Varied Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility, index) => {
            // First item can be larger or span 2 cols on lg screens when all are shown
            const isWide = activeCategory === 'all' && (index === 0 || index === 3);

            return (
              <div
                key={facility.id}
                className={`border border-slate-300 bg-white group flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Photo container */}
                <div 
                  className={`relative w-full overflow-hidden bg-slate-200 cursor-pointer ${
                    isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                  onClick={() => setLightboxFacility(facility)}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-2">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Böyüt</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {facility.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxFacility && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxFacility(null)}
        >
          <div 
            className="bg-white border-2 border-slate-900 max-w-4xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center border-b border-slate-800">
              <h3 className="text-sm font-bold text-white tracking-wide">
                {lightboxFacility.title}
              </h3>
              <button
                onClick={() => setLightboxFacility(null)}
                className="p-1 text-slate-300 hover:text-white border border-slate-700 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-slate-900">
              <Image
                src={lightboxFacility.image}
                alt={lightboxFacility.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200">
              <p className="text-sm text-slate-700">{lightboxFacility.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
