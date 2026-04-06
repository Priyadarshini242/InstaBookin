import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data'

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

function TestimonialCard({ t, index }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
      }}
      className="relative bg-white rounded-2xl p-6 flex flex-col gap-4 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
    >
      {/* Orange top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-0 group-hover:w-full transition-all duration-500" />

      {/* Quote icon */}
      <Quote size={36} className="absolute top-5 right-5 text-orange-100 group-hover:text-orange-200 transition-colors duration-300" />

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 fill-slate-200'}
          />
        ))}
        <span className="text-xs text-slate-400 ml-1">{t.rating}.0</span>
      </div>

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300 flex-1">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 group-hover:border-orange-100 transition-colors duration-300">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
          {t.avatar}
        </div>
        <div>
          <p className="font-bold text-slate-800 text-sm group-hover:text-orange-600 transition-colors duration-300">
            {t.name}
          </p>
          <p className="text-slate-400 text-xs">{t.location} · {t.service}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref: headingRef, visible: headingVisible } = useReveal()
  const { ref: badgesRef, visible: badgesVisible } = useReveal()

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-slate-50 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100/40 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-slate-100/60 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            Patient Stories
          </div>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle mx-auto text-center">
            Real experiences from real patients across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} t={t} index={index} />
          ))}
        </div>

        {/* Trust badges */}
        <div
          ref={badgesRef}
          style={{
            opacity: badgesVisible ? 1 : 0,
            transform: badgesVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
          }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          {['NABH Certified', 'ISO 9001:2015', 'HIPAA Compliant', 'Ministry of Health Recognized'].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-white text-slate-600 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-200 shadow-sm"
            >
              <span className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}