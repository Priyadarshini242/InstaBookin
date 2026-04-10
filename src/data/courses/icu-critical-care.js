import { Heart } from 'lucide-react'

const icuCriticalCare = {
  id: 2,
  slug: 'icu-critical-care',
  icon: Heart,
  title: 'ICU / Critical Care Training',
  subtitle: 'Intensive care expertise for high-acuity settings',
  description:
    'Designed for nurses ready to step into high-pressure intensive care environments. This premium course builds both technical competency and the clinical judgment required to work confidently in ICU and critical care wards.',
  tag: 'Premium',
  tagStyle: 'bg-amber-50 text-amber-700 border border-amber-200',
  isPremium: true,
  accentColor: 'border-orange-400',
  modules: [
    'Ventilator handling',
    'ICU monitoring systems',
    'ECG basics',
    'ABG basics',
    'Emergency protocols',
  ],
  image: '/ICU.png',
  duration: '6 weeks',
  seats: '15 seats',
}

export default icuCriticalCare