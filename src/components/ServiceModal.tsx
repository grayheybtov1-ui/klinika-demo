'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Clock, Cpu, FileText, ArrowRight, Calendar } from 'lucide-react';
import { ServiceDetail } from '@/types';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onBookService: (departmentId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn">
      {/* Modal Container - strictly zero border-radius */}
      <div 
        className="bg-white border-2 border-slate-900 w-full max-w-3xl overflow-hidden shadow-2xl relative my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-sky-400"></span>
            <div>
              <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                Tibbi Xidmət Pasportu
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {service.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors focus:outline-none"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top Banner Image & Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 relative aspect-[4/3] w-full border border-slate-300 bg-slate-100">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <div className="md:col-span-7 space-y-3">
              <div className="inline-block px-3 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider">
                {service.category}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {service.fullDesc}
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Orta Müddət:</span>
                  <span className="font-bold text-slate-900 flex items-center space-x-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-sky-700" />
                    <span>{service.duration}</span>
                  </span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Diaqnostika Texnologiyası:</span>
                  <span className="font-bold text-slate-900 truncate block mt-0.5" title={service.diagnosticEquip}>
                    {service.diagnosticEquip.split(' ')[0]} {service.diagnosticEquip.split(' ')[1] || ''}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Clinical Features */}
          <div className="border-t border-slate-200 pt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-sky-700" />
              <span>Xidmət Çərçivəsində Təqdim Olunan Prosedurlar</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-2.5 border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Information */}
          <div className="p-4 bg-amber-50 border border-amber-200">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
              Müayinəyə Hazırlıq Qaydası:
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              {service.preparation} Ətraflı təlimat üçün qəbula yazıldıqdan sonra tibb bacısı sizinlə əlaqə saxlayacaqdır.
            </p>
          </div>

          {/* Equipment details */}
          <div className="p-4 bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1 flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-sky-700" />
              <span>Tətbiq Edilən Tibbi Avadanlıq:</span>
            </div>
            <p className="text-xs text-slate-600">
              {service.diagnosticEquip}
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            * Müayinə qiyməti aparılacaq həcmdən asılı olaraq təyin olunur.
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 border border-slate-300 bg-white text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors"
            >
              Bağla
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.departmentId);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-slate-900 text-white font-medium text-xs hover:bg-sky-700 border border-slate-900 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Bu Xidmət üzrə Qəbula Yazıl</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
