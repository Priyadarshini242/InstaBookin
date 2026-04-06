import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CheckCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { services } from '../data'
import CTABanner from '../components/home/CTABanner'

function ServiceDetailCard({ service }) {
  return (
    <div className={`relative bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden border border-white hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
      
      {/* Orange top accent bar */}
      <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-0 group-hover:w-full transition-all duration-500" />

      <div className="p-7">
        {/* Icon + duration row */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{service.icon}</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/80 text-slate-500 px-2.5 py-1 rounded-full border border-white shadow-sm">
            <Clock size={11} />
            {service.duration}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>

        {/* Features list */}
        <div className="space-y-2 mb-6">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
              <CheckCircle size={14} className="text-orange-500 shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/60">
          <div>
            <p className="text-xs text-slate-400">Starting from</p>
            <p className="font-extrabold text-orange-500 text-lg">{service.price}</p>
          </div>
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group-hover:gap-2.5"
          >
            Book Now <ArrowRight size={13} />
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              What We Offer
            </div>
            <p className="text-slate-500 text-sm">Select a service and book a professional at your doorstep</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service) => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              Why Us
            </div>
            <h2 className="section-title">Why Choose Instabookin Health?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Verified Professionals', desc: 'Every doctor, nurse, and therapist undergoes strict background and credential verification.' },
              { icon: '⚡', title: 'Same-Day Service', desc: 'Get a professional at your door within hours of booking in most locations.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. What you see is what you pay, every single time.' },
              { icon: '📊', title: 'Digital Records', desc: 'All reports, prescriptions, and notes delivered digitally to your phone.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
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
