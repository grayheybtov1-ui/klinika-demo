'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { CLINIC_INFO, DEPARTMENTS } from '@/data/clinicData';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-2 border-slate-800">
      
      {/* Top Banner: Emergency Contact Strip */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-3 h-3 bg-red-500 animate-pulse"></div>
            <div>
              <span className="text-white font-bold text-sm block">
                24/7 Təcili Tibbi Yardım və Konsultasiya Xətti
              </span>
              <span className="text-xs text-slate-400">
                Günün istənilən saatında növbətçi həkim heyəti xidmətinizdədir.
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider border border-red-500 flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Təcili: {CLINIC_INFO.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white flex items-center justify-center text-slate-950 font-serif text-xl font-bold">
                M
              </div>
              <div>
                <span className="text-lg font-bold text-white uppercase tracking-tight block">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                  Bakı Özəl Tibb Müəssisəsi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {CLINIC_INFO.subTagline} Müasir laboratoriya, beynəlxalq protokollar və pasiyent təhlükəsizliyi.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-white">Lisenziya:</strong> AR Səhiyyə Nazirliyi № PH-49821</p>
              <p><strong className="text-white">Akkreditasiya:</strong> ISO 9001:2015 Beynəlxalq Keyfiyyət</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Naviqasiya
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Ana Səhifə</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Haqqımızda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Xidmətlər</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Həkimlərimiz</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Klinika İnteryeri</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Tez-tez Verilən Suallar</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Əlaqə</a></li>
            </ul>
          </div>

          {/* Clinical Departments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Tibbi Şöbələr
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              {DEPARTMENTS.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Əlaqə Mərkəzi
            </h4>
            <div className="text-xs text-slate-400 space-y-2.5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Onlayn Qəbula Yazıl
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName}. Bütün hüquqlar qorunur.
          </p>
          <p className="text-[11px] text-slate-500 text-center md:text-right max-w-xl">
            Veb-saytda yerləşdirilmiş bütün tibbi məlumatlar yalnız maarifləndirmə xarakteri daşıyır və həkim diaqnozu əvəzi hesab edilmir.
          </p>
        </div>

      </div>
    </footer>
  );
};
