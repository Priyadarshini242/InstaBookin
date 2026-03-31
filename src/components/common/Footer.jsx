import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Physiotherapy', to: '/services' },
    { label: 'Nursing Care', to: '/services' },
    { label: 'Doctor Visit', to: '/services' },
    { label: 'Lab Tests', to: '/services' },
    { label: 'Elder Care', to: '/services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Doctors', to: '/doctors' },
    { label: 'Careers', to: '/about' },
    { label: 'Blog', to: '/' },
    { label: 'Press', to: '/' },
  ],
  Support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms and conditions' },
    { label: 'Refund Policy', to: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold font-display">IH</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">Instabookin</span>
                <span className="text-xs text-primary-400 font-medium tracking-wider uppercase">Health</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              India's most trusted home healthcare platform. Quality medical care delivered right to your doorstep.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-primary-400 shrink-0" />
                <a href="tel:+918000000000" className="hover:text-white transition-colors">+91 80000 00000</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-primary-400 shrink-0" />
                <a href="mailto:care@instabookin.health" className="hover:text-white transition-colors">care@instabookin.health</a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-primary-400 shrink-0 mt-0.5" />
                <span>123 Health Avenue, Coimbatore, Tamil Nadu – 641001</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Instabookin Health Pvt. Ltd. All rights reserved.</p>
          <p>Made with ❤️ for better healthcare in India</p>
        </div>
      </div>
    </footer>
  )
}
