import { useState } from 'react'
import { CheckCircle, User, Briefcase, FileText, Heart } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'

const SECTIONS = ['Personal', 'Professional', 'Documents', 'Preferences']

export default function HireNursePage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    // Personal
    fullName: '', phone: '', email: '', dob: '', gender: '',
    address: '', city: '', pincode: '',
    // Professional
    qualification: '', specialization: '', experience: '',
    previousOrg: '', employmentStatus: '', languages: '',
    // Documents
    regNumber: '', nursingCouncil: '', covidStatus: '',
    certificate: null, idProof: null, resume: null,
    // Preferences
    workType: '', shift: '', preferredLocation: '',
    expectedSalary: '', availability: '',
  })

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }))

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/nurses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);

    setSubmitted(true);

  } catch (err) {
    console.error(err);
    alert("Error submitting application");
  }
};

  if (submitted) {
    return (
      <>
        <PageHeader
          title="Thank You for Applying!"
          subtitle="We've received your application and will get back to you within 48 hours."
          breadcrumbs={[{ label: 'Hire Nurses' }]}
        />
        <section className="py-24 bg-slate-50">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle size={48} className="text-orange-500" />
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-800 mb-3">Application Submitted!</h2>
            <p className="text-slate-500 text-sm mb-8">
              Our recruitment team will review your profile and contact you at <strong>{form.phone}</strong> within 48 hours.
            </p>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-left mb-6 space-y-3 text-sm">
              {[
                { label: 'Name', value: form.fullName },
                { label: 'Qualification', value: form.qualification },
                { label: 'Experience', value: `${form.experience} years` },
                { label: 'Work Type', value: form.workType },
                { label: 'Availability', value: form.availability },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-orange-100 pb-2 last:border-0">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold text-slate-700">{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm font-semibold text-orange-500 border-2 border-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-xl transition-all duration-200"
            >
              Submit Another Application
            </button>
          </div>
        </section>
      </>
    )
  }

  const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-slate-50"
  const labelClass = "block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5"
  const sectionClass = "bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"

  return (
    <>
      <PageHeader
        title="Join Our Nursing Team"
        subtitle="Be part of India's fastest growing home healthcare platform. Apply today and start making a difference."
        breadcrumbs={[{ label: 'Hire Nurses' }]}
      />

      <section className="py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Left sidebar */}
            <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-32">

              {/* Why join us */}
              <div className={sectionClass}>
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  Why Join Us
                </div>
                {[
                  { icon: '💰', title: 'Competitive Pay', desc: 'Earn more than hospital salaries with flexible hours.' },
                  { icon: '🕐', title: 'Flexible Shifts', desc: 'Day, night or 24-hour shifts — your choice.' },
                  { icon: '📈', title: 'Career Growth', desc: 'Training, certifications and promotions available.' },
                  { icon: '🏠', title: 'Work Near Home', desc: 'Get assigned patients in your preferred location.' },
                  { icon: '🛡️', title: 'Safe & Verified', desc: 'All patients are verified before assignment.' },
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

              {/* Stats */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-4">Our Numbers</p>
                {[
                  { value: '2,000+', label: 'Active Nurses' },
                  { value: '₹25,000+', label: 'Avg Monthly Earnings' },
                  { value: '100+', label: 'Cities Covered' },
                  { value: '4.8★', label: 'Nurse Satisfaction' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-2 border-b border-white/20 last:border-0">
                    <span className="text-white/80 text-sm">{s.label}</span>
                    <span className="font-extrabold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Section A — Personal Details */}
                <div className={sectionClass}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                      <User size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Personal Details</p>
                      <p className="text-xs text-slate-400">Basic information about you</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" required placeholder="Your full name" value={form.fullName}
                        onChange={e => update('fullName', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input type="tel" required placeholder="+91 98765 43210" value={form.phone}
                        onChange={e => update('phone', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input type="email" required placeholder="your@email.com" value={form.email}
                        onChange={e => update('email', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Date of Birth *</label>
                      <input type="date" required value={form.dob}
                        onChange={e => update('dob', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Gender *</label>
                      <select required value={form.gender}
                        onChange={e => update('gender', e.target.value)} className={inputClass}>
                        <option value="">Select Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>City *</label>
                      <input type="text" required placeholder="Your city" value={form.city}
                        onChange={e => update('city', e.target.value)} className={inputClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Current Address *</label>
                      <input type="text" required placeholder="House no, Street, Area" value={form.address}
                        onChange={e => update('address', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Pincode *</label>
                      <input type="text" required placeholder="641001" value={form.pincode}
                        onChange={e => update('pincode', e.target.value)} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Section B — Professional Details */}
                <div className={sectionClass}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Briefcase size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Professional Details</p>
                      <p className="text-xs text-slate-400">Your qualifications and experience</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Qualification *</label>
                      <select required value={form.qualification}
                        onChange={e => update('qualification', e.target.value)} className={inputClass}>
                        <option value="">Select Qualification</option>
                        <option>ANM</option>
                        <option>GNM</option>
                        <option>BSc Nursing</option>
                        <option>MSc Nursing</option>
                        <option>Post Basic BSc Nursing</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Specialization *</label>
                      <select required value={form.specialization}
                        onChange={e => update('specialization', e.target.value)} className={inputClass}>
                        <option value="">Select Specialization</option>
                        <option>ICU / Critical Care</option>
                        <option>Pediatric Care</option>
                        <option>Elder Care</option>
                        <option>General Nursing</option>
                        <option>Oncology</option>
                        <option>Orthopedic</option>
                        <option>Mother & Baby Care</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Years of Experience *</label>
                      <select required value={form.experience}
                        onChange={e => update('experience', e.target.value)} className={inputClass}>
                        <option value="">Select Experience</option>
                        <option>Fresher (0-1 year)</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5-10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Employment Status *</label>
                      <select required value={form.employmentStatus}
                        onChange={e => update('employmentStatus', e.target.value)} className={inputClass}>
                        <option value="">Select Status</option>
                        <option>Currently Working</option>
                        <option>Not Working</option>
                        <option>Freelancing</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Previous Hospital / Organization</label>
                      <input type="text" placeholder="Hospital or clinic name" value={form.previousOrg}
                        onChange={e => update('previousOrg', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Languages Known *</label>
                      <input type="text" required placeholder="Tamil, English, Hindi..." value={form.languages}
                        onChange={e => update('languages', e.target.value)} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Section C — Documents */}
                <div className={sectionClass}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                      <FileText size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Certifications & Documents</p>
                      <p className="text-xs text-slate-400">Upload your credentials</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nursing Registration Number *</label>
                      <input type="text" required placeholder="e.g. TN/12345/2020" value={form.regNumber}
                        onChange={e => update('regNumber', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>State Nursing Council *</label>
                      <input type="text" required placeholder="e.g. Tamil Nadu Nursing Council" value={form.nursingCouncil}
                        onChange={e => update('nursingCouncil', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>COVID Vaccination Status *</label>
                      <select required value={form.covidStatus}
                        onChange={e => update('covidStatus', e.target.value)} className={inputClass}>
                        <option value="">Select Status</option>
                        <option>Fully Vaccinated (2 doses)</option>
                        <option>Booster Dose Done</option>
                        <option>Partially Vaccinated</option>
                        <option>Not Vaccinated</option>
                      </select>
                    </div>

                    {/* File uploads */}
                    {[
                      { label: 'Nursing Certificate *', field: 'certificate' },
                      { label: 'ID Proof (Aadhar/PAN) *', field: 'idProof' },
                      { label: 'Resume / CV', field: 'resume' },
                    ].map(({ label, field }) => (
                      <div key={field}>
                        <label className={labelClass}>{label}</label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={e => update(field, e.target.files[0])}
                            className="hidden"
                            id={field}
                          />
                          <label
                            htmlFor={field}
                            className="flex items-center gap-2 w-full border-2 border-dashed border-orange-200 hover:border-orange-400 rounded-xl px-4 py-2.5 text-sm cursor-pointer bg-orange-50 hover:bg-orange-100 transition-all duration-200"
                          >
                            <span className="text-orange-400">📎</span>
                            <span className="text-slate-500 truncate">
                              {form[field] ? form[field].name : 'Click to upload (PDF/JPG/PNG)'}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section D — Job Preferences */}
                <div className={sectionClass}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Heart size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Job Preferences</p>
                      <p className="text-xs text-slate-400">Tell us what works best for you</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Preferred Work Type *</label>
                      <div className="flex gap-2 flex-wrap">
                        {['Full-time', 'Part-time', 'Live-in'].map((t) => (
                          <button
                            key={t} type="button"
                            onClick={() => update('workType', t)}
                            className={`px-4 py-2 rounded-xl text-sm border-2 font-medium transition-all ${
                              form.workType === t
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-slate-200 text-slate-600 hover:border-orange-300'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Shift *</label>
                      <div className="flex gap-2 flex-wrap">
                        {['Day', 'Night', '24 Hours'].map((s) => (
                          <button
                            key={s} type="button"
                            onClick={() => update('shift', s)}
                            className={`px-4 py-2 rounded-xl text-sm border-2 font-medium transition-all ${
                              form.shift === s
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-slate-200 text-slate-600 hover:border-orange-300'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Location *</label>
                      <input type="text" required placeholder="City or area you prefer" value={form.preferredLocation}
                        onChange={e => update('preferredLocation', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Expected Salary (per month) *</label>
                      <select required value={form.expectedSalary}
                        onChange={e => update('expectedSalary', e.target.value)} className={inputClass}>
                        <option value="">Select Range</option>
                        <option>Below ₹15,000</option>
                        <option>₹15,000 – ₹20,000</option>
                        <option>₹20,000 – ₹30,000</option>
                        <option>₹30,000 – ₹40,000</option>
                        <option>Above ₹40,000</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Available to Join *</label>
                      <div className="flex gap-2 flex-wrap">
                        {['Immediately', 'Within 1 Week', 'Within 1 Month', 'After Notice Period'].map((a) => (
                          <button
                            key={a} type="button"
                            onClick={() => update('availability', a)}
                            className={`px-4 py-2 rounded-xl text-sm border-2 font-medium transition-all ${
                              form.availability === a
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-slate-200 text-slate-600 hover:border-orange-300'
                            }`}
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-[1px] transition-all duration-300"
                >
                  Submit Application →
                </button>
                <p className="text-center text-xs text-slate-400">
                  🔒 Your information is secure and will never be shared without your consent.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}