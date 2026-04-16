import { Syringe } from 'lucide-react'
 
const advancedClinicalSkills = {
  id: 1,
  slug: 'advanced-clinical-skills',
  icon: Syringe,
  title: 'Advanced Clinical Skills',
  subtitle: 'Core procedures every nurse must master',
  description:
    'This program covers the essential hands-on clinical procedures that form the backbone of nursing practice. Ideal for fresh graduates or nurses looking to sharpen their procedural competency before joining a new facility.',
  tag: 'Included',
  tagStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  accentColor: 'border-slate-200',
  modules: [
    'IV Cannulation',
    'Injection techniques',
    'Wound dressing',
    'Catheterization',
    'Vital monitoring',
    'Emergency handling',
  ],
  image: '/AdvancedClinicalTraining.png',
  duration: '4 weeks',
  seats: '20 seats',
}
 
export default advancedClinicalSkills
 