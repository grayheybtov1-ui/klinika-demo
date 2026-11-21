'use client';

import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/clinicData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            Məlumat Mərkəzi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
            Tez-tez Verilən Suallar
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Qəbul qaydaları, analiz nəticələri və tibbi xidmətlərimiz haqqında ən çox maraqlanılan sualların rəsmi cavabları.
          </p>
        </div>

        {/* Sharp Accordion List */}
        <div className="border border-slate-300 divide-y divide-slate-300">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="bg-white transition-colors">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start space-x-3 pr-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 border border-sky-200 shrink-0 mt-0.5">
                      {item.category}
                    </span>
                    <span className="text-base font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className="p-1 border border-slate-300 bg-slate-50 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-slate-800" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-800" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 bg-slate-50/70 border-t border-slate-200">
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-300 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Başqa bir sualınız və ya xüsusi müraciətiniz var?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Klinikamızın məlumat mərkəzi 24 saat zənglərinizi qəbul etməyə hazırdır.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-slate-900 hover:bg-sky-800 text-white text-xs font-semibold border border-slate-900 whitespace-nowrap transition-colors"
          >
            Bizimlə Əlaqə Saxlayın
          </a>
        </div>

      </div>
    </section>
  );
};
