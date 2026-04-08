import { useParams, Link } from 'react-router-dom'
import { CheckCircle, Clock, ArrowRight, Phone } from 'lucide-react'
import { services } from '../data'
import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="text-center py-32">
        <p className="text-5xl mb-4">🔍</p>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Service not found</h2>
        <Link to="/services" className="text-orange-500 font-semibold hover:underline">
          Back to Services
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover"
              />
              <div className="bg-orange-50 border border-orange-100 p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Starting from</p>
                  <p className="text-2xl font-extrabold text-orange-500">{service.price}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <Clock size={14} className="text-orange-400" />
                  {service.duration}
                </div>
              </div>
            </div>

            {/* Right — Details */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                What's Included
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                    <CheckCircle size={18} className="text-orange-500 shrink-0" />
                    <span className="font-medium text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300"
                >
                  Book This Service <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+918000000000"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  <Phone size={15} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Other Services
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-slate-800 group-hover:text-orange-600 transition-colors text-sm mb-1">
                    {s.title}
                  </h3>
                  <p className="text-orange-500 font-semibold text-sm">{s.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}