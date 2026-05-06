import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CheckCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { services } from '../data'
import CTABanner from '../components/home/CTABanner'

function ServiceDetailCard({ service }) {
  return (
    <Link to={service.path || `/services/${service.slug}`} className={`relative bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden border border-white hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col will-change-transform`}>
      <link rel="preload" as="image" href={service.image} />
      {/* Hover background image */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center"
        style={{ backgroundImage: `url('${service.image}')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2b314f]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Orange top accent bar */}
      <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-0 group-hover:w-full transition-all duration-500 relative z-10" />

      <div className="p-7 relative z-10 flex flex-col flex-1">
        {/* Icon + duration row */}
        {/* Icon + duration row */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl group-hover:opacity-0 transition-opacity duration-300">{service.icon}</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/80 group-hover:bg-white/20 group-hover:text-white group-hover:font-bold text-slate-500 px-2.5 py-1 rounded-full border border-white shadow-sm transition-all duration-300">
            <Clock size={11} />
            {service.duration}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-800 group-hover:text-white mb-2 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-500 group-hover:text-white/80 group-hover:font-medium text-sm leading-relaxed mb-5 transition-colors duration-300">
          {service.description}
        </p>

        <div className="space-y-2 mb-6 flex-1">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700 group-hover:text-white/90 group-hover:font-semibold transition-colors duration-300">
              <CheckCircle size={14} className="text-orange-500 group-hover:text-orange-300 shrink-0 transition-colors duration-300" />
              {f}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/60 group-hover:border-white/30 mt-auto">
          <div>
            <p className="text-xs text-slate-400 group-hover:text-white/60 transition-colors duration-300">Starting from</p>
            <p className="font-extrabold text-orange-500 group-hover:text-orange-300 text-lg transition-colors duration-300">{service.price}</p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 rounded-xl shadow-sm">
            View Details <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="..."
        breadcrumbs={[{ label: 'Services' }]}
        backgroundImage="/Service.jpg"
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