import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '1,800+', label: 'Verified child caregivers' },
  { value: '0–12',   label: 'Age groups covered' },
  { value: '99%',    label: 'Parent satisfaction rate' },
  { value: '45 min', label: 'Avg. booking to arrival' },
]

const pills = [
  'Child care services',
  'Professional child care',
  'Home child care services',
  'Child care services near me',
  'In-home child care',
  'Newborn care at home',
  'Babysitter services',
  'After-school child care',
  'Child caregiver at home',
  'Part-time child care',
  'Nanny services at home',
  'Child care booking online',
]

const coreServices = [
  {
    icon: '👶',
    iconBg: 'bg-pink-100',
    title: 'Newborn & infant care',
    desc: 'Specialised care for newborns including feeding support, sleep routines, and health monitoring',
  },
  {
    icon: '🧸',
    iconBg: 'bg-rose-100',
    title: 'Toddler supervision',
    desc: 'Safe, engaging, and developmentally appropriate care for children aged 1 to 3 years at home',
  },
  {
    icon: '🎒',
    iconBg: 'bg-fuchsia-100',
    title: 'After-school child care',
    desc: 'Supervised homework help, structured activities, and safe home environment after school hours',
  },
  {
    icon: '👩‍👧',
    iconBg: 'bg-pink-100',
    title: 'Full-time nanny services',
    desc: 'Dedicated, live-in or daily nannies for complete child care coverage throughout the day',
  },
  {
    icon: '🌟',
    iconBg: 'bg-rose-100',
    title: 'Special needs child care',
    desc: 'Trained caregivers for children with developmental, physical, or behavioural support requirements',
  },
  {
    icon: '🏖️',
    iconBg: 'bg-fuchsia-100',
    title: 'Holiday & weekend care',
    desc: 'Flexible child care services for school holidays, weekends, and short-notice family requirements',
  },
]

const whyChoose = [
  {
    title: 'Background-verified caregivers',
    desc: 'Every child caregiver is police-verified, child-protection trained, and assessed before joining our platform',
  },
  {
    title: 'Age-matched care expertise',
    desc: 'Caregivers are matched to the child\'s age group and developmental needs — from newborns to pre-teens',
  },
  {
    title: 'Daily reports for parents',
    desc: 'Parents receive activity logs, health notes, and real-time updates after every child care session',
  },
  {
    title: 'Flexible plans & easy booking',
    desc: 'Book hourly, part-time, or full-time child care services online in minutes — transparent, no-surprise pricing',
  },
]

const steps = [
  {
    num: 1,
    title: 'Share your child\'s care needs',
    desc: 'Tell us your child\'s age, care hours required, any specific needs, and your location — takes under 2 minutes',
  },
  {
    num: 2,
    title: 'Get matched to a verified caregiver',
    desc: 'Our platform instantly matches your child with the right qualified and background-checked child caregiver nearby',
  },
  {
    num: 3,
    title: 'Caregiver arrives at your home',
    desc: 'Your caregiver arrives on time, meets the child, and begins delivering safe, nurturing child care at home',
  },
  {
    num: 4,
    title: 'Receive daily activity report',
    desc: 'Get a detailed summary of your child\'s day — activities, meals, nap times, and any health observations noted',
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

export default function ChildCare() {
  return (
    <>
      <PageHeader
        title="Child Care Services"
        breadcrumbs={[{ label: 'Services' }, { label: 'Child Care' }]}
        backgroundImage="/childcare.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Child Care Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Safe, Nurturing &{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Professional Care for Every Child</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, our{' '}
                <span className="font-black text-slate-700">child care services</span> are designed
                to give parents complete peace of mind — connecting families with trained, verified
                child caregivers who provide safe, attentive, and developmentally enriching care for
                children of all ages, right at home.
              </p>
              <p>
                Every parent wants the very best for their child, and choosing the right{' '}
                <span className="font-black text-slate-700">child care services</span> is one of
                the most important decisions a family will make. Whether you are a working parent
                seeking reliable daily childcare, a caregiver needing support during recovery, or a
                family looking for specialised care for a child with unique needs, Instabookin's{' '}
                <span className="font-black text-slate-700">professional child care services</span>{' '}
                provide a trusted, flexible solution. Our caregivers are trained not only in child
                safety and first aid but also in early childhood development, behavioural support, and
                age-appropriate stimulation — ensuring that every child in their care thrives
                physically, emotionally, and cognitively.
              </p>
              <p>
                Instabookin's{' '}
                <span className="font-black text-slate-700">home-based child care services</span>{' '}
                are built around the belief that children flourish best in a familiar, comfortable
                environment. Unlike institutional daycare, our in-home{' '}
                <span className="font-black text-slate-700">child care services</span> offer
                one-on-one attention, consistent routines, and a nurturing bond between caregiver and
                child. From newborn care and toddler supervision to after-school support and school
                holiday care, our caregivers adapt seamlessly to the child's developmental stage and
                the family's schedule. Each caregiver undergoes thorough background verification,
                child protection training, and a structured onboarding assessment — giving parents the
                confidence that their child is always in safe, capable, and caring hands.
              </p>
              <p>
                What makes Instabookin the preferred choice for{' '}
                <span className="font-black text-slate-700">child care services in India</span> is
                our combination of technology and trust. Parents can browse verified caregiver
                profiles, read reviews, and book{' '}
                <span className="font-black text-slate-700">child care services near them</span>{' '}
                within minutes. Real-time attendance tracking, daily activity reports, and direct
                in-app communication keep parents connected to their child's day at all times. Whether
                you need{' '}
                <span className="font-black text-slate-700">part-time child care services</span>{' '}
                for a few hours a week or a full-time dedicated nanny, Instabookin scales effortlessly
                to fit your family's unique needs — because every child deserves consistent,
                compassionate, and expert care.
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
              Our Child Care Services at a Glance
            </span>
             <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Every Stage of Childhood,{' '}
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

      {/* ── WHY CHOOSE ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Why Parents Trust Instabookin Child Care Services
            </span>
             <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Safe,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Verified & Always Reliable</span>
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
              How to Book Child Care Services — 4 Easy Steps
            </span>
             <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Book in Minutes,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Care in Hours</span>
            </h2>
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
                Give your child the care they deserve
              </h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>
                Book trusted child care services today — professional, verified, and just a tap away
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book child care now ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}