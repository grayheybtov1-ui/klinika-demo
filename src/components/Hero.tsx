'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, Clock, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onExploreServices }) => {
  return (
    <section id="hero" className="relative bg-white border-b border-slate-200 overflow-hidden">
      {/* Background subtle clinical grid */}
      <div className="absolute inset-0 clinical-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Prestigious Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Sağlamlığınız üçün <br />
              <span className="text-sky-700 font-extrabold">etibarlı və dəqiq</span> <br />
              tibbi xidmət.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              {CLINIC_INFO.subTagline} Sübutlu təbabət prinsipləri, Avropa protokolları və pasiyent məmnuniyyətini əsas götürən fərdi yanaşma.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center space-x-3 bg-slate-900 hover:bg-sky-800 text-white font-medium px-8 py-4 border border-slate-900 transition-colors text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Qəbula Yazıl</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-medium px-8 py-4 border border-slate-300 transition-colors text-base cursor-pointer"
              >
                <span>Xidmətlərimiz</span>
              </button>
            </div>

            {/* Clinical Trust Badges */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-700">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Beynəlxalq Standart</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Avropa tibbi protokolları</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Növbəsiz Qəbul</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Dəqiq vaxt planlaşdırılması</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dəqiq Diaqnostika</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Alman & Yapon texnologiyası</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Medical Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-slate-300 bg-slate-100 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85"
                  alt="Meridian Tibb Mərkəzi Həkim Konsultasiyası"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Informative Sharp Plaque */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900 text-white p-5 border border-slate-700 shadow-none">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">
                    Klinik Diaqnostika
                  </span>
                  <span className="text-xs text-slate-400">Bakı, Nəsimi r-nu</span>
                </div>
                <p className="text-sm font-medium leading-snug text-slate-200">
                  Hərtərəfli tibbi müayinə və fərdi müalicə planları ilə sağlamlığınız etibarlı əllərdədir.
                </p>
              </div>
            </div>

            {/* Secondary Accent Box */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-sky-700 text-white py-3 px-5 border border-sky-800 text-xs font-bold uppercase tracking-widest">
              24/7 Təcili Xidmət
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border border-slate-200 bg-slate-50 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {CLINIC_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-6 text-center">
              <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-600 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
