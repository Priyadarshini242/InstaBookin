import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="bg-gradient-to-br from-primary-700 to-teal-600 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-white/70 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={13} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-white/80 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  )
}
