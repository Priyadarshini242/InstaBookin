import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '1,400+', label: 'Certified maternity nurses' },
  { value: '0–3',    label: 'Months specialist coverage' },
  { value: '98%',    label: 'New parent satisfaction' },
  { value: '2 hrs',  label: 'Avg. nurse arrival time' },
]

const pills = [
  'Newborn baby care services',
  'Mother and baby care at home',
  'Maternity nurse at home',
  'Post-partum care services',
  'Newborn care at home',
  'Baby care specialist',
  'Post-natal care nurse',
  'Breastfeeding support at home',
  'New mother care services',
  'Infant care at home',
  'C-section recovery care',
  'Baby nurse booking online',
]

const coreServices = [
  {
    icon: '🛁',
    iconBg: 'bg-blue-100',
    title: 'Newborn bathing & hygiene',
    desc: 'Safe, gentle bathing routines, umbilical cord care, skin care, and nappy changing support',
  },
  {
    icon: '🍼',
    iconBg: 'bg-sky-100',
    title: 'Feeding support & guidance',
    desc: 'Breastfeeding assistance, latch support, formula feeding, and newborn feeding schedule management',
  },
  {
    icon: '📊',
    iconBg: 'bg-indigo-100',
    title: 'Newborn health monitoring',
    desc: 'Weight tracking, jaundice checks, vital signs observation, and early developmental milestone assessment',
  },
  {
    icon: '🌙',
    iconBg: 'bg-blue-100',
    title: 'Sleep routine establishment',
    desc: 'Structured day-night sleep training and safe sleeping guidance for newborns and infants',
  },
  {
    icon: '👩‍⚕️',
    iconBg: 'bg-sky-100',
    title: 'Post-partum mother care',
    desc: 'Maternal wound care, nutrition support, emotional well-being guidance, and C-section recovery assistance',
  },
  {
    icon: '🌟',
    iconBg: 'bg-indigo-100',
    title: 'Night nursing support',
    desc: 'Overnight baby care so new mothers can rest and recover — feeding, settling, and monitoring through the night',
  },
]

const whyChoose = [
  {
    title: 'Qualified maternity nurses',
    desc: 'All caregivers hold maternity or paediatric nursing certifications and are background-verified before joining our network',
  },
  {
    title: 'Dual mother & baby focus',
    desc: "Our care plans support both the newborn's health and the mother's post-partum recovery simultaneously — a truly holistic approach",
  },
  {
    title: 'Flexible care arrangements',
    desc: 'Choose daily visits, part-time support, or full-time live-in maternity nurses — completely tailored to your family\'s needs',
  },
  {
    title: 'Real-time parent updates',
    desc: 'Receive digital care logs, health observations, and feeding records after every newborn care session',
  },
]

const steps = [
  {
    num: 1,
    title: 'Share your mother & baby care needs',
    desc: "Tell us your delivery type, baby's age, care hours needed, and any specific requirements — takes under 2 minutes",
  },
  {
    num: 2,
    title: 'Get matched with a maternity nurse',
    desc: 'Our platform pairs you with the nearest qualified, background-verified maternity nurse suited to your care needs',
  },
  {
    num: 3,
    title: 'Nurse arrives at your home',
    desc: 'Your maternity nurse arrives on schedule and begins delivering expert newborn baby care services right in your home',
  },
  {
    num: 4,
    title: 'Daily care logs & follow-up visits',
    desc: "Receive a detailed report after every visit covering the baby's health, feeding, sleep patterns, and mother's recovery",
  },
]

function ServiceCard({ item }) {
  return (
    <div className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-0 group-hover:w-full transition-all duration-500" />
      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        {item.icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

function WhyCard({ item }) {
  return (
    <div className="bg-white rounded-2xl p-5 border-l-4 border-blue-400 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2">
      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

function StepCard({ step }) {
  return (
    <div className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-0 group-hover:w-full transition-all duration-500" />
      <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        {step.num}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
          {step.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </div>
  )
}

export default function MotherBabyCare() {
  return (
    <>
      <PageHeader
        title="Mother & Baby Care"
        breadcrumbs={[{ label: 'Services' }, { label: 'Mother & Baby Care' }]}
        backgroundImage="/Mother&Baby Care.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span className="inline-block bg-blue-50 text-blue-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Mother & Baby Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Expert Newborn Baby Care Services{' '}
              <span className="text-blue-500 italic">for Every New Family</span>
            </h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full mb-6" />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-900">Instabookin</span>, our{' '}
                <span className="font-black text-slate-900">newborn baby care services</span> are
                crafted to support both mother and baby through the most precious and demanding weeks
                of early parenthood — with trained maternity nurses and baby care specialists
                available at your home, around the clock.
              </p>
              <p>
                The arrival of a newborn is one of life's most joyful milestones — and also one of
                its most demanding. New mothers recovering from childbirth while simultaneously
                caring for a newborn need expert, compassionate support during this critical period.
                Instabookin's{' '}
                <span className="font-black text-slate-900">newborn baby care services</span> are
                purpose-built for exactly this moment, offering professionally trained maternity
                nurses and baby care specialists who arrive at your home to provide comprehensive,
                hands-on support for both mother and baby. From monitoring the newborn's health and
                establishing feeding routines to guiding new mothers through post-partum recovery,
                our caregivers bring clinical expertise and genuine warmth to every visit.
              </p>
              <p>
                Our{' '}
                <span className="font-black text-slate-900">
                  newborn baby care services at home
                </span>{' '}
                cover the full spectrum of early postnatal needs. Certified maternity nurses assist
                with{' '}
                <span className="font-black text-slate-900">
                  newborn bathing, umbilical cord care, breastfeeding and bottle-feeding support,
                  sleep schedule establishment
                </span>
                , and infant health monitoring — including tracking weight gain, jaundice signs, and
                early developmental milestones. Simultaneously, our caregivers provide dedicated{' '}
                <span className="font-semibold text-slate-700">post-partum mother care</span>,
                supporting maternal nutrition, wound care after C-section or normal delivery,
                emotional well-being, and breastfeeding guidance. This dual focus on both mother and
                baby is what makes Instabookin's approach truly holistic — because when a mother is
                well-supported, her baby thrives too.
              </p>
              <p>
                Instabookin's{' '}
                <span className="font-black text-slate-900">
                  professional newborn baby care services
                </span>{' '}
                are available as short-visit consultations, daily scheduled care, or full-time
                live-in maternity nurse arrangements — giving families complete flexibility based on
                their needs and recovery pace. Every caregiver in our network holds recognised
                maternity or paediatric nursing qualifications and is background-verified, ensuring
                families receive only the most trustworthy{' '}
                <span className="font-black text-slate-900">newborn care at home</span>. Our
                platform allows parents to book, track, and communicate with their assigned maternity
                nurse through a single, simple interface — because in those precious early weeks,
                every moment with your newborn matters and professional support should be just a tap
                away.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-200 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
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
                className="bg-white rounded-2xl p-5 border border-slate-100 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-300"
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
            <span className="inline-block bg-blue-50 text-blue-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Our Newborn Baby Care Services at Home
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Complete Care for Mother & Baby</h2>
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
            <span className="inline-block bg-blue-50 text-blue-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Why Families Choose Instabookin Newborn Baby Care Services
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Trusted. Qualified. Always There.</h2>
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
            <span className="inline-block bg-blue-50 text-blue-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              How to Book Newborn Baby Care Services — 4 Simple Steps
            </span>
            <h2 className="text-2xl font-bold text-slate-800">Book in Minutes. Care Begins Today.</h2>
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
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                Welcoming a newborn? Let us support you.
              </h3>
              <p className="text-blue-500 text-sm">
                Book expert newborn baby care services today — compassionate care for mother and baby at home
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book a maternity nurse ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}