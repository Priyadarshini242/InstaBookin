import { useState } from 'react'
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { services } from '../data'

const STEPS = ['Select Service', 'Your Details', 'Schedule', 'Confirm']

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
              i < current
                ? 'bg-primary-600 border-primary-600 text-white'
                : i === current
                ? 'bg-white border-primary-600 text-primary-600'
                : 'bg-white border-slate-200 text-slate-400'
            }`}>
              {i < current ? <CheckCircle size={16} /> : i + 1}
            </div>
            <span className={`text-xs mt-1.5 font-medium hidden sm:block ${
              i === current ? 'text-primary-600' : i < current ? 'text-primary-500' : 'text-slate-400'
            }`}>{step}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`w-12 sm:w-20 h-0.5 mx-1 mb-4 ${i < current ? 'bg-primary-500' : 'bg-slate-200'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    date: '',
    time: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const updateForm = (field, val) => setForm((f) => ({ ...f, [field]: val }))

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const handleSubmit = () => setSubmitted(true)

  if (submitted) {
    return (
      <>
        <PageHeader title="Book a Home Visit" breadcrumbs={[{ label: 'Book' }]} />
        <section className="py-24 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-800 mb-3">Booking Confirmed!</h2>
            <p className="text-slate-500 mb-2">Your booking ID is <span className="font-bold text-primary-600">#IH-{Math.floor(Math.random()*100000)}</span></p>
            <p className="text-slate-500 text-sm mb-8">
              We've sent a confirmation to <strong>{form.email}</strong>. Our team will call you within 30 minutes to confirm the professional's details.
            </p>
            <div className="card p-5 text-left mb-6 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Service</span><span className="font-medium text-slate-700">{form.service}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="font-medium text-slate-700">{form.date}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Time</span><span className="font-medium text-slate-700">{form.time}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Address</span><span className="font-medium text-slate-700">{form.address}, {form.pincode}</span></div>
            </div>
            <button onClick={() => { setSubmitted(false); setStep(0); setForm({ service:'',name:'',phone:'',email:'',address:'',pincode:'',date:'',time:'',notes:'' }) }} className="btn-outline text-sm">
              Book Another Service
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader title="Book a Home Visit" subtitle="Get healthcare delivered to your door in a few simple steps." breadcrumbs={[{ label: 'Book' }]} />

      <section className="py-14 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <StepIndicator current={step} />

          <div className="card p-8">
            {/* Step 0: Service */}
            {step === 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Choose a Service</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <label
                      key={s.id}
                      className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        form.service === s.title
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-slate-200 hover:border-primary-300'
                      }`}
                    >
                      <input
                        type="radio" name="service" value={s.title}
                        checked={form.service === s.title}
                        onChange={(e) => updateForm('service', e.target.value)}
                        className="accent-primary-600"
                      />
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{s.title}</p>
                        <p className="text-xs text-slate-400">{s.price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Details */}
            {step === 1 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Your Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Full Name *', field: 'name', type: 'text', placeholder: 'Patient\'s full name' },
                    { label: 'Phone Number *', field: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                    { label: 'Email Address', field: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Full Address *', field: 'address', type: 'text', placeholder: 'House no, Street, Area, City' },
                    { label: 'PIN Code *', field: 'pincode', type: 'text', placeholder: '641001' },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
                      <input
                        type={type} placeholder={placeholder} value={form[field]}
                        onChange={(e) => updateForm(field, e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Choose Schedule</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date *</label>
                    <input
                      type="date" value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => updateForm('date', e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => updateForm('time', t)}
                          className={`py-2 rounded-xl text-sm border-2 font-medium transition-all ${
                            form.time === t
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-slate-200 text-slate-600 hover:border-primary-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Special Notes (optional)</label>
                    <textarea
                      rows={3} value={form.notes} onChange={(e) => updateForm('notes', e.target.value)}
                      placeholder="Any specific instructions for the professional..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Review & Confirm</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Service', value: form.service },
                    { label: 'Patient Name', value: form.name },
                    { label: 'Phone', value: form.phone },
                    { label: 'Email', value: form.email || '—' },
                    { label: 'Address', value: `${form.address}, ${form.pincode}` },
                    { label: 'Date & Time', value: `${form.date} at ${form.time}` },
                    { label: 'Notes', value: form.notes || '—' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between gap-4 py-2 border-b border-slate-100 text-sm">
                      <span className="text-slate-400 shrink-0">{label}</span>
                      <span className="font-medium text-slate-700 text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 bg-slate-50 p-3 rounded-xl">
                  By confirming, you agree to our Terms of Service and cancellation policy. A confirmation SMS and email will be sent after booking.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={back} disabled={step === 0}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={15} /> Back
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  onClick={next}
                  disabled={step === 0 && !form.service}
                  className="btn-primary text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight size={15} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-primary text-sm flex items-center gap-2">
                  Confirm Booking <CheckCircle size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
