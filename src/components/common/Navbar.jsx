import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, GraduationCap, Stethoscope } from 'lucide-react'
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [nursesOpen, setNursesOpen] = useState(false)
  const [trainingOpen, setTrainingOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileNursesOpen, setMobileNursesOpen] = useState(false)
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const dropdownRef = useRef(null)
  const trainingRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
    setTrainingOpen(false)
    setNursesOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      {/* Top bar */}
      <div className="bg-[#2fa5e0] text-white text-xs px-6 py-2 hidden md:flex items-center justify-between">

  {/* Left */}
  <div className="flex items-center gap-4">
    <span>📞</span>
    <a
      href="tel:+918000000000"
      className="font-medium hover:underline"
    >
      +91 80000 00000
    </a>
    <span>|</span>
    <span>24/7 Home Healthcare Services</span>
  </div>

        {/* Right */}
        <div
          className="relative"
          onMouseEnter={() => setHelpOpen(true)}
          onMouseLeave={() => setHelpOpen(false)}
        >
          <div className="flex items-center gap-2 cursor-pointer font-medium">
            <Phone size={14} />
            <span>Need Help?</span>
          </div>

          {helpOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white text-slate-700 rounded-xl shadow-xl border border-slate-100 p-4 z-50">
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />

              <p className="text-sm font-semibold text-slate-800">Support</p>
              <p className="text-xs text-slate-500 mt-1">
                For Support & Appointment Booking call
              </p>

              <a
                href="tel:+918000000000"
                className="mt-3 flex items-center gap-2 text-orange-500 font-semibold hover:underline"
              >
                <Phone size={14} />
                +91 80000 00000
              </a>
            </div>
          )}
        </div>

      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={Logo} alt="Instabookin Health Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 h-full">

            {/* Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                }`
              }
            >
              <span>Home</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
            </NavLink>

            {/* Services with dropdown */}
            <div
              className="relative h-full flex items-center"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center gap-1 rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>

              {/* Services Dropdown */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                  style={{ width: services.length > 6 ? '512px' : '256px' }}
                >
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />
                  <div
                    className="grid"
                    style={{ gridTemplateColumns: services.length > 6 ? 'repeat(2, 1fr)' : '1fr' }}
                  >
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
                    <Link
                      to="/services"
                      className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nurses dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setNursesOpen(true)}
              onMouseLeave={() => setTimeout(() => setNursesOpen(false), 150)}
            >
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center gap-1 rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                <span>Nurses</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${nursesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>

              {nursesOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />

                  {/* Join Us */}
                  <Link
                    to="/hire-nurse"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 group"
                  >
                    <span className="text-lg">👩‍⚕️</span>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">
                      Join Us
                    </span>
                  </Link>

                  {/* Training with right submenu */}
                  {/* Training with right submenu */}
                  <div
                    className="relative"
                    ref={trainingRef}
                    onMouseEnter={() => setTrainingOpen(true)}
                  >
                    <div
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 cursor-pointer group"
                      onClick={() => setTrainingOpen(!trainingOpen)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🎓</span>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">
                          Training
                        </span>
                      </div>
                      <ChevronDown
                        size={13}
                        className="text-slate-400 -rotate-90"
                      />
                    </div>

                    {/* Right submenu */}
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
                                <p className="text-sm font-medium text-slate-700 group-hover:text-orange-600 transition-colors">
                                  {item.label}
                                </p>
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

            {/* Rest of nav links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300" />
              </NavLink>
            ))}
          </div>

          {/* CTA */}
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
              <span className="relative z-10 flex items-center gap-2">Book a Visit</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 pb-4 pt-2 space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile Services dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
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
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
                  >
                    View All →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Nurses dropdown */}
            <div>
              <button
                onClick={() => setMobileNursesOpen(!mobileNursesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Nurses
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${mobileNursesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileNursesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                  <Link
                    to="/hire-nurse"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    <span>👩‍⚕️</span>
                    <span>Join Us</span>
                  </Link>

                  {/* Mobile Training nested */}
                  <button
                    onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>Training</span>
                    </div>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${mobileTrainingOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileTrainingOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-orange-100 pl-3">
                      {trainingLinks.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            <Icon size={13} />
                            <span>{item.label}</span>
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
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
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