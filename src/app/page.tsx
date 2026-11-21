'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Doctors } from '@/components/Doctors';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Facilities } from '@/components/Facilities';
import { AppointmentSection } from '@/components/AppointmentSection';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AppointmentModal } from '@/components/AppointmentModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState<string | undefined>(undefined);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (deptId?: string, doctorId?: string) => {
    setSelectedDeptId(deptId);
    setSelectedDoctorId(doctorId);
    setIsModalOpen(true);
  };

  const handleSelectDoctor = (doctorId: string, deptId: string) => {
    setSelectedDeptId(deptId);
    setSelectedDoctorId(doctorId);
    setIsModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header with clinical information strip */}
      <Header onOpenAppointment={handleOpenAppointment} />

      {/* 2. Hero: Authoritative medical entrance */}
      <Hero 
        onOpenAppointment={() => handleOpenAppointment()} 
        onExploreServices={handleExploreServices} 
      />

      {/* 3. About Us: Clinic philosophy & accreditation */}
      <About onOpenAppointment={() => handleOpenAppointment()} />

      {/* 4. Services: 8 medical specialties with interactive modal details */}
      <Services onOpenAppointment={handleOpenAppointment} />

      {/* 5. Doctors: Doctor profiles with direct appointment preselection */}
      <Doctors onSelectDoctor={handleSelectDoctor} />

      {/* 6. Why Choose Us: Architectural credibility points */}
      <WhyChooseUs />

      {/* 7. Facilities: High-resolution gallery & lightbox */}
      <Facilities />

      {/* 8. Online Appointment: Complete interactive booking form with validation */}
      <AppointmentSection />

      {/* 9. FAQ: Medical frequently asked questions accordion */}
      <FAQ />

      {/* 10. Contact: Map simulation, Baku address, direct WhatsApp & phone */}
      <Contact />

      {/* 11. Footer: Accreditation, copyright, legal disclaimer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Global Interactive Booking Modal Dialog */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        departmentId={selectedDeptId}
        doctorId={selectedDoctorId}
      />
    </main>
  );
}
