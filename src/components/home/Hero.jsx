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
     '24 Hours Home Nursing Services','Nurse Bureaus','Nursing Services','Senior Citizen Care Taker Services ',
     'caretaking At Home','Child Care','Elder Home Care','Orthopedic Care',
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
>  <div className="absolute inset-0 bg-[#2b314f]/80" />
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent-400/30 rounded-full" />
    </div>

   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 md:pt-6 md:pb-28">
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
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-[2px]"
            >
              Book a Home Visit
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
          <div className="relative bg-white rounded-3xl p-7 shadow-2xl max-w-sm mx-auto border border-orange-100 overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

            {/* Card header accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-3xl" />

            {/* Header */}
            <div className="mb-6 mt-2">
              <p className="text-xl font-extrabold text-slate-800">Book a Service</p>
              <p className="text-xs text-slate-400 mt-1">Get care at your doorstep in hours</p>
            </div>

            <div className="space-y-4">

              {/* Service Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                  Select Service
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full border-2 rounded-xl px-3 py-2.5 text-sm flex items-center justify-between transition-all duration-200 bg-orange-50 focus:outline-none ${isDropdownOpen ? 'border-orange-400' : 'border-orange-200 hover:border-orange-400'
                      } ${selectedService ? 'text-slate-700' : 'text-slate-400'}`}
                  >
                    {selectedService || (
                      <span className="text-slate-400 italic">— Choose a service —</span>
                    )}
                    <svg
                      className={`w-4 h-4 text-orange-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <ul className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-orange-100 rounded-xl shadow-xl z-50 max-h-48 overflow-y-auto">
                      {services.map((service) => (
                        <li
                          key={service}
                          onClick={() => {
                            setSelectedService(service)
                            setIsDropdownOpen(false)
                          }}
                          className={`px-3 py-2 text-sm cursor-pointer transition-colors ${selectedService === service
                              ? 'bg-orange-500 text-white font-medium'
                              : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                  Your Location
                </label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
                  <input
                    type="text"
                    placeholder="Enter PIN code or city"
                    className="w-full border-2 border-orange-200 hover:border-orange-400 focus:border-orange-400 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none bg-orange-50 placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full border-2 border-orange-200 hover:border-orange-400 focus:border-orange-400 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-orange-50 transition-all duration-200"
                />
              </div>

              {/* CTA Button */}
              <Link
                to="/book"
                className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 rounded-xl shadow-md shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-[1px] transition-all duration-300"
              >
                Check Availability
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Footer badges */}
            <div className="flex items-center justify-between mt-5 pt-5 border-t border-orange-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Shield size={13} className="text-orange-500" />
                100% Secure
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={13} className="text-orange-500" />
                Same-day service
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Star size={13} className="text-orange-500 fill-orange-500" />
                4.8 Rated
              </div>
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
