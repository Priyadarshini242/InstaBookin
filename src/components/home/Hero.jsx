import { Link } from 'react-router-dom'
import { Search, Shield, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
const highlights = [
  'Verified Professionals',
  '24/7 Availability',
  'Same-day Service',
  'Affordable Pricing',
]

export default function Hero() {
  const services = [
    '24 Hours Home Nursing Services', 'Nurse Bureaus', 'Nursing Services', 'Senior Citizen Care Taker Services ',
    'caretaking At Home', 'Child Care', 'Elder Home Care', 'Orthopedic Care',
  ]
  const [selectedService, setSelectedService] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const stats = [
    { label: 'Patients Served', value: 10000, suffix: '+' },
    { label: 'Verified Nurses', value: 500, suffix: '+' },
    { label: 'Cities Covered', value: 15, suffix: '+' },
    { label: 'Average Rating', value: 4.8, suffix: '★', isDecimal: true },
  ]
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const timers = stats.map((stat, i) => {
      const increment = stat.value / steps
      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timers?.[i])
        }
        setCounts(prev => {
          const updated = [...prev]
          updated[i] = stat.isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current)
          return updated
        })
      }, interval)
    })

    return () => timers.forEach(clearInterval)
  }, [])
  return (<section
    className="relative"
    style={{
      backgroundImage: "url('/hero-healthcare.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    }}
  >  <div className="absolute inset-0 bg-[#2b314f]/35" />
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent-400/30 rounded-full" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] pb-20 md:pt-[70px] md:pb-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Star size={14} className="text-yellow-300 fill-yellow-300" />
            India's #1 Home Healthcare Platform
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Quality Medical Care,{' '}
            <span className="text-[#f56f22]">At Your Doorstep</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
            Connect with certified doctors, nurses, and physiotherapists who come to your home. Book in minutes, get care in hours.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle size={15} className="text-yellow-300 shrink-0" />
                {h}
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-4 gap-3 mb-8 mt-2">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-3 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-xl font-extrabold text-white leading-none">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="text-white/60 text-[10px] mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-[2px]"
            >
              Contact
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-400 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:-translate-y-[2px]"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Right card */}
        <div className="hidden md:block">
          <div className="relative max-w-sm ml-auto  mr-4 lg:mr-0">

            {/* Glow Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-lg opacity-30 animate-pulse"></div>

            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200 
animate-[float_5s_ease-in-out_infinite]">

              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-3xl" />

              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-orange-100 
animate-[iconFloat_3s_ease-in-out_infinite] group">

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-orange-300 opacity-40 animate-ping"></div>

                {/* Icon */}
                <Shield
                  className="text-orange-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  size={28}
                />
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-extrabold text-center text-slate-800 mb-3">
                Book Trusted Healthcare at Home
              </h3>

              {/* Subtext */}
              <p className="text-center text-slate-500 text-sm mb-6 leading-relaxed">
                Get professional healthcare services at your doorstep. Easy booking, certified nurses, and reliable care for you and your family.
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-7">
                {[
                  'Easy Appointment Booking',
                  'Certified & Experienced Nurses',
                  'Safe & Reliable Home Care',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-orange-500" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="relative overflow-hidden rounded-xl">
                <Link
                  to="/services"
                  className="relative block text-center w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  All Services →

                  {/* Diagonal Shine */}
                  <span
                    className="absolute top-0 left-[-120%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-12 blur-sm"
                    style={{
                      animation: 'shineMove 5s ease-in-out infinite',
                    }}
                  />
                </Link>
              </div>
              {/* Bottom subtle text */}
              <p className="text-[11px] text-center text-slate-400 mt-4">
                Trusted by 500+ nurses across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white" />
      </svg>
    </div>
  </section>
  )
}
