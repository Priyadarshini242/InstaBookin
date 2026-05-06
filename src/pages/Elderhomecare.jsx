import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const BLUE = '#1f9de0'

const stats = [
  { value: '1,200+', label: 'Elder home care specialists' },
  { value: '97%',    label: 'Family satisfaction rate' },
  { value: '24/7',   label: 'Care support available' },
  { value: '2 hrs',  label: 'Avg. caregiver arrival' },
]

const pills = [
  'Elder home care',
  'Home care for the elderly',
  'Elder care at home',
  'Elderly care services',
  'Old age home care',
  'Live-in elder care',
  'Elder care near me',
  'Dementia care at home',
  'Geriatric home care',
  'Full-time elder caretaker',
  'Elder home care India',
  'Home care for aging parents',
]

const levels = [
  {
    level: 'Level 1',
    title: 'Companion care',
    desc: 'Social engagement, light household support, errands, and medication reminders for independent elders',
  },
  {
    level: 'Level 2',
    title: 'Personal care',
    desc: 'Bathing, grooming, dressing, mobility support, and meal preparation for elders needing daily assistance',
  },
  {
    level: 'Level 3',
    title: 'Skilled nursing care',
    desc: 'Wound care, IV therapy, vital monitoring, medication management, and post-hospitalisation recovery',
  },
  {
    level: 'Level 4',
    title: 'Specialised elder care',
    desc: "Dementia, Alzheimer's, Parkinson's, and complex chronic condition management by specialist caregivers",
  },
]

const coreServices = [
  {
    icon: '🛁',
    iconBg: 'bg-blue-100',
    title: 'Personal hygiene & bathing',
    desc: 'Dignified, gentle assistance with bathing, grooming, oral hygiene, and daily personal care routines',
  },
  {
    icon: '💊',
    iconBg: 'bg-sky-100',
    title: 'Medication management',
    desc: 'Timely medication reminders, dosage supervision, and digital medication logs for every elder patient',
  },
  {
    icon: '🦽',
    iconBg: 'bg-blue-100',
    title: 'Mobility & fall prevention',
    desc: 'Safe movement support, physiotherapy assistance, and home hazard assessment to reduce fall risk',
  },
  {
    icon: '🧠',
    iconBg: 'bg-sky-100',
    title: "Dementia & Alzheimer's care",
    desc: 'Structured routines, memory engagement activities, and specialist support for cognitive care needs',
  },
  {
    icon: '🥗',
    iconBg: 'bg-blue-100',
    title: 'Nutrition & meal care',
    desc: 'Age-appropriate, diet-aligned meal preparation and hydration monitoring for elderly patients at home',
  },
  {
    icon: '🤝',
    iconBg: 'bg-sky-100',
    title: 'Companionship & social care',
    desc: 'Meaningful conversation, recreational activities, and emotional support to prevent isolation and loneliness',
  },
]

const commitment = [
  {
    title: 'Background-verified caregivers',
    desc: 'Every elder home care professional is police-verified, geriatric trained, and clinically assessed',
  },
  {
    title: 'Personalised care plans',
    desc: "All care built around the individual elder's health, routine, preferences, and family needs",
  },
  {
    title: 'Daily family updates',
    desc: 'Digital care reports, medication logs, and health observations shared after every visit',
  },
  {
    title: 'Flexible scheduling',
    desc: 'Hourly, part-time, full-time, or live-in elder home care — scaled to your needs and budget',
  },
  {
    title: 'Caregiver continuity',
    desc: 'We prioritise consistent caregiver assignment so elders build trust and familiarity over time',
  },
  {
    title: '24/7 coordinator access',
    desc: 'A dedicated care coordinator is available round the clock for queries, changes, or escalations',
  },
]

const whyChoose = [
  {
    title: 'Geriatric-trained specialists',
    desc: 'All caregivers hold elder care certifications and are trained specifically in geriatric health, dementia, and fall prevention',
  },
  {
    title: 'Dignity-first care model',
    desc: "Elder home care at Instabookin is always delivered with the utmost respect for the elder's independence, privacy, and self-worth",
  },
  {
    title: 'Full family transparency',
    desc: 'Families stay informed and in control with real-time tracking, daily reports, and direct caregiver communication',
  },
  {
    title: 'Scalable, affordable plans',
    desc: "From a few hours a week to full-time live-in care — flexible elder home care plans designed around your family's reality",
  },
]

const steps = [
  {
    num: 1,
    title: "Tell us about your elder's care needs",
    desc: "Share details on your loved one's health, mobility level, daily routine, and preferred care hours — takes under 2 minutes online",
  },
  {
    num: 2,
    title: 'Get matched to the right caregiver',
    desc: 'Our platform pairs your elder with the most suitable, background-verified elder home care specialist nearby',
  },
  {
    num: 3,
    title: 'Caregiver arrives at your home',
    desc: 'Your assigned caregiver meets your loved one, reviews the care plan, and begins delivering personalised elder home care',
  },
  {
    num: 4,
    title: 'Ongoing care, reports & reviews',
    desc: "Receive digital care summaries after every visit and adjust the care plan as your elder's needs evolve over time",
  },
]

function LevelCard({ item }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="h-0.5 w-8 mb-1" style={{ backgroundColor: BLUE }} />
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>{item.level}</p>
      <h4 className="font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#1f9de0]">
        {item.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

function ServiceCard({ item }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, ${BLUE}, #38bdf8)` }}
      />
      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        {item.icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 transition-colors duration-300 mb-1 group-hover:text-[#1f9de0]">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

function CommitmentCard({ item }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <h4 className="font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#1f9de0]">
        {item.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

function WhyCard({ item }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      style={{ borderLeftWidth: '4px', borderLeftColor: BLUE }}
    >
      <h4 className="font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#1f9de0]">
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
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, ${BLUE}, #38bdf8)` }}
      />
      <div
        className="w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: '#dbeafe', color: BLUE }}
      >
        {step.num}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 transition-colors duration-300 mb-1 group-hover:text-[#1f9de0]">
          {step.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </div>
  )
}

export default function Elderhomecare() {
  return (
    <>
      <PageHeader
        title="Elder Home Care"
        breadcrumbs={[{ label: 'Services' }, { label: 'Elder Home Care' }]}
        backgroundImage="/elderHomecare.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}
            >
              Elder Home Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Compassionate, Professional{' '}
              <span className="italic" style={{ color: BLUE }}>Elder Home Care for Your Loved Ones</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: BLUE }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, our{' '}
                <span className="font-black text-slate-700">elder home care</span> services are
                built around one core belief — that every elderly person deserves to age with
                dignity, independence, and comfort in their own home, supported by a trained and
                compassionate caregiver who truly cares.
              </p>
              <p>
                As our loved ones grow older, their care needs become more complex and more personal.{' '}
                <span className="font-black text-slate-700">Elder home care</span> is no longer a
                luxury — it is an essential, compassionate alternative to institutional care that
                allows elderly individuals to remain in the environment they know, love, and feel
                safe in. Instabookin's{' '}
                <span className="font-black text-slate-700">professional elder home care services</span>{' '}
                are designed to meet the full spectrum of needs that come with ageing — from daily
                personal assistance and mobility support to specialised care for dementia,
                post-hospitalisation recovery, and chronic conditions. Our verified caregivers bring
                both clinical training and genuine warmth to every visit, ensuring that older adults
                in their care feel respected, supported, and never alone.
              </p>
              <p>
                What makes Instabookin's{' '}
                <span className="font-black text-slate-700">elder home care</span> stand apart is
                the depth of personalisation built into every care engagement. We understand that no
                two elderly individuals have the same needs, preferences, or routines. That is why
                every <span className="font-black text-slate-700">elder home care</span> plan
                begins with a thorough in-home assessment — covering the elder's medical history,
                current functional abilities, medication regimen, daily schedule, dietary
                requirements, and personal preferences. This information forms the foundation of a
                tailored care plan, co-developed with the family and the patient's physician, that
                guides every caregiver visit. Whether your loved one needs a few hours of{' '}
                <span className="font-black text-slate-700">part-time elder care at home</span>{' '}
                or requires{' '}
                <span className="font-black text-slate-700">full-time live-in elder home care</span>,{' '}
                <span className="font-black text-slate-700">Instabookin</span> matches the right
                caregiver to the right person — every time.
              </p>
              <p>
                Families who choose Instabookin's{' '}
                <span className="font-black text-slate-700">elder home care services</span> also
                benefit from complete transparency and peace of mind throughout the care journey. Our
                digital care platform allows families to view real-time attendance records, receive
                daily care summaries, track medication schedules, and communicate directly with the
                assigned caregiver — all from a single, easy-to-use interface. Every caregiver is
                background-verified, geriatric-care trained, and reviewed regularly based on family
                feedback and clinical quality audits. From{' '}
                <span className="font-black text-slate-700">elder home care for Alzheimer's and dementia</span>{' '}
                to post-operative recovery and general age-related daily assistance, Instabookin
                delivers trusted, high-quality{' '}
                <span className="font-black text-slate-700">home care for the elderly</span> that
                families across India rely on every day.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: '#dbeafe', color: BLUE, border: '1px solid #93c5fd' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: BLUE }} />
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
                onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
              >
                <p className="text-2xl font-bold mb-1" style={{ color: BLUE }}>{s.value}</p>
                <p className="text-xs text-slate-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEVELS OF SUPPORT ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}
            >
              Elder Home Care — Levels of Support
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Care Matched to Every Need</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((item) => (
              <LevelCard key={item.level} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}
            >
              What Our Elder Home Care Services Include
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Complete Elder Care,{' '}
              <span className="italic" style={{ color: BLUE }}>At Home</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}
            >
              Our Elder Home Care Commitment to Families
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Built on Trust. Delivered with Care.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitment.map((item) => (
              <CommitmentCard key={item.title} item={item} />
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
              style={{ backgroundColor: '#dbeafe', color: BLUE }}
            >
              Why Families Choose Instabookin for Elder Home Care
            </span>
            <h2 className="text-5xl font-bold text-slate-800">The Instabookin Difference</h2>
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
              style={{ backgroundColor: '#dbeafe', color: BLUE }}
            >
              How to Arrange Elder Home Care — 4 Simple Steps
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Simple. Matched. Starts Today.</h2>
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
            className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: '#dbeafe', border: '1px solid #93c5fd' }}
          >
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                Give your elderly loved one the care they deserve
              </h3>
              <p className="text-sm" style={{ color: BLUE }}>
                Book trusted elder home care today — professional, passionate, and just a tap away
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book elder care now ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}