import { Link } from 'react-router-dom'
import { CheckCircle, Heart, Shield, Award, Users } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { stats } from '../data'
import CTABanner from '../components/home/CTABanner'

const values = [
  {
    icon: Heart,
    title: 'Patient First',
    desc: 'Every decision we make centers around what is best for the patient. Comfort, dignity, and care are non-negotiable.',
  },
  {
    icon: Shield,
    title: 'Safety & Trust',
    desc: 'All professionals are rigorously verified. Your health and personal data are protected at every step.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    desc: 'We maintain the highest clinical standards through continuous monitoring, feedback loops, and professional training.',
  },
  {
    icon: Users,
    title: 'Inclusive Access',
    desc: 'Quality healthcare shouldn\'t be a privilege. We strive to make expert care affordable and accessible for all.',
  },
]

const teamMembers = [
  { name: 'Dr. Kavitha Menon', role: 'Chief Medical Officer', exp: '20+ years', initials: 'KM', color: 'bg-teal-500' },
  { name: 'Arjun Iyer', role: 'Chief Executive Officer', exp: 'IIT Madras, IIM-B', initials: 'AI', color: 'bg-blue-500' },
  { name: 'Priya Raghavan', role: 'Head of Operations', exp: '15+ years in HealthTech', initials: 'PR', color: 'bg-purple-500' },
  { name: 'Dr. Suresh Babu', role: 'Head of Clinical Quality', exp: 'MBBS, MD, PhD', initials: 'SB', color: 'bg-orange-500' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Instabookin Health"
        subtitle="We are on a mission to make high-quality healthcare accessible to every Indian family — right at their doorstep."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">Our Mission</div>
              <h2 className="section-title mb-5">
                Bringing Healthcare Home Since 2018
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Instabookin Health was founded with a simple but powerful belief: quality medical care should come to the patient, not the other way around. Whether it's an elderly parent who needs nursing support, a post-surgery patient requiring physiotherapy, or a busy professional needing a doctor visit — we make it happen seamlessly.
              </p>
              <p className="text-slate-500 leading-relaxed mb-7">
                Starting in Coimbatore in 2018, we have grown to serve over 5 lakh patients across 100+ cities in India. Every day, our 2,000+ verified professionals deliver compassionate, world-class care in people's homes.
              </p>
              <div className="space-y-3">
                {['NABH Certified Home Healthcare Provider', 'ISO 9001:2015 Quality Management System', 'Ministry of Health Recognized Platform', 'HIPAA Compliant Data Management'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-orange-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-orange-100 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-orange-500 mb-1">{stat.value}</p>
                  <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto text-center">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <v.icon size={22} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-slate-800 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle mx-auto text-center">Experienced leaders driving healthcare innovation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-20 h-20 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
