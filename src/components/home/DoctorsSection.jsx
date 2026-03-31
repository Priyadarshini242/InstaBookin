import { Link } from 'react-router-dom'
import { Star, Clock } from 'lucide-react'
import { doctors } from '../../data'

function DoctorCard({ doctor }) {
  return (
    <div className="card p-5 flex flex-col gap-4">
      {/* Avatar */}
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-2xl ${doctor.color} text-white flex items-center justify-center font-bold text-lg shrink-0`}>
          {doctor.initials}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-800 truncate">{doctor.name}</h3>
          <p className="text-primary-600 text-sm font-medium">{doctor.specialty}</p>
          <p className="text-slate-400 text-xs">{doctor.qualification}</p>
        </div>
      </div>

      {/* Info pills */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
          {doctor.experience} exp
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
          doctor.availability.includes('Today')
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}>
          <Clock size={11} className="inline mr-1" />
          {doctor.availability}
        </span>
      </div>

      {/* Rating & fee */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star size={13} className="text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-slate-700 text-sm">{doctor.rating}</span>
          <span className="text-slate-400 text-xs">({doctor.reviews})</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400">Fee</span>
          <p className="font-bold text-primary-700 text-sm">{doctor.consultationFee}</p>
        </div>
      </div>

      <Link to="/book" className="btn-primary text-sm text-center py-2.5">
        Book Appointment
      </Link>
    </div>
  )
}

export default function DoctorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Experts</p>
            <h2 className="section-title">Meet Our Doctors</h2>
            <p className="section-subtitle">
              200+ verified doctors and specialists available for home visits.
            </p>
          </div>
          <Link to="/doctors" className="btn-outline text-sm whitespace-nowrap self-start md:self-auto">
            View All Doctors →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.slice(0, 6).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}
