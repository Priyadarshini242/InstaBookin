import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/2" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to Book Your Home Healthcare?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Join 5 lakh+ satisfied patients. Get quality medical care delivered to your door today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-yellow-50 transition-colors shadow-lg"
          >
            Book a Home Visit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+918000000000"
            className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Phone size={16} /> Call +91 80000 00000
          </a>
        </div>
      </div>
    </section>
  )
}
