import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, GraduationCap, Stethoscope } from 'lucide-react'
import Logo from '../../assets/logo1.png'

// ── Hardcoded service links (no data.js dependency) ──────────────────────────
const serviceLinks = [
  { title: '24 Hours Home Nursing Services', to: '/nurse' },
  { title: 'Nursing Services',               to: '/nursing' },
  { title: 'Caretaking At Home',             to: '/caretaking' },
  { title: 'Elder Home Care',                to: '/elder' },
  { title: 'Mother & Baby Care',             to: '/motherbaby' },
  { title: 'Specialized Care Services',      to: '/special' },
  { title: 'Nurse Bureaus',                  to: '/bureaus' },
  { title: 'Senior Citizen Care Taker Services', to: '/seniorcitizen' },
  { title: 'Child Care',                     to: '/childcare' },
  { title: 'Orthopedic Care',                to: '/ortho' },
  { title: 'Corporate Health Services',      to: '/corporate-health' },
  { title: 'Palliative Care',                to: '/palliative-care' },
]

const navLinks = [
  { to: '/about',   label: 'About Us' },
  { to: '/contact', label: 'Contact'  },
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
  const isMobile  = useIsMobile()
  const location  = useLocation()

  const [menuOpen,      setMenuOpen]      = useState(false)
  const [scrolled,      setScrolled]      = useState(false)
  const [servicesOpen,  setServicesOpen]  = useState(false)
  const [nursesOpen,    setNursesOpen]    = useState(false)
  const [trainingOpen,  setTrainingOpen]  = useState(false)

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

  // ── Click-outside for services ───────────────────────────────────────────
  useEffect(() => {
    if (!isMobile) return
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target))
        setServicesOpen(false)
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

  // ── Hover handlers: hover on desktop, click on mobile ───────────────────
  const servicesHover = isMobile ? {} : {
    onMouseEnter: () => setServicesOpen(true),
    onMouseLeave: () => setServicesOpen(false),
  }
  const nursesHover = isMobile ? {} : {
    onMouseEnter: () => setNursesOpen(true),
    onMouseLeave: () => { setNursesOpen(false); setTrainingOpen(false) },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* ── Main nav ─────────────────────────────────────────────────────── */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={Logo} alt="Instabookin Health Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1 h-full">

            {/* Home */}
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

            {/* Services dropdown */}
            <div className="relative h-full flex items-center" {...servicesHover}>
              <button
                onClick={() => isMobile && setServicesOpen(!servicesOpen)}
                className="group px-4 py-2 flex items-center gap-1 rounded-lg text-base font-medium leading-none relative transition-all duration-150 text-slate-800 hover:text-[#2b314f]"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                  style={{ width: '512px' }}
                >
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />

                  <div className="grid grid-cols-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.title}
                        to={service.to}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 group"
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600 truncate">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 mt-2 pt-2 px-4">
                    <Link
                      to="/services"
                      className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
                    >
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
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>
            </div>

            {/* About Us & Contact */}
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
              to="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-sm hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
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
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.title}
                      to={service.to}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {service.title}
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
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${nursesOpen ? 'rotate-180' : ''}`}
                />
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
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${trainingOpen ? 'rotate-180' : ''}`}
                    />
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