// home page
import { Link } from 'react-router-dom'
import { services } from '../../data'
import { ArrowRight, CheckCircle } from 'lucide-react'

function ServiceCard({ service }) {
  return (
    <Link to={service.path || `/services/${service.slug}`}className={`relative bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden border border-white hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col will-change-transform`}>
      <link rel="preload" as="image" href={service.image} />
      {/* Hover background image */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center"
        style={{ backgroundImage: `url('${service.image}')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2b314f]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="p-7 relative z-10 flex flex-col flex-1">
        {/* Icon - fades out on hover */}
        <div className="text-4xl mb-4 group-hover:opacity-0 transition-opacity duration-300">
          {service.icon}
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

export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              What We Offer
            </div>
            <h2 className="section-title">Our Healthcare Services</h2>
            <p className="section-subtitle">
              Comprehensive home healthcare services delivered by verified professionals.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-5 py-2.5 rounded-xl transition-all duration-200 self-start md:self-auto whitespace-nowrap"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}