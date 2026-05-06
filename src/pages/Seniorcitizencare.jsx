import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '1,200+', label: 'Trained senior caregivers' },
  { value: '24/7',   label: 'Care availability' },
  { value: '97%',    label: 'Family satisfaction rate' },
  { value: '2 hrs',  label: 'Avg. caregiver arrival' },
]

const pills = [
  'Senior citizen home care',
  'Elderly caretaker at home',
  'Home care for senior citizens',
  '24-hour elder care',
  'Caretaker for old age',
  'Dementia care at home',
  'Companion care for elderly',
  'Old age home nursing',
  'Geriatric care services',
  'Senior care taker booking',
]

const coreServices = [
  {
    icon: '🛁',
    iconBg: 'bg-amber-100',
    title: 'Personal hygiene & bathing',
    desc: 'Dignified assistance with bathing, grooming, dressing, and personal hygiene routines',
  },
  {
    icon: '💊',
    iconBg: 'bg-yellow-100',
    title: 'Medication reminders',
    desc: 'Timely prompting and supervision of prescribed medicines and health supplements',
  },
  {
    icon: '🦽',
    iconBg: 'bg-orange-100',
    title: 'Mobility & fall prevention',
    desc: 'Safe movement assistance, physiotherapy support, and home hazard monitoring',
  },
  {
    icon: '🧠',
    iconBg: 'bg-amber-100',
    title: 'Dementia & Alzheimer\'s care',
    desc: 'Specialist memory care support with structured routines for cognitive conditions',
  },
  {
    icon: '🥗',
    iconBg: 'bg-yellow-100',
    title: 'Meal preparation & nutrition',
    desc: 'Balanced, age-appropriate meal planning and preparation aligned with dietary needs',
  },
  {
    icon: '🤝',
    iconBg: 'bg-orange-100',
    title: 'Companionship & social care',
    desc: 'Meaningful engagement, conversations, activities, and emotional well-being support',
  },
]

const whyChoose = [
  {
    title: 'Verified & trained caregivers',
    desc: 'Every caretaker is background-checked, geriatric-trained, and professionally assessed before joining our network',
  },
  {
    title: 'Personalised care plans',
    desc: 'Care is never one-size-fits-all — plans are built around each senior\'s health, routine, and preferences',
  },
  {
    title: 'Family transparency & updates',
    desc: 'Families receive daily care logs, health updates, and can communicate directly with their assigned caregiver',
  },
  {
    title: 'Flexible scheduling',
    desc: 'Choose hourly, part-time, full-time, or live-in care options to suit your family\'s needs and budget',
  },
]

const steps = [
  {
    num: 1,
    title: 'Share your elderly care needs',
    desc: 'Tell us about your senior loved one\'s health, mobility, schedule, and specific care requirements via our easy online form',
  },
  {
    num: 2,
    title: 'Get matched with the right caretaker',
    desc: 'Our care team assigns a trained senior caretaker suited to the patient\'s language, needs, and location',
  },
  {
    num: 3,
    title: 'Care begins at your doorstep',
    desc: 'Your caretaker arrives, introduces themselves, and begins delivering personalised senior home care right away',
  },
  {
    num: 4,
    title: 'Ongoing monitoring & family updates',
    desc: 'Receive daily reports, health observations, and schedule adjustments as your loved one\'s needs evolve',
  },
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

function WhyCard({ item }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
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

export default function SeniorCitizenCare() {
  return (
    <>
      <PageHeader
        title="Senior Citizen Care Taker Services"
        breadcrumbs={[{ label: 'Services' }, { label: 'Senior Citizen Care' }]}
        backgroundImage="/seniorcitizencareTaker.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Senior Citizen Care Taker Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Dignity, Comfort &{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Compassion at Every Age</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, our{' '}
                <span className="font-black text-slate-700">senior citizen care taker services</span>{' '}
                are designed to help elderly individuals live safely, independently, and with dignity
                in the comfort of their own homes — supported by trained, compassionate, and
                background-verified caregivers available around the clock.
              </p>
              <p>
                As our loved ones age, their care needs evolve in ways that go far beyond medical
                treatment. Senior citizen home care encompasses daily assistance, emotional
                companionship, mobility support, and health monitoring — all delivered in a familiar
                and comfortable environment. Instabookin's elderly caretaker service at home bridges
                the gap between independent living and full-time institutional care, giving seniors
                the support they need while preserving their sense of freedom and self-worth.
              </p>
              <p>
                Our professional caretakers for senior citizens are trained in geriatric care,
                dementia and Alzheimer's support, fall prevention, and palliative assistance. Whether
                your loved one requires a few hours of part-time elderly care each week or intensive
                24-hour senior home care, Instabookin provides flexible, personalised care plans
                tailored to the individual's physical, cognitive, and emotional needs. Our caregivers
                undergo thorough background checks, clinical training, and regular performance
                reviews — so families can trust that their elderly parent or grandparent is always in
                safe, capable hands.
              </p>
              <p>
                Beyond physical care, our home caretakers for elderly patients offer genuine human
                connection. Loneliness and social isolation are among the leading health risks for
                senior citizens, and our caregivers are specifically trained to provide companionship
                care for the elderly — engaging seniors in conversation, recreational activities,
                gentle exercise, and daily routines that promote mental wellness alongside physical
                health. With Instabookin's senior citizen caretaker booking platform, arranging
                quality elder care has never been simpler — book online, get matched instantly, and
                receive care within hours.
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
              Our Senior Citizen Care Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Holistic Elder Care,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>At Home</span>
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
              Why Families Choose Instabookin for Elder Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Trusted Care for,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Your Loved Ones</span>
            </h2>
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
              How to Get Started — 4 Easy Steps
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Simple. Matched. Delivered.</h2>
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
                Give your loved one the care they deserve
              </h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>
                Book a verified senior caretaker today — at home, on your schedule
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