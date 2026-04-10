import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  CheckCircle2, Clock, Users, ArrowLeft, Phone,
  X, ChevronRight
} from 'lucide-react'
import courses from '../data/CoursesData'  // ← single source of truth

// ─── Enroll Modal (same as training.jsx, extracted here for self-containment) ─
function EnrollModal({ isOpen, onClose, preselectedCourse }) {
  const [form, setForm] = useState({
    name: '', phone: '', city: '',
    course: preselectedCourse || '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4">
          <h2 className="text-white font-semibold text-lg">Enroll in a program</h2>
          <p className="text-orange-100 text-sm mt-0.5">Our team will call you within 24 hours</p>
        </div>
        <button onClick={onClose} className="absolute top-3.5 right-4 text-white/80 hover:text-white">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Enquiry received!</h3>
            <p className="text-slate-500 text-sm mb-6">
              Thank you, <span className="font-medium text-slate-700">{form.name}</span>. We'll reach
              you on <span className="font-medium text-slate-700">{form.phone}</span> within 24 hours.
            </p>
            <button onClick={onClose} className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-medium text-slate-500 mb-1">Full name *</label>
                <input required type="text" placeholder="Your name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-slate-300" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone number *</label>
                <input required type="tel" placeholder="+91 98765 43210" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-slate-300" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">City *</label>
              <input required type="text" placeholder="Your city" value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-slate-300" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Course interest *</label>
              <select required value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white">
                <option value="">Select a program</option>
                {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
                <option value="Not sure">Not sure — help me choose</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Message (optional)</label>
              <textarea rows={3} placeholder="Any questions..." value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-slate-300 resize-none" />
            </div>
            <button type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md">
              Submit Enquiry
            </button>
            <p className="text-center text-xs text-slate-400">
              Or call:{' '}
              <a href="tel:+918000000000" className="text-orange-500 font-medium hover:underline">+91 80000 00000</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Course Detail Page ──────────────────────────────────────────────────────
export default function CourseDetailPage() {
  const { slug } = useParams()
  const [modalOpen, setModalOpen] = useState(false)

  const course = courses.find((c) => c.slug === slug)

  // Unknown slug → redirect back to /training
  if (!course) return <Navigate to="/training" replace />

  const Icon = course.icon

  // Other courses to browse (excluding current)
  const otherCourses = courses.filter((c) => c.slug !== slug)

  return (
    <>
      <EnrollModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedCourse={course.title}
      />

      <main>

        {/* ── Breadcrumb ── */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-slate-400">
            <Link to="/training" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors font-medium">
              <ArrowLeft size={14} /> All programs
            </Link>
            <ChevronRight size={13} />
            <span className="text-slate-600 truncate">{course.title}</span>
          </div>
        </div>

        {/* ── Course image banner ── */}
        <div className="w-full h-56 md:h-72 overflow-hidden relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Title floats over the image on mobile for a nice overlap */}
          <div className="absolute bottom-5 left-0 right-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto md:hidden">
            <h1 className="text-2xl font-bold text-white leading-tight drop-shadow">{course.title}</h1>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 pt-8 md:pt-10">
            <div className="flex flex-col md:flex-row md:items-start gap-8">

              {/* Left: info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-orange-500" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.tagStyle}`}>
                    {course.tag}
                  </span>
                  {course.isPremium && (
                    <span className="bg-gradient-to-r from-orange-500 to-amber-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Premium Course
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-[#2b314f] mb-2 leading-tight">
                  {course.title}
                </h1>
                <p className="text-slate-400 text-base mb-5">{course.subtitle}</p>

                <p className="text-slate-600 text-base leading-relaxed max-w-2xl mb-6">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
                  <span className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-lg px-3 py-2 shadow-sm">
                    <Clock size={14} className="text-orange-400" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-lg px-3 py-2 shadow-sm">
                    <Users size={14} className="text-orange-400" /> {course.seats}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg text-sm"
                  >
                    Enroll in this program
                  </button>
                  <a
                    href="tel:+918000000000"
                    className="flex items-center gap-2 border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    <Phone size={15} /> Call to enquire
                  </a>
                </div>
              </div>

              {/* Right: modules card */}
              <div className="md:w-72 lg:w-80 flex-shrink-0">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-[#2b314f] mb-4">What you'll learn</h3>
                  <ul className="space-y-3">
                    {course.modules.map((mod) => (
                      <li key={mod} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0 mt-0.5" />
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Other Programs ── */}
        {otherCourses.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-xl font-bold text-[#2b314f] mb-6">Explore other programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCourses.map((c) => {
                const OtherIcon = c.icon
                return (
                  <Link
                    key={c.id}
                    to={`/training/${c.slug}`}
                    className={`bg-white rounded-2xl border-2 ${c.accentColor} p-4 flex items-start gap-3 hover:shadow-md transition-shadow duration-200 group`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <OtherIcon size={18} className="text-orange-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#2b314f] group-hover:text-orange-600 transition-colors">{c.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5 truncate">{c.subtitle}</p>
                    </div>
                    <ChevronRight size={15} className="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-1" />
                  </Link>
                )
              })}
            </div>
          </section>
        )}

      </main>
    </>
  )
}