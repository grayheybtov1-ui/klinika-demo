'use client';

import React from 'react';
import { X, Calendar } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  departmentId?: string;
  doctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  departmentId,
  doctorId
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn">
      <div 
        className="bg-white border-2 border-slate-900 w-full max-w-4xl overflow-hidden shadow-2xl relative my-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-sky-400"></span>
            <div>
              <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                Onlayn Xidmət
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Həkim Qəbuluna Yazılmaq</span>
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

        {/* Modal Content - Embedded Appointment Form */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <AppointmentSection
            isModal={true}
            initialDepartmentId={departmentId}
            initialDoctorId={doctorId}
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};
