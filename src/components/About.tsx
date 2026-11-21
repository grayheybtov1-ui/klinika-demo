'use client';

import React from 'react';
import Image from 'next/image';
import { Check, ShieldCheck, Microchip, Clock, Stethoscope, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface AboutProps {
  onOpenAppointment: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Klinika Haqqında
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Akademik Təcrübə və İnsan Qayğısı
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
            {CLINIC_INFO.name} — müasir təbabətin ən son nailiyyətlərini şəfqətli pasiyent qayğısı ilə birləşdirən aparıcı özəl tibbi mərkəzdir.
          </p>
        </div>

        {/* Asymmetrical 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Area */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-slate-300 bg-white p-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Meridian Tibb Mərkəzi İnteryeri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-300 bg-white p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
                    alt="Avtomatlaşdırılmış Laboratoriya"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <p className="text-xs font-semibold text-slate-800 mt-2 px-1">
                  Roche & Sysmex Laboratoriyası
                </p>
              </div>

              <div className="border border-slate-300 bg-white p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                    alt="Steril Cərrahiyyə və Stomatologiya Bloku"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <p className="text-xs font-semibold text-slate-800 mt-2 px-1">
                  B Dərəcəli Sterilizasiya Bloku
                </p>
              </div>
            </div>
          </div>

          {/* Text and Value Propositions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                Mərkəzimiz Bakı şəhərində pasiyentlərə beynəlxalq standartlara tam cavab verən poliklinik, diaqnostik və laborator xidmətlər göstərmək məqsədilə təsis edilmişdir.
              </p>
              <p>
                Biz pasiyentə sadəcə bir xəstəlik daşıyıcısı kimi deyil, fərdi bioloji və emosional xüsusiyyətlərə malik bir şəxsiyyət kimi yanaşırıq. Klinikamızda tətbiq olunan hər bir müayinə və müalicə metodu sübutlu tibbin (Evidence-Based Medicine) rəsmi protokollarına əsaslanır.
              </p>
            </div>

            {/* 3 Core Principles */}
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white border border-slate-300">
                <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-sky-700 inline-block"></span>
                  <span>Mütləq Gigiyena və 5 Pilləli Sterilizasiya</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 pl-3.5">
                  Tibb alətlərinin dezinfeksiya və avtoklavlama prosesi hər mərhələdə rəqəmsal indikatorlarla sənədləşdirilir.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-300">
                <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-sky-700 inline-block"></span>
                  <span>Şəffaf Diaqnostika və Fərdi Qayğı</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 pl-3.5">
                  Pasiyentə heç vaxt lazımsız analiz və ya əsassız prosedurlar təyin olunmur. Bütün təyinatlar detallı izah edilir.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-300">
                <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-sky-700 inline-block"></span>
                  <span>Elektron Arxiv və Tam Məlumat Məxfiliyi</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 pl-3.5">
                  Bütün analiz nəticələri və tibbi tarixçə qorunan yerli serverlərdə saxlanılır və pasiyentə dərhal təqdim edilir.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center space-x-3 bg-slate-900 hover:bg-sky-800 text-white font-medium px-6 py-3.5 border border-slate-900 transition-colors text-sm cursor-pointer"
              >
                <span>Həkim Konsultasiyasına Yazıl</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
