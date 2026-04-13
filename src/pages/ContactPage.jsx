import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import { faqs } from '../data'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 80000 00000', sub: 'Available 24/7', href: 'tel:+918000000000' },
  { icon: Mail, label: 'Email', value: 'care@instabookin.health', sub: 'Reply within 2 hours', href: 'mailto:care@instabookin.health' },
  { icon: MapPin, label: 'Address', value: '123 Health Avenue, Coimbatore', sub: 'Tamil Nadu – 641001', href: null },
  { icon: Clock, label: 'Working Hours', value: '24 × 7 × 365', sub: 'Always available for emergencies', href: null },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
  title="Contact Us"
  breadcrumbs={[{ label: 'Contact' }]}
  backgroundImage="/Contact.jpg"
/>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-5">
              <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <item.icon size={18} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-slate-800 hover:text-orange-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-800">{item.value}</p>
                    )}
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <MessageSquare size={22} className="text-orange-500" />
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={56} className="text-orange-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. Our team will get back to you within 2 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }} className="mt-6 text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-xl transition-all duration-200">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border-orange-200 bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border-orange-200 bg-slate-50"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border-orange-200 bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject *</label>
                        <select
                          name="subject" required value={form.subject} onChange={handleChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border-orange-200 bg-slate-50"
                        >
                          <option value="">Select a subject</option>
                          <option>Book a Service</option>
                          <option>Service Enquiry</option>
                          <option>Complaint / Feedback</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                      <textarea
                        name="message" required rows={5} value={form.message} onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border-orange-200 bg-slate-50 resize-none"
                      />
                    </div>
                    <button type="submit" className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300">
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-center text-slate-800 mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
