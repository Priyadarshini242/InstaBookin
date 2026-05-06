import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '15+',    label: 'Nursing service types' },
  { value: '98%',    label: 'Patient satisfaction' },
  { value: '60 min', label: 'Avg. response time' },
  { value: '7 days', label: 'A week availability' },
]

const coreServices = [
  {
    icon: '🩹',
    iconBg: 'bg-orange-100',
    title: 'Wound & dressing care',
    desc: 'Sterile wound cleaning, dressing changes, and post-surgical site monitoring at home',
  },
  {
    icon: '💉',
    iconBg: 'bg-blue-100',
    title: 'IV therapy & injections',
    desc: 'Safe intravenous administration of fluids, medications, and prescribed injections',
  },
  {
    icon: '🫀',
    iconBg: 'bg-red-100',
    title: 'Chronic disease management',
    desc: 'Ongoing monitoring and care plans for diabetes, hypertension, and cardiac conditions',
  },
  {
    icon: '🏥',
    iconBg: 'bg-green-100',
    title: 'Post-operative recovery',
    desc: 'Dedicated recovery support following surgeries, including mobility and vital sign tracking',
  },
  {
    icon: '🧪',
    iconBg: 'bg-purple-100',
    title: 'Catheter & tube care',
    desc: 'Hygienic management of urinary catheters, NG tubes, and stoma care',
  },
  {
    icon: '🕊️',
    iconBg: 'bg-pink-100',
    title: 'Palliative & respite care',
    desc: 'Comfort-focused nursing for terminal conditions with support for families and caregivers',
  },
]

const steps = [
  {
    num: 1,
    title: 'Initial care assessment',
    desc: 'A care coordinator reviews the patient\'s medical history and service requirements to build a tailored plan',
  },
  {
    num: 2,
    title: 'Nurse matching & scheduling',
    desc: 'The right nurse is matched based on specialisation, location, and availability — then confirmed instantly',
  },
  {
    num: 3,
    title: 'Service delivery at your location',
    desc: 'Your nurse arrives on time, performs the required service, and documents all clinical observations digitally',
  },
  {
    num: 4,
    title: 'Progress reporting & follow-up',
    desc: 'Families and physicians receive a care summary after every visit with recommendations for ongoing support',
  },
]

const pills = [
  'Trained professionals',
  'Home & institutional care',
  'Co-developed care plans',
  'Clinical continuity',
]

function ServiceCard({ item }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = '#1f9de0'}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'linear-gradient(to right, #1f9de0, #0d7bb5)' }}
      />
      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        {item.icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 transition-colors duration-300 mb-1 group-hover:[color:#1f9de0]">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

function StepCard({ step }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = '#1f9de0'}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'linear-gradient(to right, #1f9de0, #0d7bb5)' }}
      />
      <div
        className="w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
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

export default function NursingServices() {
  return (
    <>
      <PageHeader
        title="Nursing Services"
        breadcrumbs={[{ label: 'Services' }, { label: 'Nursing Services' }]}
        backgroundImage="/NursingServices.jpg"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Nursing Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Expert Care{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Tailored to Every Need</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, our nursing
                services span the full spectrum of care — from routine health monitoring and chronic
                disease management to post-operative recovery and palliative support — all delivered
                by trained professionals wherever you need them.
              </p>
              <p>
                Nursing services are the heart of modern healthcare delivery. They encompass far more
                than clinical procedures — they represent a continuous, personalised relationship
                between a skilled nurse and the patient. At Instabookin, we offer a comprehensive
                range of nursing services designed to address the unique health requirements of
                individuals at every stage of life, from newborns and growing children to elderly
                patients and those managing long-term conditions.
              </p>
              <p>
                Our nursing professionals are trained to deliver care both at home and in
                institutional settings. Services range from wound care, IV therapy, catheter
                management, and medication administration to health education, physiotherapy
                assistance, and chronic illness monitoring. Each service is offered as part of a
                structured care plan, co-developed with the patient, their family, and, where needed,
                the treating physician — ensuring clinical continuity and a truly integrated approach
                to health.
              </p>
              <p>
                What makes <span className="font-black text-slate-700">Instabookin</span>'s
                nursing services exceptional is the combination of clinical precision and
                compassionate delivery. We understand that receiving care at home or outside a
                hospital setting can feel vulnerable. Our nurses are trained not only in technical
                skills but also in patient communication, dignity of care, and emotional support —
                ensuring that every visit leaves the patient feeling heard, safe, and cared for. From
                a single post-discharge visit to long-term daily nursing support, we scale our
                services to fit your life.
              </p>
            </div>

            {/* Pills */}
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

      {/* ── STATS ── */}
      <section className="py-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 border border-slate-100 text-center hover:shadow-lg transition-all duration-300"
                onMouseEnter={e => e.currentTarget.style.borderColor = '#1f9de0'}
                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
              >
                <p className="text-2xl font-bold text-slate-800 mb-1">{s.value}</p>
                <p className="text-xs text-slate-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Our Core Nursing Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Every Care Need,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Covered</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              How Our Nursing Service Works
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Simple. Fast. Professional.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <StepCard key={s.num} step={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border"
            style={{ backgroundColor: '#e8f5fd', borderColor: '#b3ddf5' }}
          >
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                Ready to experience professional nursing at home?
              </h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>
                Book a service today — clinical care brought to your doorstep
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book a service now ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}