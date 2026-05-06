import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '3,000+', label: 'Patients served at home' },
  { value: '500+',   label: 'Verified home caretakers' },
  { value: '99%',    label: 'On-time caretaker arrival' },
  { value: '24/7',   label: 'Booking & support' },
]

const pills = [
  'Home caretaker services',
  'Patient care at home',
  'Caretaking at home',
  'Home care patient services',
  'Professional home caretaker',
  'Caretaker for patients at home',
  'In-home patient caretaking',
  'Post-surgery home care',
  'Home health caretaker',
  'Caretaker booking online',
]

const coreServices = [
  {
    icon: '🩺',
    iconBg: 'bg-green-100',
    title: 'Post-surgical patient care',
    desc: 'Attentive recovery monitoring, wound care, and mobility assistance after surgical procedures at home',
  },
  {
    icon: '🫀',
    iconBg: 'bg-blue-100',
    title: 'Chronic illness home care',
    desc: 'Ongoing patient care at home for diabetes, hypertension, COPD, and other long-term conditions',
  },
  {
    icon: '🛁',
    iconBg: 'bg-orange-100',
    title: 'Personal hygiene assistance',
    desc: 'Dignified support with bathing, grooming, dressing, and daily personal hygiene for bedridden patients',
  },
  {
    icon: '📊',
    iconBg: 'bg-red-100',
    title: 'Vital sign monitoring',
    desc: 'Regular blood pressure, pulse, temperature, and oxygen level tracking with digital health reporting',
  },
  {
    icon: '💊',
    iconBg: 'bg-purple-100',
    title: 'Medication supervision',
    desc: 'Timely reminders, dosage tracking, and safe medication administration as part of patient care at home',
  },
  {
    icon: '🦽',
    iconBg: 'bg-teal-100',
    title: 'Rehabilitation support',
    desc: 'Physiotherapy assistance, exercises, and guided movement for patients recovering from injuries or strokes',
  },
]

const whyChoose = [
  {
    title: 'Clinically trained caretakers',
    desc: 'Every home caretaker undergoes professional healthcare training and is assessed for clinical competency before placement',
  },
  {
    title: 'Personalised care plans',
    desc: 'Patient care at home is tailored to each individual\'s diagnosis, recovery stage, and daily lifestyle needs',
  },
  {
    title: 'Real-time digital reports',
    desc: 'Families and doctors receive post-visit care summaries, health updates, and medication logs after every session',
  },
  {
    title: 'Instant online booking',
    desc: 'Book a verified home caretaker in minutes — choose your schedule, share patient details, and confirm in one click',
  },
]

const steps = [
  {
    num: 1,
    title: 'Submit patient care requirements',
    desc: 'Share the patient\'s medical condition, care needs, preferred timings, and location through our simple online form',
  },
  {
    num: 2,
    title: 'Get matched with a home caretaker',
    desc: 'Our care coordinator assigns the most suitable, verified caretaker based on the patient\'s specific needs and location',
  },
  {
    num: 3,
    title: 'Patient care begins at home',
    desc: 'Your caretaker arrives on schedule, reviews the care plan, and begins delivering professional patient care at home',
  },
  {
    num: 4,
    title: 'Track, report & adjust care',
    desc: 'Receive detailed visit reports, monitor patient progress, and easily reschedule or modify care as needs evolve',
  },
]

function ServiceCard({ item }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = '#1f9de0'}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
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

function WhyCard({ item }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      style={{ borderLeftWidth: '4px', borderLeftColor: '#1f9de0' }}
    >
      <h4 className="font-bold text-slate-800 transition-colors duration-300 group-hover:[color:#1f9de0]">
        {item.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
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

export default function CaretakingAtHome() {
  return (
    <>
      <PageHeader
        title="Caretaking at Home"
        breadcrumbs={[{ label: 'Services' }, { label: 'Caretaking at Home' }]}
        backgroundImage="/careTaking@home.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Caretaking at Home
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Reliable Patient Care at Home,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>When It Matters Most</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                <span className="font-black text-slate-700">Instabookin</span> brings certified,
                compassionate <span className="font-black text-slate-700">home caretaker services</span>{' '}
                directly to your doorstep — offering comprehensive{' '}
                <span className="font-black text-slate-700">patient care at home</span> for
                post-surgical recovery, chronic illness management, injury rehabilitation, and everyday
                health support across all age groups.
              </p>
              <p>
                The demand for quality <span className="font-black text-slate-700">home caretaker services</span>{' '}
                has grown significantly as more patients, families, and physicians recognise the profound
                advantages of receiving care in a familiar, stress-free environment. Unlike hospital stays
                or institutional care, <span className="font-black text-slate-700">patient care at home</span>{' '}
                allows individuals to heal faster, maintain their daily routines, and stay connected to
                their loved ones — all while receiving the same level of clinical attention they would
                expect in a professional healthcare setting. Instabookin's caretaking-at-home model is
                built on this exact principle: bringing professional, personalised care to where the
                patient truly belongs.
              </p>
              <p>
                Our <span className="font-black text-slate-700">home caretaker services</span> are
                designed to address the full continuum of patient needs. Whether a patient is recovering
                from surgery, managing a long-term condition such as diabetes or heart disease, or simply
                needs daily <span className="font-black text-slate-700">patient care at home</span>{' '}
                assistance following a health episode, Instabookin provides trained caretakers equipped
                to handle both clinical and non-clinical responsibilities. From wound dressing and vital
                sign monitoring to assisting with mobility, personal hygiene, nutritional support, and
                medication management — our caretakers deliver holistic, dignified care that prioritises
                the patient's comfort and wellbeing above all else.
              </p>
              <p>
                What sets Instabookin apart in the space of{' '}
                <span className="font-black text-slate-700">home caretaker services</span> is our
                rigorous caretaker vetting process, real-time booking technology, and dedication to care
                continuity. Each caretaker is background-verified, trained in basic and advanced{' '}
                <span className="font-black text-slate-700">patient care at home</span> protocols,
                and matched to the patient based on their specific medical requirements, language
                preference, and schedule. Families can track care visits, communicate with caretakers
                directly, and access digital care reports — ensuring complete transparency and peace of
                mind at every step of the care journey.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
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
              What Our Home Caretaker Services Cover
            </span>
             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 leading-tight">
             Complete Care,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>At Your Doorstep</span>
            </h2>
           </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Why Choose Instabookin for Patient Care at Home
            </span>
            <h2 className="text-2xl font-bold text-slate-800">The Instabookin Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoose.map((item) => (
              <WhyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              How Instabookin Home Caretaker Services Work
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Simple. Verified. Delivered.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <StepCard key={s.num} step={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border"
            style={{ backgroundColor: '#e8f5fd', borderColor: '#b3ddf5' }}
          >
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                Need a trusted home caretaker for your patient?
              </h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>
                Professional patient care at home — booked in minutes, delivered with care
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book a caretaker now ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}