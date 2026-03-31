import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data'

function TestimonialCard({ t }) {
  return (
    <div className="card p-6 flex flex-col gap-4 relative">
      <Quote size={32} className="absolute top-5 right-5 text-primary-100" />
      <div className="flex items-center gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{t.text}</p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
          {t.avatar}
        </div>
        <div>
          <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
          <p className="text-slate-400 text-xs">{t.location} · {t.service}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Patient Stories</p>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle mx-auto text-center">
            Real experiences from real patients across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
          {['NABH Certified', 'ISO 9001:2015', 'HIPAA Compliant', 'Ministry of Health Recognized'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <span className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </span>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
