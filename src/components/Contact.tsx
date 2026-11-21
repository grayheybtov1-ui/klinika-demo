'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Navigation, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

export const Contact: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.name || !formValues.phone) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Ünvan və Əlaqə
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Bizimlə Əlaqə Saxlayın
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
            Bakı şəhərinin mərkəzində yerləşən klinikamıza rahat gəliş imkanı və operativ məlumat xətləri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details & Direct Call CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Information Card */}
            <div className="bg-white border border-slate-300 p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-4">
                Əlaqə Rekvizitləri
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 shrink-0">
                    <MapPin className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Ünvanımız
                    </span>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {CLINIC_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Orientir: {CLINIC_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 shrink-0">
                    <Phone className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Telefon Əlaqəsi
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                      <a href={`tel:${CLINIC_INFO.phoneTel}`} className="text-sm font-bold text-slate-900 hover:text-sky-700">
                        Şəhər: {CLINIC_INFO.phoneDisplay}
                      </a>
                      <a href={`tel:${CLINIC_INFO.mobileTel}`} className="text-sm font-bold text-slate-900 hover:text-sky-700">
                        Mobil: {CLINIC_INFO.mobileDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 shrink-0">
                    <Clock className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      İş Saatları
                    </span>
                    <div className="text-xs text-slate-800 space-y-0.5 mt-0.5">
                      <p><strong>Həftəiçi:</strong> {CLINIC_INFO.workingHours.weekdays}</p>
                      <p><strong>Şənbə:</strong> {CLINIC_INFO.workingHours.saturday}</p>
                      <p className="text-sky-700 font-semibold"><strong>Təcili Şöbə:</strong> {CLINIC_INFO.workingHours.emergency}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 shrink-0">
                    <Mail className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Rəsmi E-poçt
                    </span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-sm font-semibold text-slate-900 hover:text-sky-700">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Phone & WhatsApp */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneTel}`}
                  className="py-3 px-4 bg-slate-900 hover:bg-sky-800 text-white text-xs font-semibold border border-slate-900 flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Birbaşa Zəng Et</span>
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold border border-emerald-700 flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ilə Yaz</span>
                </a>
              </div>

            </div>

            {/* Quick message submission box */}
            <div className="bg-white border border-slate-300 p-8">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Sualınız var? Bizə yazın
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Məlumat menecerimiz 1 saat ərzində sizə geri zəng edəcəkdir.
              </p>

              {formSent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mesajınız qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Adınız"
                      value={formValues.name}
                      onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Telefon nömrəniz"
                      value={formValues.phone}
                      onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Qısa sualınız və ya qeydiniz..."
                    value={formValues.message}
                    onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-sky-800 text-white text-xs font-semibold border border-slate-900 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Məlumat Sorğusunu Göndər</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Stylized Architectural Map Simulator */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-slate-300 bg-white p-2">
              <div className="relative aspect-[4/3] w-full bg-slate-100 border border-slate-200 overflow-hidden flex flex-col justify-between p-6">
                
                {/* Visual Map Grid Canvas Simulation */}
                <div className="absolute inset-0 clinical-grid-pattern opacity-80" />
                
                {/* Mock Map Streets & Blueprint Aesthetic */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#0F2742" strokeWidth="6" />
                  <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#0F2742" strokeWidth="8" />
                  <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#64748B" strokeWidth="3" />
                  <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#64748B" strokeWidth="3" />
                  <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#64748B" strokeWidth="4" />
                  <rect x="47%" y="22%" width="120" height="70" fill="#0284C7" opacity="0.25" />
                </svg>

                {/* Map Header Card */}
                <div className="relative z-10 bg-slate-900 text-white p-4 border border-slate-800 max-w-xs shadow-none">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Xəritə Koordinatı
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Meridian Tibb Mərkəzi
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    40.3953° N, 49.8451° E • Bakı
                  </div>
                </div>

                {/* Map Center Pin */}
                <div className="relative z-10 self-center flex flex-col items-center">
                  <div className="bg-sky-700 text-white p-3 border-2 border-white shadow-md flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-white" />
                    <span className="text-xs font-bold tracking-tight uppercase">Səməd Vurğun 142</span>
                  </div>
                  <div className="w-1.5 h-6 bg-slate-900 mt-0.5"></div>
                  <div className="w-4 h-1.5 bg-slate-400"></div>
                </div>

                {/* Map Bottom Information Strip */}
                <div className="relative z-10 bg-white/95 border border-slate-300 p-4 text-xs text-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="font-bold block">Nəqliyyat İzahı:</span>
                    <span className="text-slate-600">Gənclik və 28 May m/s-dən 5 dəqiqəlik məsafə</span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-slate-900 text-white font-medium hover:bg-sky-800 flex items-center space-x-1 shrink-0"
                  >
                    <span>Google Xəritədə Aç</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

            {/* Parking & Accessibility Notice */}
            <div className="p-4 bg-white border border-slate-300 text-xs text-slate-700 flex items-start space-x-3">
              <Navigation className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <strong>Parkinq və Əlçatanlıq:</strong> Klinikanın pasiyentləri üçün pulsuz xüsusi yeraltı və yerüstü parkinq mövcuddur. Əlilliyi olan şəxslər üçün xüsusi pandus və lift infrastrukturu təchiz edilmişdir.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
