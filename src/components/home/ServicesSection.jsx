import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data'

function ServiceCard({ service }) {
  return (
    <div className={`card bg-gradient-to-br ${service.color} border border-white p-6 group cursor-pointer`}>
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-display text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {service.features.map((f) => (
          <span key={f} className={`text-xs px-2.5 py-1 rounded-full font-medium ${service.accent}`}>
            {f}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400">Starting from</span>
          <p className="font-bold text-primary-700 text-base">{service.price}</p>
        </div>
        <Link
          to="/book"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-800 group-hover:gap-2.5 transition-all"
        >
          Book Now <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="section-title">Our Healthcare Services</h2>
            <p className="section-subtitle">
              Comprehensive home healthcare services delivered by verified professionals.
            </p>
          </div>
          <Link to="/services" className="btn-outline text-sm whitespace-nowrap self-start md:self-auto">
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
