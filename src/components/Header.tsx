'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Clock, MapPin, Menu, X, Calendar, ChevronRight, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface HeaderProps {
  onOpenAppointment: (departmentId?: string, doctorId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Səhifə', href: '#hero' },
    { name: 'Haqqımızda', href: '#about' },
    { name: 'Xidmətlər', href: '#services' },
    { name: 'Həkimlərimiz', href: '#doctors' },
    { name: 'Niyə Biz?', href: '#why-us' },
    { name: 'Klinika', href: '#facilities' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Əlaqə', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-all duration-200">
      {/* Top clinical information bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 border-b border-slate-800 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{CLINIC_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Həftəiçi: {CLINIC_INFO.workingHours.weekdays} | Şənbə: {CLINIC_INFO.workingHours.saturday}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-400 inline-block"></span>
              <span className="text-white font-medium">Təcili Şöbə: {CLINIC_INFO.workingHours.emergency}</span>
            </div>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Dəstək</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="#hero" className="flex items-center space-x-3.5 group">
            <div className="w-11 h-11 bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-serif text-xl tracking-wider">
              <span className="text-sky-400 font-bold">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase font-sans">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Özəl Tibb Mərkəzi • Bakı
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors py-2 border-b-2 border-transparent hover:border-sky-700"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onOpenAppointment()}
              className="bg-slate-900 hover:bg-sky-700 text-white text-sm font-medium px-5 py-3 border border-slate-900 hover:border-sky-700 transition-all flex items-center space-x-2 cursor-pointer shadow-none"
            >
              <Calendar className="w-4 h-4" />
              <span>Qəbula Yazıl</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => onOpenAppointment()}
              className="bg-slate-900 text-white text-xs font-medium px-3 py-2.5 md:hidden flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Qəbul</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-none">
          <nav className="flex flex-col space-y-3 pb-6 border-b border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-800 hover:text-sky-700 py-1.5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-6 space-y-4">
            <div className="text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sky-700 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-sky-700 shrink-0" />
                <span>{CLINIC_INFO.workingHours.weekdays}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneTel}`}
                className="w-full flex items-center justify-center space-x-2 py-3 border border-slate-300 text-slate-800 font-semibold text-sm bg-slate-50"
              >
                <Phone className="w-4 h-4 text-sky-700" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-900 text-white font-medium text-sm border border-slate-900"
              >
                <Calendar className="w-4 h-4" />
                <span>Onlayn Qəbula Yazıl</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
