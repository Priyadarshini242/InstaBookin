import { MessageSquare } from 'lucide-react'

const softSkillsCommunication = {
  id: 4,
  slug: 'soft-skills-communication',
  icon: MessageSquare,
  title: 'Soft Skills & Communication',
  subtitle: 'Patient-facing skills that set great nurses apart',
  description:
    "Clinical expertise alone doesn't make a great nurse. This module focuses on the human side of care — how you speak, listen, document, and present yourself in a professional healthcare setting.",
  tag: 'Included',
  tagStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  accentColor: 'border-slate-200',
  modules: [
    'Patient communication',
    'English speaking',
    'Hospital etiquette',
    'Reporting & documentation',
  ],
  image: '/SoftSkills.png',
  duration: '2 weeks',
  seats: '30 seats',
}

export default softSkillsCommunication