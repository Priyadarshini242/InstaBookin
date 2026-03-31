import { Link } from 'react-router-dom'
import { Search, Shield, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Verified Professionals',
  '24/7 Availability',
  'Same-day Service',
  'Affordable Pricing',
]

export default function Hero() {
  return (
<section className="relative bg-gradient-to-br from-[#2b314f] via-[#2b314f] to-[#1f2440] overflow-hidden">      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent-400/30 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-yellow-50 transition-colors shadow-lg"
              >
                Book a Home Visit
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div className="hidden md:block">
            <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
              <p className="font-display text-xl font-bold text-slate-800 mb-5">Book a Service</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-500 font-medium mb-1.5">Select Service</label>
                  <select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50">
                    <option>Physiotherapy</option>
                    <option>Nursing Care</option>
                    <option>Medical Equipment</option>
                    <option>Lab Tests</option>
                    <option>Elder Care</option>
                    <option>Trained Attendants</option>
                    <option>Covid Care</option>
                    <option>Doctor Consultation</option>
                    <option>Vaccination</option>
                    <option>Critical Care</option>
                    <option>Nutrition & Diet Consultation</option>
                    <option>Counselling</option>
                    <option>Mother & Baby Care</option>
                    <option>Diabetes Care</option>
                  </select>
                </div>
                <div> 
                  <label className="block text-xs text-slate-500 font-medium mb-1.5">Your Location</label>
                  <div className="relative">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter PIN code or city"
                      className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 font-medium mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"
                  />
                </div>
                <Link
                  to="/book"
                  className="block w-full text-center btn-primary text-sm py-3"
                >
                  Check Availability →
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Shield size={13} className="text-primary-500" />
                  100% Secure
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock size={13} className="text-primary-500" />
                  Same-day service
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Star size={13} className="text-yellow-500 fill-orange-500" />
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
