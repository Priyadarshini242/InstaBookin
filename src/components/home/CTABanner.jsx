import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#2b304f] to-[#3a3f6b] relative overflow-hidden">

      {/* Glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 text-center text-white">

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Ready to Book Your Home Healthcare?
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Join 5 lakh+ satisfied patients. Get quality medical care delivered to your door today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-white text-[#2b304f] font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-2xl"
            >
              Book a Home Visit <ArrowRight size={16} />
            </Link>

            <a
              href="tel:+918000000000"
              className="group inline-flex items-center gap-2 border border-white/40 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:scale-105 hover:shadow-2xl"
            >
              <Phone size={16} className="transition-transform duration-300 group-hover:rotate-12" />
              Call +91 80000 00000
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
