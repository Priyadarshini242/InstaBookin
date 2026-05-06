import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const services = [
  {
    icon: '🩺',
    iconBg: 'bg-red-100',
    title: 'Post-surgical care',
    desc: 'Expert monitoring and wound management at home after procedures',
  },
  {
    icon: '💊',
    iconBg: 'bg-blue-100',
    title: 'Medication management',
    desc: 'Timely administration and dosage tracking by qualified nurses',
  },
  {
    icon: '👴',
    iconBg: 'bg-orange-100',
    title: 'Elderly home care',
    desc: 'Compassionate daily support for senior patients and their families',
  },
  {
    icon: '💉',
    iconBg: 'bg-green-100',
    title: 'IV & wound therapy',
    desc: 'Safe, sterile procedures performed in your own environment',
  },
]

const steps = [
  {
    num: 1,
    title: 'Book online or via app',
    desc: 'Select your required service, preferred time slot, and patient details in minutes',
  },
  {
    num: 2,
    title: 'Get matched instantly',
    desc: 'Our system pairs you with the nearest available, best-matched certified nurse',
  },
  {
    num: 3,
    title: 'Nurse arrives at your door',
    desc: 'Track your nurse in real-time and receive care in the comfort of home',
  },
  {
    num: 4,
    title: 'Follow-up & digital report',
    desc: 'Receive a digital care summary and schedule follow-ups seamlessly',
  },
]

const pills = [
  'No clinic trips needed',
  'Background-verified nurses',
  'Arrives within the hour',
  'Transparent pricing',
]

function ServiceCard({ service }) {
  return (
    <div className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden"
      style={{ '--hover-border': '#1f9de0' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#1f9de0'}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'linear-gradient(to right, #1f9de0, #0d7bb5)' }}
      />
      <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        {service.icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 transition-colors duration-300 mb-1 group-hover:[color:#1f9de0]">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
      </div>
    </div>
  )
}

function StepCard({ step }) {
  return (
    <div className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = '#1f9de0'}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'linear-gradient(to right, #1f9de0, #0d7bb5)' }}
      />
      <div className="w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
      >
        {step.num}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 transition-colors duration-300 mb-1 group-hover:[color:#1f9de0]">
          {step.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </div>
  )
}

export default function NursingService() {
  return (
    <>
      <PageHeader
        title="24 Hours Home Nursing Services "
        breadcrumbs={[{ label: 'Services' }, { label: 'Nursing Services' }]}
        backgroundImage="/24HoursHomeNursing.jpg"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              24 Hours Home Nursing Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Care That <span className="italic" style={{ color: '#1f9de0' }}>Never Sleeps</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, we believe quality healthcare belongs at home. Our certified nurses come directly to your doorstep — day or night, weekdays or weekends, because your health doesn't follow a schedule.
              </p>
              <p>
                Whether you're recovering from surgery, managing a chronic condition, or caring for an elderly loved one, our 24-hour home nursing service ensures that a trained, compassionate nurse is always within reach. No more stressful trips to clinics. No long waiting rooms. Just personalised, professional care in the comfort of your own home.
              </p>
              <p>
                Our nurses are carefully screened, background-verified, and trained to handle a wide range of medical needs — from wound dressing, IV therapy, and medication administration to post-operative monitoring, elderly care, and palliative support. Every care plan is tailored to the patient's individual needs, ensuring the highest standard of clinical attention alongside genuine human warmth.
              </p>
              <p>
                With <span className="font-semibold text-slate-700">Instabookin</span>'s real-time booking platform, scheduling a nurse has never been easier. Simply choose your time, share your care requirements, and a qualified nurse will be at your door — often within the hour. Our transparent pricing, digital health records, and dedicated care coordinators give families complete peace of mind at every step.
              </p>
            </div>

            {/* Highlight Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{ backgroundColor: '#e8f5fd', color: '#1f9de0', borderColor: '#b3ddf5' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#1f9de0' }} />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              What's Included
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              How it works — 4 simple steps
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Book a Nurse in Minutes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <StepCard key={s.num} step={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEED A NURSE BANNER ── */}
      <section className="py-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border"
            style={{ backgroundColor: '#e8f5fd', borderColor: '#b3ddf5' }}
          >
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">Need a nurse right now?</h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>Nurses available 24/7 — book in under 2 minutes</p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book a nurse now ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}