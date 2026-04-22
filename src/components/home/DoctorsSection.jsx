import { Link } from 'react-router-dom'
import { Star, Clock, ArrowRight, BadgeCheck } from 'lucide-react'
import { doctors } from '../../data'

function DoctorCard({ doctor, index }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 overflow-hidden"
    >
      {/* Orange top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-0 group-hover:w-full transition-all duration-500" />

      {/* Avatar + info */}
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-2xl ${doctor.color} text-white flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
          {doctor.initials}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-slate-800 truncate group-hover:text-orange-600 transition-colors duration-300">
              {doctor.name}
            </h3>
            <BadgeCheck size={15} className="text-orange-500 shrink-0" />
          </div>
          <p className="text-orange-500 text-sm font-semibold">{doctor.specialty}</p>
          <p className="text-slate-400 text-xs">{doctor.qualification}</p>
        </div>
      </div>

      {/* Info pills */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
          {doctor.experience} exp
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${
          doctor.availability.includes('Today')
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}>
          <Clock size={11} />
          {doctor.availability}
        </span>
      </div>
    </div>
  )
}

export default function DoctorsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              Our Experts
            </div>
            <h2 className="section-title">Meet Our Nurses</h2>
            <p className="section-subtitle">
              200+ verified doctors and specialists available for home visits.
            </p>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-5 py-2.5 rounded-xl transition-all duration-200 self-start md:self-auto whitespace-nowrap"
          >
            View All Nurses <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.slice(0, 6).map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}