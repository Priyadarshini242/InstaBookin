import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CheckCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { services } from '../data'
import CTABanner from '../components/home/CTABanner'

function ServiceDetailCard({ service }) {
  return (
    <div className={`card bg-gradient-to-br ${service.color} border border-white overflow-hidden`}>
      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-4xl">{service.icon}</span>
            <h3 className="font-display text-xl font-bold text-slate-800 mt-3 mb-1">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
          </div>
        </div>

        <div className="my-5 space-y-2">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
              <CheckCircle size={14} className="text-primary-600 shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/60">
          <div>
            <p className="text-xs text-slate-400">Starting from</p>
            <p className="font-bold text-primary-700 text-lg">{service.price}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock size={13} />
            {service.duration}
          </div>
          <Link to="/book" className="btn-primary text-sm py-2.5">
            Book Now <ArrowRight size={14} className="inline ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Healthcare Services"
        subtitle="Comprehensive home healthcare services delivered by certified professionals — right at your doorstep."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Service grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Instabookin Health?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Verified Professionals', desc: 'Every doctor, nurse, and therapist undergoes strict background and credential verification.' },
              { icon: '⚡', title: 'Same-Day Service', desc: 'Get a professional at your door within hours of booking in most locations.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. What you see is what you pay, every single time.' },
              { icon: '📊', title: 'Digital Records', desc: 'All reports, prescriptions, and notes delivered digitally to your phone.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
