import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, X, ChevronRight, Star, Clock, Users, Award, Phone } from 'lucide-react'
import courses from '../data/CoursesData'

// ─── Stats & Why Us ──────────────────────────────────────────────────────────
const stats = [
  { icon: Users, value: '500+', label: 'Nurses trained' },
  { icon: Award, value: '5', label: 'Certified programs' },
  { icon: Star, value: '4.9', label: 'Average rating' },
  { icon: Clock, value: '100%', label: 'Hands-on practice' },
]

const whyUs = [
  { title: 'Certified trainers', desc: 'All sessions led by experienced clinical professionals with hospital backgrounds.' },
  { title: 'Hands-on practice', desc: 'Real equipment, real scenarios — not just classroom theory.' },
  { title: 'Flexible batches', desc: 'Weekend and weekday batches to fit your schedule.' },
  { title: 'Placement support', desc: 'Top performers get priority placement within the Instabookin Health network.' },
  { title: 'Certificate on completion', desc: 'Receive a recognized certificate after passing the assessment.' },
  { title: 'Affordable fees', desc: 'Competitively priced with EMI options available on premium courses.' },
]

// ─── Enroll Modal ────────────────────────────────────────────────────────────
function EnrollModal({ isOpen, onClose, preselectedCourse }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    course: preselectedCourse || '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedCourse) setForm((f) => ({ ...f, course: preselectedCourse }))
  }, [preselectedCourse])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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

        <button
          onClick={onClose}
          className="absolute top-3.5 right-4 text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Enquiry received!</h3>
            <p className="text-slate-500 text-sm mb-6">
              Thank you, <span className="font-medium text-slate-700">{form.name}</span>. Our team
              will contact you on <span className="font-medium text-slate-700">{form.phone}</span> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-medium text-slate-500 mb-1">Full name *</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder:text-slate-300"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone number *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder:text-slate-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">City *</label>
              <input
                required
                type="text"
                placeholder="Your city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Course interest *</label>
              <select
                required
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white"
              >
                <option value="">Select a program</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.title}>{c.title}</option>
                ))}
                <option value="Not sure">Not sure — help me choose</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Message (optional)</label>
              <textarea
                rows={3}
                placeholder="Any questions or specific requirements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder:text-slate-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md"
            >
              Submit Enquiry
            </button>

            <p className="text-center text-xs text-slate-400">
              Or call us directly:{' '}
              <a href="tel:+918000000000" className="text-orange-500 font-medium hover:underline">
                +91 80000 00000
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Training Page ───────────────────────────────────────────────────────────
export default function TrainingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')

  const openModal = (courseName = '') => {
    setSelectedCourse(courseName)
    setModalOpen(true)
  }

  useEffect(() => {
    if (window.location.hash === '#enroll') {
      setModalOpen(true)
    }
  }, [])

  return (
    <>
      <EnrollModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedCourse={selectedCourse}
      />

      <main className="pt-[88px]">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">
                  New from Instabookin Health
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#2b314f] leading-tight mb-4">
                  Advanced Clinical <br />
                  <span className="text-orange-500">Training for Nurses</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-xl mb-8 leading-relaxed">
                  Hands-on, certified programs designed to elevate your nursing career — from core clinical skills to ICU readiness and digital healthcare.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openModal()}
                    className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg text-sm"
                  >
                    Enroll Now
                  </button>
                  <a
                    href="tel:+918000000000"
                    className="flex items-center gap-2 border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    <Phone size={15} />
                    Call to enquire
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:w-72">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center">
                      <Icon size={17} className="text-orange-500" />
                    </div>
                    <p className="text-2xl font-bold text-[#2b314f]">{value}</p>
                    <p className="text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Course Cards ── */}
        <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2b314f] mb-2">Our programs</h2>
            <p className="text-slate-500">Choose the program that fits your goals. All included courses are bundled together.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <Link
                  key={course.id}
                  to={`/training/${course.slug}`}
                  className={`group bg-white rounded-2xl border-2 ${course.accentColor} flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer`}
                >
                  {/* ── Premium badge ── */}
                  {course.isPremium && (
                    <div className="absolute top-3 left-4 z-20">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Premium Course
                      </span>
                    </div>
                  )}

                  {/* ── Hover image overlay ── */}
                  <div className="absolute inset-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] rounded-[14px] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                    <div className="absolute inset-0 flex flex-col justify-end p-5 gap-3">
                      <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <h3 className="text-white font-bold text-base leading-snug mb-0.5">{course.title}</h3>
                        <p className="text-white/70 text-xs">{course.subtitle}</p>
                      </div>

                      <div className="flex gap-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                        <span className="flex items-center gap-1 text-[11px] text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                          <Clock size={10} /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                          <Users size={10} /> {course.seats}
                        </span>
                      </div>

                      {/* Only Enroll button on the overlay — stopPropagation prevents card navigation */}
                      <div className="flex gap-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <span className="flex-1 text-center text-xs font-semibold bg-white/10 border border-white/30 text-white py-2.5 rounded-xl">
                          View details →
                        </span>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); openModal(course.title) }}
                          className="flex-1 text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl transition-colors"
                        >
                          Enroll
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ── Card default content ── */}
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-orange-500" />
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.tagStyle}`}>
                        {course.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#2b314f] mb-1">{course.title}</h3>
                      <p className="text-xs text-slate-400">{course.subtitle}</p>
                    </div>

                    <ul className="space-y-1.5 flex-1">
                      {course.modules.map((mod) => (
                        <li key={mod} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={13} className="text-orange-400 flex-shrink-0" />
                          {mod}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                      <div className="flex gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={11} /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Users size={11} /> {course.seats}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                          View details <ChevronRight size={13} />
                        </span>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); openModal(course.title) }}
                          className="text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Enroll
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2b314f] mb-2">Why train with us?</h2>
              <p className="text-slate-500">We're not just a training centre — we're the platform that places you afterwards.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-5">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mb-3" />
                  <h4 className="text-sm font-bold text-[#2b314f] mb-1.5">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section id="enroll" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to get certified?</h2>
              <p className="text-orange-100 text-sm md:text-base max-w-md">
                Fill out a quick form and our team will contact you within 24 hours to confirm your seat and answer any questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => openModal()}
                className="bg-white text-orange-600 font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-orange-50 transition-colors shadow-sm"
              >
                Enquire Now →
              </button>
              <a
                href="tel:+918000000000"
                className="border-2 border-white/50 text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors text-center"
              >
                +91 80000 00000
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}