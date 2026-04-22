// Services
import homeNursing from './services/home-nursing'
import nurseBureaus from './services/nurse-bureaus'
import nursingServices from './services/nursing-services'
import seniorCare from './services/senior-care'
import caretakingHome from './services/caretaking-home'
import childCare from './services/child-care'
import elderHomeCare from './services/elder-home-care'
import orthopedicCare from './services/orthopedic-care'
import motherBabyCare from './services/mother-baby-care' 
import corporateHealthCare from './services/corporate-health-care.js'
import specializedCare from './services/specialized-care.js'
import palliativeCare  from './services/palliative-care.js'
export const services = [
  homeNursing,
  nurseBureaus,
  nursingServices,
  seniorCare,
  caretakingHome,
  childCare,
  elderHomeCare,
  orthopedicCare,
   motherBabyCare,
   corporateHealthCare,
   specializedCare,
   palliativeCare,
]

// Doctors Data
// Doctors Data — REPLACE this entire doctors array
export const doctors = [
  {
    id: 1,
    name: 'Priya Sharma',
    specialty: 'Wound Care',
    qualification: 'B.Sc Nursing · Wound Care Certified',
    experience: '6 years',
    rating: 4.9,
    reviews: 234,
    availability: 'Available Today',
    image: null,
    initials: 'PS',
    color: 'bg-orange-500',
    languages: ['Tamil', 'English'],
    consultationFee: '₹499/visit',
  },
  {
    id: 2,
    name: 'Lakshmi Nair',
    specialty: 'IV Therapy',
    qualification: 'GNM · IV & Infusion Specialist',
    experience: '8 years',
    rating: 4.8,
    reviews: 198,
    availability: 'Available Today',
    image: null,
    initials: 'LN',
    color: 'bg-blue-500',
    languages: ['Malayalam', 'English'],
    consultationFee: '₹599/visit',
  },
  {
    id: 3,
    name: 'Divya Iyer',
    specialty: 'Physiotherapy',
    qualification: 'BPT · Physiotherapy Certified',
    experience: '5 years',
    rating: 4.7,
    reviews: 156,
    availability: 'Available Tomorrow',
    image: null,
    initials: 'DI',
    color: 'bg-teal-500',
    languages: ['Tamil', 'Hindi'],
    consultationFee: '₹699/visit',
  },
  {
    id: 4,
    name: 'Anjali Verma',
    specialty: 'Elder Care',
    qualification: 'B.Sc Nursing · Geriatric Care Specialist',
    experience: '10 years',
    rating: 4.9,
    reviews: 312,
    availability: 'Available Today',
    image: null,
    initials: 'AV',
    color: 'bg-purple-500',
    languages: ['Hindi', 'English'],
    consultationFee: '₹549/visit',
  },
  {
    id: 5,
    name: 'Meena Pillai',
    specialty: 'Pediatric Care',
    qualification: 'GNM · Child & Newborn Care Specialist',
    experience: '7 years',
    rating: 4.8,
    reviews: 189,
    availability: 'Available Today',
    image: null,
    initials: 'MP',
    color: 'bg-rose-500',
    languages: ['Tamil', 'Malayalam'],
    consultationFee: '₹449/visit',
  },
  {
    id: 6,
    name: 'Sunita Patel',
    specialty: 'Post-Op Care',
    qualification: 'B.Sc Nursing · Surgical Recovery Care',
    experience: '9 years',
    rating: 4.6,
    reviews: 143,
    availability: 'Available Tomorrow',
    image: null,
    initials: 'SP',
    color: 'bg-green-600',
    languages: ['Gujarati', 'Hindi'],
    consultationFee: '₹649/visit',
  },
  {
    id: 7,
    name: 'Rekha Suresh',
    specialty: 'Critical Care',
    qualification: 'M.Sc Nursing · ICU & CCU Trained',
    experience: '12 years',
    rating: 4.9,
    reviews: 276,
    availability: 'Available Today',
    image: null,
    initials: 'RS',
    color: 'bg-red-500',
    languages: ['Tamil', 'English', 'Kannada'],
    consultationFee: '₹799/visit',
  },
  {
    id: 8,
    name: 'Fatima Begum',
    specialty: 'Mother & Baby Care',
    qualification: 'GNM · Maternity & Postnatal Care',
    experience: '6 years',
    rating: 4.8,
    reviews: 167,
    availability: 'Available Today',
    image: null,
    initials: 'FB',
    color: 'bg-pink-500',
    languages: ['Urdu', 'Hindi', 'English'],
    consultationFee: '₹549/visit',
  },
  {
    id: 9,
    name: 'Kavitha Raj',
    specialty: 'Palliative Care',
    qualification: 'B.Sc Nursing · Palliative & Pain Management',
    experience: '11 years',
    rating: 4.9,
    reviews: 221,
    availability: 'Available Today',
    image: null,
    initials: 'KR',
    color: 'bg-indigo-500',
    languages: ['Tamil', 'English'],
    consultationFee: '₹699/visit',
  },
]
// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Ananya Krishnan',
    location: 'Coimbatore',
    rating: 5,
    text: 'Incredible service! The physiotherapist arrived on time and was extremely professional. My mother\'s recovery after her hip surgery has been amazing thanks to Instabookin Health.',
    service: 'Physiotherapy',
    avatar: 'AK',
  },
  {
    id: 2,
    name: 'Suresh Rajan',
    location: 'Chennai',
    rating: 5,
    text: 'Booking a home nurse has never been easier. The nurse was highly skilled, caring, and made my elderly father feel very comfortable. Highly recommended!',
    service: 'Nursing Care',
    avatar: 'SR',
  },
  {
    id: 3,
    name: 'Preethi Nair',
    location: 'Bangalore',
    rating: 5,
    text: 'Got my lab tests done at home within an hour of booking. Reports were ready digitally same day. This is the future of healthcare.',
    service: 'Lab Tests',
    avatar: 'PN',
  },
]

// Stats
export const stats = [
  { value: '5L+', label: 'Happy Patients' },
  { value: '100+', label: 'Cities Served' },
  { value: '2000+', label: 'Verified Doctors' },
  { value: '4.8★', label: 'Average Rating' },
]

// FAQ Data
export const faqs = [
  {
    q: 'How do I book a home healthcare service?',
    a: 'Simply click "Book a Service", choose your required service, enter your location and preferred time slot, and confirm the booking. Our team will assign the best available professional to you.',
  },
  {
    q: 'Are your doctors and nurses verified?',
    a: 'Yes, every professional on our platform undergoes a thorough background check, credential verification, and clinical assessment before being onboarded.',
  },
  {
    q: 'What areas do you currently serve?',
    a: 'We currently serve 100+ cities across India including Coimbatore, Chennai, Bangalore, Hyderabad, Mumbai, Delhi, and more. Enter your PIN code to check availability.',
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'You can cancel a booking up to 2 hours before the scheduled visit for a full refund. Late cancellations may incur a nominal fee.',
  },
  {
    q: 'Is my health data secure?',
    a: 'Absolutely. We are HIPAA-compliant and follow stringent data privacy standards. Your medical records are encrypted and never shared without your consent.',
  },
]
