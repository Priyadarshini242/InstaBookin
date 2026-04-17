import { useState } from 'react'
import { CheckCircle, Phone, MapPin, Calendar, Clock, User, Mail, FileText } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { services } from '../data'

export default function BookingPage() {
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isValid = form.service && form.name && form.phone && form.address && form.pincode && form.date && form.time

  if (submitted) {
    return (
      <>
        <PageHeader title="Book a Home Visit" breadcrumbs={[{ label: 'Book' }]} />
        <section className="py-24 bg-slate-50">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle size={48} className="text-orange-500" />
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-800 mb-3">Booking Confirmed!</h2>
            <p className="text-slate-500 mb-2">Your booking ID is{' '}
              <span className="font-bold text-orange-500">#IH-{Math.floor(Math.random() * 100000)}</span>
            </p>
            <p className="text-slate-500 text-sm mb-8">
              Our team will call you within 30 minutes to confirm the professional's details.
            </p>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-left mb-6 space-y-3 text-sm">
              {[
                { label: 'Service', value: form.service },
                { label: 'Name', value: form.name },
                { label: 'Date', value: form.date },
                { label: 'Time', value: form.time },
                { label: 'Address', value: `${form.address}, ${form.pincode}` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-orange-100 pb-2">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold text-slate-700">{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => { setSubmitted(false); setForm({ service: '', name: '', phone: '', email: '', address: '', pincode: '', date: '', time: '', notes: '' }) }}
              className="text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-xl transition-all duration-200"
            >
              Book Another Service
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Book a Home Visit"
        subtitle="Fill in your details below and we'll have a professional at your door."
        breadcrumbs={[{ label: 'Book' }]}
      />

      <section className="py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Left — Why Book */}
            <div className="lg:col-span-1 space-y-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  Why Choose Us
                </div>
                {[
                  { icon: '✅', title: 'Verified Professionals', desc: 'All staff are background-checked and certified.' },
                  { icon: '⚡', title: 'Same-Day Service', desc: 'Get care within hours of booking.' },
                  { icon: '🔒', title: '100% Secure', desc: 'Your data is always private and protected.' },
                  { icon: '💬', title: '24/7 Support', desc: 'We\'re always available to assist you.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call us card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-1">Prefer to call?</p>
                <p className="text-white/80 text-sm mb-4">Our team is available 24/7 to take your booking.</p>
                <a
                  href="tel:+918000000000"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors"
                >
                  <Phone size={15} />
                  +91 80000 00000
                </a>
              </div>
            </div>

            {/* Right — Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">

                <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">
                  Your Booking Details
                </h2>

                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Select Service *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {services.map((s) => (
                      <label
                        key={s.id}
                        className={`flex items-center gap-3 p-3 border-2 rounded-xl cursor-pointer transition-all ${form.service === s.title
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-slate-200 hover:border-orange-300'
                          }`}
                      >
                        <input
                          type="radio" name="service" value={s.title}
                          checked={form.service === s.title}
                          onChange={(e) => updateForm('service', e.target.value)}
                          className="accent-orange-500"
                        />
                        <span className="text-lg">{s.icon}</span>
                        <div>
                          <p className="font-semibold text-slate-800 text-xs">{s.title}</p>
                          <p className="text-xs text-orange-500 font-medium">{s.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-6" />

                {/* Personal Details */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Personal Details
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
                      <input
                        type="text" placeholder="Full Name *" value={form.name}
                        onChange={(e) => updateForm('name', e.target.value)}
                        required
                        className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      />
                    </div>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
                      <input
                        type="tel" placeholder="Phone Number *" value={form.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        required
                        className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      />
                    </div>
                    <div className="relative sm:col-span-2">
                      <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
                      <input
                        type="email" placeholder="Email Address" value={form.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-6" />

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Your Location
                  </label>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="relative sm:col-span-2">
                      <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
                      <input
                        type="text" placeholder="Full Address *" value={form.address}
                        onChange={(e) => updateForm('address', e.target.value)}
                        required
                        className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      />
                    </div>
                    <div>
                      <input
                        type="text" placeholder="PIN Code *" value={form.pincode}
                        onChange={(e) => updateForm('pincode', e.target.value)}
                        required
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-6" />

                {/* Schedule */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Schedule
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
                      <input
                        type="date" value={form.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => updateForm('date', e.target.value)}
                        required
                        className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      />
                    </div>
                    <div className="relative">
                      <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none" />
                      <select
                        value={form.time}
                        onChange={(e) => updateForm('time', e.target.value)}
                        required
                        className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
                      >
                        <option value="">Select Time *</option>
                        {['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="relative">
                    <FileText size={15} className="absolute left-3 top-3 text-orange-400" />
                    <textarea
                      rows={3} value={form.notes}
                      onChange={(e) => updateForm('notes', e.target.value)}
                      placeholder="Special instructions (optional)"
                      className="w-full border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50 resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-[1px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  Confirm Booking →
                </button>

                <p className="text-center text-xs text-slate-400 mt-3">
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}