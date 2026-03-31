import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, Search, Filter } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { doctors } from '../data'
import CTABanner from '../components/home/CTABanner'

const specialties = ['All', 'General Physician', 'Physiotherapist', 'Cardiologist', 'Neurologist', 'Diabetologist', 'Orthopedic Surgeon']

function DoctorCard({ doctor }) {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-4 mb-5">
        <div className={`w-16 h-16 rounded-2xl ${doctor.color} text-white flex items-center justify-center font-bold text-xl shrink-0`}>
          {doctor.initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-bold text-slate-800 text-lg leading-tight">{doctor.name}</h3>
          <p className="text-primary-600 font-medium text-sm">{doctor.specialty}</p>
          <p className="text-slate-400 text-xs mt-0.5">{doctor.qualification}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-slate-50 rounded-xl p-3 text-center">
          <p className="font-bold text-slate-800">{doctor.experience}</p>
          <p className="text-slate-400 text-xs">Experience</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 text-center">
          <p className="font-bold text-slate-800 flex items-center justify-center gap-1">
            <Star size={13} className="text-yellow-500 fill-yellow-500" />{doctor.rating}
          </p>
          <p className="text-slate-400 text-xs">{doctor.reviews} reviews</p>
        </div>
      </div>

      <div className="space-y-2.5 mb-5">
        <div className="flex items-center gap-2">
          <Clock size={13} className="text-slate-400 shrink-0" />
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            doctor.availability.includes('Today')
              ? 'bg-green-100 text-green-700'
              : 'bg-amber-100 text-amber-700'
          }`}>
            {doctor.availability}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {doctor.languages.map((lang) => (
            <span key={lang} className="text-xs bg-primary-50 text-primary-600 px-2.5 py-0.5 rounded-full">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <p className="text-xs text-slate-400">Consultation Fee</p>
          <p className="font-bold text-primary-700">{doctor.consultationFee}</p>
        </div>
        <Link to="/book" className="btn-primary text-sm py-2.5">
          Book Now
        </Link>
      </div>
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
        title="Our Doctors & Specialists"
        subtitle="Connect with 200+ verified doctors and healthcare professionals available for home visits."
        breadcrumbs={[{ label: 'Doctors' }]}
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
                className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"
              />
            </div>

            {/* Specialty filters */}
            <div className="flex gap-2 flex-wrap">
              {specialties.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSpecialty(s)}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                    selectedSpecialty === s
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'border-slate-200 text-slate-600 hover:border-primary-400 hover:text-primary-600'
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
              <button
                onClick={() => { setSearchQuery(''); setSelectedSpecialty('All') }}
                className="mt-4 btn-outline text-sm"
              >
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
