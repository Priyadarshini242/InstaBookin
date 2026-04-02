import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Logo from '../../assets/logo1.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Nurses' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
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
            <img
              src={Logo}
              alt="Instabookin Health Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group px-4 py-2 flex items-center rounded-lg text-base font-medium leading-none relative transition-all duration-150 ${isActive
                    ? 'text-[#2b314f]'
                    : 'text-slate-800 hover:text-[#2b314f]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 group-hover:w-[70%] transition-all duration-300"></span>
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-5 h-full">
            <a
              href="tel:+918000000000"
              className="flex items-center gap-2 text-slate-600 text-sm font-medium hover:text-orange-500 transition-colors"            >
              <Phone size={16} />
              +91 80000 00000
            </a>
            <Link to="/book"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-sm hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Book a Visit
              </span>

              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
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
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:bg-slate-50'
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
