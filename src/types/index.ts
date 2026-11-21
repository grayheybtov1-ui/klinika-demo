export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  departmentId: string;
  experienceYears: number;
  education: string;
  bio: string;
  languages: string[];
  schedule: string;
  image: string;
  credentials: string[];
}

export interface ServiceDetail {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  departmentId: string;
  category: string;
  iconName: string;
  image: string;
  diagnosticEquip: string;
  duration: string;
  preparation: string;
  priceRange: string;
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: 'diaqnostika' | 'palata' | 'qebul' | 'laboratoriya' | 'cerrahiyye';
  description: string;
  image: string;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  departmentId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  notes: string;
}
