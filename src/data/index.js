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
export const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    qualification: 'MBBS, MD',
    experience: '12 years',
    rating: 4.9,
    reviews: 342,
    availability: 'Available Today',
    image: null,
    initials: 'PS',
    color: 'bg-teal-500',
    languages: ['English', 'Hindi', 'Tamil'],
    consultationFee: '₹799',
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Physiotherapist',
    qualification: 'BPT, MPT',
    experience: '8 years',
    rating: 4.8,
    reviews: 218,
    availability: 'Available Today',
    image: null,
    initials: 'RK',
    color: 'bg-blue-500',
    languages: ['English', 'Hindi', 'Telugu'],
    consultationFee: '₹499',
  },
  {
    id: 3,
    name: 'Dr. Meena Patel',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD, DM',
    experience: '15 years',
    rating: 4.9,
    reviews: 501,
    availability: 'Available Tomorrow',
    image: null,
    initials: 'MP',
    color: 'bg-purple-500',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: '₹1,299',
  },
  {
    id: 4,
    name: 'Dr. Arjun Reddy',
    specialty: 'Neurologist',
    qualification: 'MBBS, MD, DM',
    experience: '10 years',
    rating: 4.7,
    reviews: 189,
    availability: 'Available Today',
    image: null,
    initials: 'AR',
    color: 'bg-orange-500',
    languages: ['English', 'Telugu', 'Kannada'],
    consultationFee: '₹1,099',
  },
  {
    id: 5,
    name: 'Dr. Sunita Verma',
    specialty: 'Diabetologist',
    qualification: 'MBBS, MD',
    experience: '9 years',
    rating: 4.8,
    reviews: 276,
    availability: 'Available Today',
    image: null,
    initials: 'SV',
    color: 'bg-green-500',
    languages: ['English', 'Hindi', 'Marathi'],
    consultationFee: '₹899',
  },
  {
    id: 6,
    name: 'Dr. Anil Krishnan',
    specialty: 'Orthopedic Surgeon',
    qualification: 'MBBS, MS (Ortho)',
    experience: '18 years',
    rating: 4.9,
    reviews: 634,
    availability: 'Available Tomorrow',
    image: null,
    initials: 'AK',
    color: 'bg-rose-500',
    languages: ['English', 'Malayalam', 'Tamil'],
    consultationFee: '₹1,199',
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
