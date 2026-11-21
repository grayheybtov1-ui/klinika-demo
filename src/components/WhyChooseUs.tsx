'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/data/clinicData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Üstünlüklərimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Niyə Pasiyentlər Meridian Tibb Mərkəzini Seçir?
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Biz tibbi xidmətin keyfiyyətini təkcə təcrübəli mütəxəssislərlə deyil, həm də beynəlxalq səhiyyə standartları və qüsursuz etika ilə təmin edirik.
          </p>
        </div>

        {/* 6 Grid Elements - Hairline borders, sharp architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-800 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 bg-slate-900 hover:bg-slate-800/60 transition-colors duration-150 border-b border-slate-800 ${
                idx >= 3 ? 'lg:border-b-0' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-mono font-bold text-sky-400">
                  {item.code}
                </span>
                <span className="w-2.5 h-2.5 bg-slate-700"></span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
