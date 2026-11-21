'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Stethoscope, 
  Activity, 
  Brain, 
  Smile, 
  Baby, 
  ShieldAlert, 
  FlaskConical, 
  Radio, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICES } from '@/data/clinicData';
import { ServiceDetail } from '@/types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onOpenAppointment: (departmentId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointment }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Map icon names to Lucide icons
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-sky-700" />;
      case 'Activity': return <Activity className="w-6 h-6 text-sky-700" />;
      case 'Brain': return <Brain className="w-6 h-6 text-sky-700" />;
      case 'Smile': return <Smile className="w-6 h-6 text-sky-700" />;
      case 'Baby': return <Baby className="w-6 h-6 text-sky-700" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-sky-700" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-sky-700" />;
      case 'Radio': return <Radio className="w-6 h-6 text-sky-700" />;
      default: return <Stethoscope className="w-6 h-6 text-sky-700" />;
    }
  };

  const featuredService = SERVICES[0]; // Terapiya flagship
  const otherServices = SERVICES.slice(1);

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Tibbi İstiqamətlər
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Klinik Xidmətlərimiz
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
            Daxili orqan xəstəliklərindən mürəkkəb laborator analizlərə qədər 8 əsas ixtisas sahəsində peşəkar həkim xidməti.
          </p>
        </div>

        {/* Varied Asymmetrical Layout */}
        <div className="space-y-6">
          
          {/* Featured Service Card (Wide Highlight Banner) */}
          <div className="border-2 border-slate-900 bg-slate-50 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[16/10] w-full border border-slate-300 overflow-hidden bg-white">
              <Image
                src={featuredService.image}
                alt={featuredService.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute top-3 left-3 bg-slate-900 text-white text-[11px] font-bold uppercase px-3 py-1">
                Əsas Şöbə
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-white border border-slate-300">
                  {renderIcon(featuredService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    {featuredService.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {featuredService.name} və Daxili Xəstəliklər Şöbəsi
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                {featuredService.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {featuredService.features.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-sky-700 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedService(featuredService)}
                  className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-400 font-medium text-xs flex items-center space-x-2 cursor-pointer transition-colors"
                >
                  <span>Ətraflı Protokola Bax</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-700" />
                </button>
                <button
                  onClick={() => onOpenAppointment(featuredService.departmentId)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-sky-800 text-white font-medium text-xs border border-slate-900 flex items-center space-x-2 cursor-pointer transition-colors"
                >
                  <span>Terapiya Qəbuluna Yazıl</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid of the remaining 7 Services - Architectural sharp cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <div
                key={service.id}
                className="border border-slate-300 bg-white hover:border-slate-900 transition-all duration-150 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with category badge */}
                  <div className="relative aspect-[16/9] w-full border-b border-slate-200 overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-slate-200">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-50 border border-slate-200 shrink-0">
                        {renderIcon(service.iconName)}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {service.name}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100 space-y-1">
                      <div><strong className="text-slate-700">Müddət:</strong> {service.duration}</div>
                      <div className="truncate"><strong className="text-slate-700">Cihaz:</strong> {service.diagnosticEquip}</div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Məlumat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenAppointment(service.departmentId)}
                    className="w-full py-2.5 px-3 bg-slate-900 hover:bg-sky-800 border border-slate-900 text-white text-xs font-semibold flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Qəbul</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(deptId) => onOpenAppointment(deptId)}
      />
    </section>
  );
};
