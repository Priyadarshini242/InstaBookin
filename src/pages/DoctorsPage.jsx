import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, Search, ArrowRight, BadgeCheck } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { doctors } from '../data'
import CTABanner from '../components/home/CTABanner'

const specialties = ['All', 'General Physician', 'Physiotherapist', 'Cardiologist', 'Neurologist', 'Diabetologist', 'Orthopedic Surgeon']

function DoctorCard({ doctor }) {
  return (
    <div className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 overflow-hidden">

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
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${doctor.availability.includes('Today')
          ? 'bg-green-100 text-green-700'
          : 'bg-amber-100 text-amber-700'
          }`}>
          <Clock size={11} />
          {doctor.availability}
        </span>
        {doctor.languages?.map((lang) => (
          <span key={lang} className="text-xs bg-orange-50 text-orange-500 px-2.5 py-1 rounded-full font-medium">
            {lang}
          </span>
        ))}
      </div>

      {/* Rating & fee */}
      <div className="flex items-center justify-between py-3 border-t border-b border-slate-100">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 fill-slate-200'}
            />
          ))}
          <span className="font-semibold text-slate-700 text-sm ml-1">{doctor.rating}</span>
          <span className="text-slate-400 text-xs">({doctor.reviews})</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400">Fee</span>
          <p className="font-extrabold text-orange-500 text-sm">{doctor.consultationFee}</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        to="/book"
        className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group-hover:gap-3 mt-auto"
      >
        Book Appointment
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}
export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = doctors.filter((d) => {
    const matchSpec = selectedSpecialty === 'All' || d.specialty === selectedSpecialty
    const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    return matchSpec && matchSearch
  })

  return (
    <>
      <PageHeader
        title="Our Doctors"
        breadcrumbs={[{ label: 'Doctors' }]}
        backgroundImage="/Doctors.jpg"
      />

      {/* Filters */}
      <section className="bg-white border-b border-slate-100 sticky top-[96px] z-30 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
              />
            </div>

            {/* Specialty filters */}
            <div className="flex gap-2 flex-wrap">
              {specialties.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSpecialty(s)}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${selectedSpecialty === s
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'border-slate-200 text-slate-600 hover:border-orange-400 hover:text-orange-500'
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor grid */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <p className="text-5xl mb-4">🔍</p>
              <p className="font-medium text-lg">No doctors found matching your search.</p>
              <button onClick={() => { setSearchQuery(''); setSelectedSpecialty('All') }} className="mt-4 text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-xl transition-all duration-200">
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-400 mb-6">{filtered.length} doctor{filtered.length !== 1 ? 's' : ''} found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((doc) => (
                  <DoctorCard key={doc.id} doctor={doc} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
