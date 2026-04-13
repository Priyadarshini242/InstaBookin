import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, GraduationCap, Stethoscope, MapPin } from 'lucide-react'
import Logo from '../../assets/logo1.png'
import { services } from '../../data'

const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

const trainingLinks = [
  {
    to: '/training',
    label: 'Clinical Training Programs',
    desc: 'Certify & upskill your nursing career',
    icon: Stethoscope,
  },
  {
    to: '/training#enroll',
    label: 'Enroll Now',
    desc: 'Apply for the next batch',
    icon: GraduationCap,
  },
]

const CITIES = ['Coimbatore', 'Chennai', 'Madurai', 'Trichy', 'Salem', 'Erode']

async function persistCity(city) {
  localStorage.setItem('selectedCity', city)
  try {
    await fetch('/api/user-city', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city }),
    })
  } catch (err) {
    console.warn('Failed to sync city to backend:', err)
  }
}

// ── Small hook: true when viewport < 768px ───────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export default function Navbar() {
  const isMobile = useIsMobile()
  const location = useLocation()

  const [menuOpen, setMenuOpen]         = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [nursesOpen, setNursesOpen]     = useState(false)
  const [trainingOpen, setTrainingOpen] = useState(false)
  const [helpOpen, setHelpOpen]         = useState(false)
  const [cityOpen, setCityOpen]         = useState(false)

  const [selectedCity, setSelectedCity] = useState(
    () => localStorage.getItem('selectedCity') || 'Coimbatore'
  )

  const cityRef     = useRef(null)
  const servicesRef = useRef(null)
  const nursesRef   = useRef(null)

  // ── Scroll shadow ────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Close everything on route change ────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setNursesOpen(false)
    setTrainingOpen(false)
  }, [location])

  // ── Click-outside for city ───────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target)) setCityOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // ── Click-outside for services ───────────────────────────────────────────
  useEffect(() => {
    if (!isMobile) return
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isMobile])

  // ── Click-outside for nurses ─────────────────────────────────────────────
  useEffect(() => {
    if (!isMobile) return
    const handler = (e) => {
      if (nursesRef.current && !nursesRef.current.contains(e.target)) {
        setNursesOpen(false)
        setTrainingOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isMobile])

  const handleCitySelect = (city) => {
    setSelectedCity(city)
    setCityOpen(false)
    persistCity(city)
  }

  // ── Hover handlers: hover on desktop, click on mobile ───────────────────
  const servicesHover = isMobile ? {} : {
    onMouseEnter: () => setServicesOpen(true),
    onMouseLeave: () => setServicesOpen(false),
  }
  const nursesHover = isMobile ? {} : {
    onMouseEnter: () => setNursesOpen(true),
    onMouseLeave: () => { setNursesOpen(false); setTrainingOpen(false) },
  }
  const trainingHover = isMobile ? {} : {
    onMouseEnter: () => setTrainingOpen(true),
    onMouseLeave: () => setTrainingOpen(false),
  }
  const helpHover = isMobile ? {} : {
    onMouseEnter: () => setHelpOpen(true),
    onMouseLeave: () => setHelpOpen(false),
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >

      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div className="bg-[#2fa5e0] text-white text-xs px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Left: phone (hidden on mobile) + tagline */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+918000000000" className="flex items-center gap-1.5 font-medium hover:underline">
              📞 +91 80000 00000
            </a>
            <span className="opacity-50">|</span>
            <span className="opacity-80">24/7 Home Healthcare Services</span>
          </div>

          {/* Mobile: just the tagline */}
          <span className="md:hidden text-[11px] opacity-80 truncate">24/7 Home Healthcare</span>

          {/* Right: City selector + Need Help */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* ── Elite city selector ─────────────────────────────────── */}
            <div className="relative flex items-center gap-2" ref={cityRef}>
              <span className="hidden md:inline text-white/60 text-[11px] tracking-wide whitespace-nowrap">
                Select Your City : 
              </span>
              <MapPin size={12} className="md:hidden opacity-60 flex-shrink-0" />
              <button
                onClick={() => setCityOpen(!cityOpen)}
                className="flex items-center gap-1 font-semibold text-white text-sm border-b border-dashed border-white/50 hover:border-white pb-0.5 transition-all duration-200"
              >
                {selectedCity}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${cityOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {cityOpen && (
                <div className="absolute right-0 top-full mt-3 w-44 bg-white text-slate-700 rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-3 pb-1.5 pt-0.5">
                    Select your city
                  </p>
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between gap-2 ${
                        selectedCity === city
                          ? 'text-orange-600 font-semibold bg-orange-50'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {city}
                      {selectedCity === city && (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Need Help (desktop) / Call button (mobile) */}
            <div className="relative" {...helpHover}>
              <a
                href="tel:+918000000000"
                className="md:hidden font-medium bg-white/20 px-3 py-1 rounded-md text-xs active:scale-95 transition-transform"
              >
                📞 Call
              </a>
              <div className="hidden md:flex items-center gap-1.5 cursor-pointer font-medium hover:opacity-80 transition-opacity">
                <Phone size={13} />
                <span>Need Help?</span>
              </div>

              {helpOpen && !isMobile && (
                <div className="absolute right-0 top-full mt-0 w-72 bg-white text-slate-700 rounded-xl shadow-xl border border-slate-100 p-4 z-50">
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />
                  <p className="text-sm font-semibold text-slate-800">Support</p>
                  <p className="text-xs text-slate-500 mt-1">For support & appointment booking, reach us at</p>
                  <div className="mt-3 space-y-2.5 border-t border-slate-100 pt-3">
                    <a
                      href="tel:+918000000000"
                      className="flex items-center gap-2.5 text-orange-500 font-semibold hover:underline text-sm"
                    >
                      <Phone size={14} className="flex-shrink-0" />
                      +91 80000 00000
                    </a>
                    <a
                      href="mailto:support@instabookin.com"
                      className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-orange-500 transition-colors text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      support@instabookin.com
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── Main nav ─────────────────────────────────────────────────────── */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={Logo} alt="Instabookin Health Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 h-full">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                  isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                }`
              }
            >
              Home
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
            </NavLink>

            {/* Services */}
            <div className="relative h-full flex items-center" {...servicesHover}>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center gap-1 rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                    isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                Services
                <ChevronDown size={15} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                  style={{ width: services.length > 6 ? '512px' : '256px' }}
                >
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />
                  <div className="grid" style={{ gridTemplateColumns: services.length > 6 ? 'repeat(2, 1fr)' : '1fr' }}>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 group"
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600 truncate">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 mt-2 pt-2 px-4">
                    <Link to="/services" className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600">
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nurses */}
            <div className="relative h-full flex items-center" {...nursesHover}>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center gap-1 rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                    isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                Nurses
                <ChevronDown size={15} className={`transition-transform duration-200 ${nursesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>

              {nursesOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />

                  <Link
                    to="/hire-nurse"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 group"
                  >
                    <span className="text-lg">👩‍⚕️</span>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">Join Us</span>
                  </Link>

                  {/* Training submenu */}
                  <div className="relative" {...trainingHover}>
                    <div className="flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🎓</span>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">Training</span>
                      </div>
                      <ChevronDown size={13} className="text-slate-400 -rotate-90" />
                    </div>

                    {trainingOpen && (
                      <div className="absolute top-0 left-full w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50">
                        <div className="absolute top-0 -left-4 w-4 h-full bg-transparent" />
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-4 pb-2">
                          Nurse Training
                        </p>
                        {trainingLinks.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="flex items-start gap-3 px-4 py-2.5 hover:bg-orange-50 transition-colors duration-150 group"
                            >
                              <div className="mt-0.5 w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                                <Icon size={14} className="text-orange-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-700 group-hover:text-orange-600">{item.label}</p>
                                <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                              </div>
                            </Link>
                          )
                        })}
                        <div className="mx-4 mt-3 rounded-xl bg-orange-50 border border-orange-100 px-3 py-2.5">
                          <p className="text-xs font-semibold text-orange-700">Next batch starting soon</p>
                          <p className="text-[11px] text-orange-500 mt-0.5">Limited seats — enquire today</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                    isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                {link.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5 h-full">
            <a
              href="tel:+918000000000"
              className="flex items-center gap-2 text-slate-600 text-sm font-medium hover:text-orange-500 transition-colors"
            >
              <Phone size={16} />
              +91 80000 00000
            </a>
            <Link
              to="/book"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-sm hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Book a Visit</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile menu ───────────────────────────────────────────────── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 pb-4 pt-2 space-y-1">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile Services */}
            <div ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Services
                <ChevronDown size={15} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                  <Link to="/services" className="block px-3 py-2 text-sm font-semibold text-orange-500">
                    View All →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Nurses */}
            <div ref={nursesRef}>
              <button
                onClick={() => setNursesOpen(!nursesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Nurses
                <ChevronDown size={15} className={`transition-transform duration-200 ${nursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {nursesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                  <Link
                    to="/hire-nurse"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <span>👩‍⚕️</span><span>Join Us</span>
                  </Link>

                  <button
                    onClick={() => setTrainingOpen(!trainingOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-2"><span>🎓</span><span>Training</span></div>
                    <ChevronDown size={13} className={`transition-transform duration-200 ${trainingOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {trainingOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-orange-100 pl-3">
                      {trainingLinks.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                          >
                            <Icon size={13} /><span>{item.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="px-4 pt-2">
              <Link to="/book" className="btn-primary block text-center text-sm">
                Book a Visit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}