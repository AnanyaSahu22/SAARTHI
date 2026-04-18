
export enum Screen {
  Home = 'home',
  Navigation = 'navigation',
  Doctors = 'doctors',
  Booking = 'booking',
  Emergency = 'emergency',
  Records = 'records',
  QRScanner = 'qrscanner'
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availability: 'Available' | 'Busy';
  rating: number;
  reviews: number;
  experience: number;
  imageUrl: string;
}

export interface MedicalRecord {
  id: string;
  title: string;
  date: string;
  doctor: string;
  type: 'LAB REPORT' | 'PRESCRIPTION' | 'IMAGING' | 'VACCINATION';
  icon: string;
}
