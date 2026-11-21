'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Info,
  ShieldCheck,
  X
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, CLINIC_INFO } from '@/data/clinicData';
import { AppointmentFormData } from '@/types';

interface AppointmentSectionProps {
  initialDepartmentId?: string;
  initialDoctorId?: string;
  isModal?: boolean;
  onSuccessClose?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialDepartmentId = '',
  initialDoctorId = '',
  isModal = false,
  onSuccessClose
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    departmentId: initialDepartmentId,
    doctorId: initialDoctorId,
    date: '',
    timeSlot: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceCode?: string;
    details?: AppointmentFormData;
  } | null>(null);

  useEffect(() => {
    if (initialDepartmentId) {
      setFormData(prev => ({ ...prev, departmentId: initialDepartmentId }));
    }
    if (initialDoctorId) {
      setFormData(prev => ({ ...prev, doctorId: initialDoctorId }));
    }
  }, [initialDepartmentId, initialDoctorId]);

  // Available time slots for clinic appointments
  const timeSlots = [
    '09:00', '09:45', '10:30', '11:15', '12:00', 
    '14:00', '14:45', '15:30', '16:15', '17:00', '18:00'
  ];

  // Filter doctors according to chosen department
  const availableDoctors = formData.departmentId
    ? DOCTORS.filter(d => d.departmentId === formData.departmentId)
    : DOCTORS;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Zəhmət olmasa, ad və soyadınızı tam daxil edin.';
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      newErrors.phone = 'Düzgün əlaqə nömrəsi daxil edin (məs: +994 50 123 45 67).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Düzgün e-poçt ünvanı daxil edin.';
    }

    if (!formData.departmentId) {
      newErrors.departmentId = 'Zəhmət olmasa, müraciət etmək istədiyiniz şöbəni seçin.';
    }

    if (!formData.date) {
      newErrors.date = 'Qəbul üçün arzu olunan tarixi seçin.';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Arzu olunan saat aralığını seçin.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network processing with authentic medical reference code
    setTimeout(() => {
      const randomCode = 'MRD-' + Math.floor(10000 + Math.random() * 90000);
      setSubmissionResult({
        success: true,
        referenceCode: randomCode,
        details: { ...formData }
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      departmentId: '',
      doctorId: '',
      date: '',
      timeSlot: '',
      notes: ''
    });
    setErrors({});
    if (onSuccessClose) {
      onSuccessClose();
    }
  };

  // Get current date string for min date in picker
  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <div id="appointment" className={isModal ? "" : "py-20 bg-white border-b border-slate-200"}>
      <div className={isModal ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        
        {/* Only show section header if not in modal */}
        {!isModal && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
                Onlayn Qeydiyyat
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
                Həkim Qəbuluna Yazılmaq
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
              Formu dolduraraq növbənizi əvvəlcədən təyin edin. Qeydiyyat şöbəmiz qısa müddətdə müraciətinizi qəbul edəcəkdir.
            </p>
          </div>
        )}

        {/* Success Modal / Card State */}
        {submissionResult && submissionResult.success ? (
          <div className="border-2 border-slate-900 bg-slate-50 p-8 sm:p-12 text-slate-900">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-emerald-600 text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
                  Sorğu Uğurla Qeydə Alındı
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Müraciətiniz Qəbul Edildi
                </h3>
              </div>
            </div>

            <div className="p-4 bg-sky-50 border border-sky-200 text-sky-900 text-sm mb-6 flex items-start space-x-3">
              <Info className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Diqqət:</strong> Bu onlayn sorğudur və ilkin növbə sifarişidir. Qəbul saatını tam dəqiqləşdirmək və təsdiqləmək üçün qeydiyyat şöbəmizin əməkdaşı <strong>15 dəqiqə ərzində</strong> qeyd etdiyiniz telefon nömrəsi ilə əlaqə saxlayacaqdır.
              </p>
            </div>

            <div className="bg-white border border-slate-300 p-6 space-y-4 text-sm mb-8">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-slate-500 font-medium">Müraciət Nömrəsi (Referans):</span>
                <span className="font-mono font-bold text-base text-slate-900">
                  {submissionResult.referenceCode}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 block text-xs">Pasiyent:</span>
                  <span className="font-semibold text-slate-900">{submissionResult.details?.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Əlaqə Nömrəsi:</span>
                  <span className="font-semibold text-slate-900">{submissionResult.details?.phone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Seçilmiş Şöbə:</span>
                  <span className="font-semibold text-slate-900">
                    {DEPARTMENTS.find(d => d.id === submissionResult.details?.departmentId)?.name || 'Ümumi Şöbə'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Arzu Olunan Tarix və Saat:</span>
                  <span className="font-semibold text-slate-900">
                    {submissionResult.details?.date} | Saat {submissionResult.details?.timeSlot}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-slate-900 hover:bg-sky-800 text-white font-medium text-sm border border-slate-900 transition-colors cursor-pointer"
              >
                Yeni Müraciət Göndər
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-medium text-sm border border-slate-300 transition-colors flex items-center justify-center space-x-2"
              >
                <span>WhatsApp ilə Təsdiqi Sürətləndir</span>
                <ArrowRight className="w-4 h-4 text-sky-700" />
              </a>
            </div>
          </div>
        ) : (
          /* Main Appointment Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Left/Main Column */}
            <div className="lg:col-span-8 bg-white border border-slate-300 p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* General validation alert banner */}
                {Object.keys(errors).length > 0 && (
                  <div className="p-4 bg-red-50 border border-red-300 text-red-800 text-xs flex items-start space-x-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Zəhmət olmasa, qırmızı ilə işarələnmiş xanaları düzəldin:</span>
                      <ul className="list-disc list-inside mt-1 space-y-0.5 text-red-700">
                        {Object.values(errors).map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Patient Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Ad və Soyadınız <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Məs: Əli Məmmədov"
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border ${
                          errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        } text-slate-900 focus:bg-white transition-colors`}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Əlaqə Telefon Nömrəsi <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+994 (50) 000-00-00"
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        } text-slate-900 focus:bg-white transition-colors`}
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    E-poçt Ünvanı <span className="text-slate-400 font-normal lowercase">(məcburi deyil)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ad.soyad@example.com"
                      className={`w-full px-4 py-3 text-sm bg-slate-50 border ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      } text-slate-900 focus:bg-white transition-colors`}
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Department & Doctor Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Müraciət Şöbəsi <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.departmentId}
                      onChange={(e) => {
                        const newDept = e.target.value;
                        setFormData({ 
                          ...formData, 
                          departmentId: newDept,
                          doctorId: '' // Reset doctor when dept changes
                        });
                      }}
                      className={`w-full px-4 py-3 text-sm bg-slate-50 border ${
                        errors.departmentId ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      } text-slate-900 focus:bg-white transition-colors`}
                    >
                      <option value="">-- Şöbəni seçin --</option>
                      {DEPARTMENTS.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                    {errors.departmentId && <p className="text-[11px] text-red-600 mt-1">{errors.departmentId}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Həkim Seçimi <span className="text-slate-400 font-normal lowercase">(növbətçi təyin edilə bilər)</span>
                    </label>
                    <select
                      value={formData.doctorId}
                      onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white transition-colors"
                    >
                      <option value="">-- İstənilən mütəxəssis (İlk uyğun saat) --</option>
                      {availableDoctors.map(doc => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.specialty})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Arzu Olunan Tarix <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={todayDate}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border ${
                          errors.date ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        } text-slate-900 focus:bg-white transition-colors`}
                      />
                    </div>
                    {errors.date && <p className="text-[11px] text-red-600 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Arzu Olunan Saat <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className={`w-full px-4 py-3 text-sm bg-slate-50 border ${
                        errors.timeSlot ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      } text-slate-900 focus:bg-white transition-colors`}
                    >
                      <option value="">-- Saat aralığını seçin --</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.timeSlot && <p className="text-[11px] text-red-600 mt-1">{errors.timeSlot}</p>}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Əlavə Qeyd və ya Şikayətinizin Qısa İzahı <span className="text-slate-400 font-normal lowercase">(ixtiyari)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Əvvəlki analizləriniz, allergiyalarınız və ya xüsusi istəyiniz barədə qeyd edə bilərsiniz..."
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Non-sensitive data policy disclaimer */}
                <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-700" />
                    <span>Məxfilik və Məlumat Təhlükəsizliyi Qaydası</span>
                  </div>
                  <p>
                    Klinikamız onlayn formada pasiyentlərdən həssas tibbi sənədlər və ya bank məlumatları tələb etmir. Bütün ilkin məlumatlar yalnız qəbul təyini üçün istifadə olunur.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-slate-900 hover:bg-sky-800 text-white font-semibold text-sm uppercase tracking-wider border border-slate-900 transition-colors cursor-pointer flex items-center justify-center space-x-3 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Müraciət emal edilir...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Qəbul Müraciətini Göndər</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

            {/* Form Right / Informational Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick direct contact card */}
              <div className="border border-slate-300 bg-slate-50 p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sky-800 text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-sky-700" />
                  <span>Dərhal Zənglə Qeydiyyat</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Onlayn formadan əlavə, birbaşa zəng edə bilərsiniz:
                </h4>
                <div className="space-y-2 pt-1">
                  <a
                    href={`tel:${CLINIC_INFO.phoneTel}`}
                    className="block p-3 bg-white border border-slate-200 hover:border-slate-400 font-bold text-slate-900 text-sm transition-colors"
                  >
                    Şəhər: {CLINIC_INFO.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.mobileTel}`}
                    className="block p-3 bg-white border border-slate-200 hover:border-slate-400 font-bold text-slate-900 text-sm transition-colors"
                  >
                    Mobil: {CLINIC_INFO.mobileDisplay}
                  </a>
                </div>
                <p className="text-xs text-slate-500">
                  Zəng mərkəzimiz fasiləsiz olaraq suallarınızı cavablandırmağa hazırdır.
                </p>
              </div>

              {/* Reception Protocol */}
              <div className="border border-slate-300 bg-white p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3">
                  Qəbul Protokolu
                </h4>
                <ul className="text-xs text-slate-600 space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-sky-700 mt-0.5">1.</span>
                    <span>Formu göndərdikdən sonra qeydiyyat şöbəsi zəng edərək tarixi dəqiqləşdirir.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-sky-700 mt-0.5">2.</span>
                    <span>Qəbul saatından 10 dəqiqə əvvəl klinikada olmağınız tövsiyə olunur.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-sky-700 mt-0.5">3.</span>
                    <span>Şəxsiyyət vəsiqənizi və varsa əvvəlki tibbi sənədlərinizi təqdim edin.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
