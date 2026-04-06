import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: '📱',
    title: 'Book Online',
    description: 'Choose your service, select a convenient time slot, and complete your booking in under 2 minutes.',
  },
  {
    step: '02',
    icon: '✅',
    title: 'Get Confirmed',
    description: 'Receive instant confirmation with the assigned professional\'s name, photo, and estimated arrival time.',
  },
  {
    step: '03',
    icon: '🏠',
    title: 'Care at Home',
    description: 'Our verified professional arrives at your doorstep, equipped and ready to deliver quality care.',
  },
  {
    step: '04',
    icon: '📋',
    title: 'Digital Records',
    description: 'Receive your reports, prescriptions, and care notes digitally — anytime, anywhere.',
  },
]

function useReveal(delay = 0) {
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

function StepCard({ step, index }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
      }}
      className="relative text-center z-10 group"
    >
      {/* Step icon circle */}
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border-2 border-orange-100 mb-5 relative group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300">
        <span className="text-3xl">{step.icon}</span>
        <span className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
          {index + 1}
        </span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 group-hover:border-orange-200 group-hover:shadow-lg transition-all duration-300">
        <h3 className="font-display text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const { ref: headingRef, visible: headingVisible } = useReveal()
  const { ref: ctaRef, visible: ctaVisible } = useReveal()

  return (
    <section className="py-20 bg-neutral-50 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            Simple Process
          </div>
          <h2 className="section-title">How Instabookin Health Works</h2>
          <p className="section-subtitle mx-auto text-center">
            Getting quality home healthcare has never been simpler.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 z-0" />

          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          style={{
            opacity: ctaVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.6s',
          }}
          className="text-center mt-14"
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-[2px] transition-all duration-300"
          >
            Book Your First Visit
            <ArrowRight size={16} />
          </Link>
          <p className="text-slate-400 text-xs mt-3">No registration required · Takes less than 2 minutes</p>
        </div>
      </div>
    </section>
  )
}