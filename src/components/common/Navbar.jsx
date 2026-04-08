import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Logo from '../../assets/logo1.png'
import { services } from '../../data'

const navLinks = [
  
  { to: '/doctors', label: 'Nurses' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-orange-500 text-white font-bold text-xs py-1.5 px-4 text-center hidden md:block">
        <span>📞 Call us: </span>
        <a href="tel:+918000000000" className="font-semibold hover:underline">+91 80000 00000</a>
        <span className="mx-4">|</span>
        <span>🕐 Available 24/7 – Book a home visit in minutes!</span>
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
                `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                  isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
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
                  `group px-4 py-2 flex items-center gap-1 rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                    isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
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

              {/* Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  {/* Arrow pointer */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />

                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 group"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">
                        {service.title}
                      </span>
                    </Link>
                  ))}

                  {/* View all link */}
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

            {/* Rest of nav links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${
                    isActive ? 'text-[#2b314f]' : 'text-slate-800 hover:text-[#2b314f]'
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
                `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
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

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
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