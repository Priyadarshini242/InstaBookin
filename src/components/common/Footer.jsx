import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Logo from '../../assets/logo1.png'
const footerLinks = {
  Services: [
    { label: '24 Hours home Nursing Services', to: '/services/home-nursing' },
    { label: 'Nurse Bureaus',                  to: '/services/nurse-bureaus' },
    { label: 'Nursing Services',               to: '/services/nursing-services' },
    { label: 'Senior Citizen care taker services', to: '/services/senior-care' },
    { label: 'Care Taking at Home',            to: '/services/caretaking-home' },
    { label: 'Child Care',                     to: '/services/child-care' },
    { label: 'Elder Home Care',                to: '/services/elder-home-care' },
    { label: 'Orthopedic Care',                to: '/services/orthopedic-care' },
    { label: 'Mother & Baby Care',             to: '/services/mother-baby-care' },
    { label: 'Palliative Care',                to: '/services/palliative-care' },
    { label: 'Specialized Care',               to: '/services/specialized-care' },
    { label: 'Corporate Health Care',          to: '/services/corporate-health-care' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Doctors', to: '/doctors' },
    { label: 'Blog', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Careers', to: '/hire-nurse' },
  ],
  Support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms and conditions' },
    { label: 'Refund Policy', to: '/' },
  ],
}
export default function Footer() {
  return (
    <footer className="relative text-slate-300 overflow-hidden">

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-footerBG"></div>

      {/* 🔥 ADD THIS WRAPPER */}
      <div className="relative z-10">

        <div className="mb-10">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#1f9de0] to-transparent"></div>
          <div className="h-[1px] bg-white/10 mt-1"></div>
        </div>

        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 fade-up">

            {/* Brand column */}
            <div className="lg:col-span-2 fade-up">
              <Link to="/" className="inline-block mb-6 group">
                <div className="p-3 rounded-xl bg-white shadow-[0_8px_25px_rgba(0,0,0,0.4)] border border-white/60 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group-hover:scale-105">
                  <img
                    src={Logo}
                    alt="Instabookin Health Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </Link>

              <p className="text-sm leading-relaxed text-slate-200 mb-6 max-w-xs ">
                India's most trusted home healthcare platform. Quality medical care delivered right to your doorstep.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={15} className="text-[#1f9de0] shrink-0" />
                  <a href="tel:+918000000000" className="hover:text-[#1f9de0] transition-colors">+91 80000 00000</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={15} className="text-[#1f9de0] shrink-0" />
                  <a href="mailto:care@instabookin.health" className="hover:text-[#1f9de0] transition-colors">care@instabookin.health</a>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={15} className="text-[#1f9de0] shrink-0 mt-0.5" />
                  <span>123 Health Avenue, Coimbatore, Tamil Nadu – 641001</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 mt-6">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-[#2b314f]/10 hover:bg-[#1f9de0] text-white hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links], i) => (
              <div
                key={title}
                className={`relative pl-0 lg:pl-6 ${title === 'Services' ? 'lg:col-span-2' : ''}`}
              >
                <h4 className="text-xs font-semibold mb-5 uppercase tracking-wider bg-white/10 text-white px-3 py-1 rounded-md inline-block hover:text-[#1f9de0] transition-colors duration-300">
                  {title}
                </h4>

                <ul className={`gap-x-6 gap-y-2.5 ${title === 'Services' ? 'grid grid-cols-2' : 'space-y-2.5'}`}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="relative text-sm text-slate-200 hover:text-[#1f9de0] transition-all duration-300 hover:translate-x-1 inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1f9de0] after:transition-all after:duration-300 hover:after:w-full"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-200">
            <p>© {new Date().getFullYear()} Instabookin Health Pvt. Ltd. All rights reserved.</p>
            <p>Made with ❤️ for better healthcare in India</p>
          </div>
        </div>

      </div> {/* 🔥 CLOSE WRAPPER */}

    </footer>
  )
}
