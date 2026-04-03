import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div
      className="relative text-white pt-0 pb-16 md:pt-0 md:pb-20 lg:pt-0 lg:pb-24 overflow-hidden bg-cover bg-center"
      style={{
  backgroundImage: "url('/hero-healthcare.png')"
}}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient overlay for brand tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b304f]/80 to-[#3a3f6b]/80"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] md:pt-[120px] lg:pt-[130px]">

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-white/70 text-sm mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={13} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

       

          {/* Section label */}
          <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
            Our Services
          </p>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Our <span className="text-orange-400">Healthcare</span> Services
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        

        {/* Feature pills */}
        <div className="mt-6 flex flex-wrap gap-3 max-w-2xl pl-1">
          <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 backdrop-blur-sm hover:bg-white/20 transition flex items-center gap-2">
            ✔ Certified Professionals
          </div>
          <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 backdrop-blur-sm hover:bg-white/20 transition flex items-center gap-2">
            ✔ 24/7 Availability
          </div>
          <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 backdrop-blur-sm hover:bg-white/20 transition flex items-center gap-2">
            ✔ Trusted by 10,000+ Patients
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L80,208C160,192,320,160,480,149.3C640,139,800,149,960,165.3C1120,181,1280,203,1360,213.3L1440,224V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}