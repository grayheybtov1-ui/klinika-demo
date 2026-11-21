'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Clock, Calendar, Globe, GraduationCap, ChevronRight, Check } from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '@/data/clinicData';
import { Doctor } from '@/types';

interface DoctorsProps {
  onSelectDoctor: (doctorId: string, departmentId: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onSelectDoctor }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Bütün Həkimlər' },
    { id: 'terapiya', label: 'Terapiya' },
    { id: 'kardiologiya', label: 'Kardiologiya' },
    { id: 'nevrologiya', label: 'Nevrologiya' },
    { id: 'stomatologiya', label: 'Stomatologiya' },
    { id: 'pediatriya', label: 'Pediatriya' },
    { id: 'dermatologiya', label: 'Dermatologiya' },
    { id: 'diaqnostika', label: 'USM & Laboratoriya' },
  ];

  const filteredDoctors = DOCTORS.filter((doc) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'diaqnostika') {
      return doc.departmentId === 'usm' || doc.departmentId === 'laboratoriya';
    }
    return doc.departmentId === activeTab;
  });

  return (
    <section id="doctors" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Tibbi Heyət
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Təcrübəli Həkimlərimiz
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
            Hər biri öz sahəsində geniş təcrübəyə və beynəlxalq dərəcəli ixtisas sertifikatlarına malik tibb mütəxəssislərimiz.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center overflow-x-auto pb-4 mb-8 space-x-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border border-slate-300 flex flex-col justify-between hover:border-slate-800 transition-colors"
            >
              <div>
                {/* Doctor Portrait */}
                <div className="relative aspect-[3/4] w-full border-b border-slate-200 overflow-hidden bg-slate-200">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 border border-slate-700">
                    {doctor.experienceYears} il təcrübə
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block">
                      {doctor.specialty}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {doctor.title}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Credentials / Education */}
                  <div className="pt-2 border-t border-slate-100 text-[11px] space-y-1.5 text-slate-600">
                    <div className="flex items-start space-x-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{doctor.education}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                      <span>{doctor.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectDoctor(doctor.id, doctor.departmentId)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-sky-800 text-white text-xs font-semibold flex items-center justify-center space-x-2 border border-slate-900 cursor-pointer transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Qəbula Yazıl</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="mt-12 p-6 bg-white border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-sky-50 border border-sky-200">
              <Award className="w-6 h-6 text-sky-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Klinik Konsilium və Mütəxəssis Rəyi
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Mürəkkəb hallarda pasiyentin diaqnostikası bir neçə kafedra mütəxəssisinin birgə rəyi əsasında dəqiqləşdirilir.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            Daimi Elmi Yenilənmə və Akkreditasiya
          </span>
        </div>

      </div>
    </section>
  );
};
