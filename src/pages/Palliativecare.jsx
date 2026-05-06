import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '20+',  label: 'Clinical specialisations covered' },
  { value: '800+', label: 'Specialist-trained caregivers' },
  { value: '97%',  label: 'Family confidence rating' },
  { value: '24/7', label: 'Care coordinator availability' },
]

const pills = [
  'Specialized care services',
  'Specialised care services',
  'Specialized home care',
  'Complex care at home',
  'Post-ICU home care',
  'Oncology care at home',
  'Neurological care services',
  'Tracheostomy nursing at home',
  'Diabetic wound care',
  'Renal care at home',
  'Cardiac care at home',
  'Palliative specialised care',
  'Specialized caregiver at home',
]

const specialisations = [
  {
    icon: '🧠',
    iconBg: 'bg-blue-100',
    title: 'Neurological care',
    desc: "Specialist home care for stroke, Parkinson's, multiple sclerosis, and ALS patients requiring complex neurological support",
  },
  {
    icon: '🎗️',
    iconBg: 'bg-sky-100',
    title: 'Oncology support care',
    desc: 'Home-based cancer care including chemotherapy side-effect management, pain care, and palliative support',
  },
  {
    icon: '❤️',
    iconBg: 'bg-blue-100',
    title: 'Cardiac recovery care',
    desc: 'Post-operative cardiac care, vital monitoring, and medication management following heart surgery or cardiac events',
  },
  {
    icon: '💧',
    iconBg: 'bg-sky-100',
    title: 'Renal & dialysis care',
    desc: 'Specialised nursing support for patients on dialysis, including access site care and fluid management monitoring',
  },
  {
    icon: '🫁',
    iconBg: 'bg-blue-100',
    title: 'Tracheostomy nursing',
    desc: 'Expert tracheostomy tube care, suctioning, and airway management for ventilator-dependent patients at home',
  },
  {
    icon: '🩹',
    iconBg: 'bg-sky-100',
    title: 'Diabetic wound care',
    desc: 'Advanced wound assessment, dressing, and healing monitoring for diabetic foot ulcers and complex wound conditions',
  },
]

const serviceIncludes = [
  {
    icon: '📋',
    iconBg: 'bg-blue-100',
    title: 'Clinical intake assessment',
    desc: 'Thorough evaluation of diagnosis, treatment history, functional needs, and care goals before service begins',
  },
  {
    icon: '👨‍⚕️',
    iconBg: 'bg-sky-100',
    title: 'Physician-coordinated care plan',
    desc: "All care plans are built in alignment with the patient's treating specialist and primary care physician",
  },
  {
    icon: '📞',
    iconBg: 'bg-blue-100',
    title: 'Dedicated care coordinator',
    desc: 'A single point of contact managing scheduling, physician liaison, quality monitoring, and family communication',
  },
  {
    icon: '🏥',
    iconBg: 'bg-sky-100',
    title: 'Advanced clinical procedures',
    desc: 'Specialist nurses trained to perform complex procedures at home including tracheostomy care, IV therapy, and wound management',
  },
  {
    icon: '🚨',
    iconBg: 'bg-blue-100',
    title: 'Emergency escalation protocol',
    desc: 'Structured rapid-response protocols in place for clinical deterioration, with direct liaison to treating hospitals',
  },
  {
    icon: '💻',
    iconBg: 'bg-sky-100',
    title: 'Digital care documentation',
    desc: 'All clinical observations, procedures, and vitals are logged digitally and shared with the care team after every visit',
  },
]

const whyChoose = [
  {
    title: 'Advanced-certified specialists',
    desc: 'Every caregiver holds condition-specific advanced certifications — not general nurses assigned to complex cases',
  },
  {
    title: 'Multi-disciplinary care model',
    desc: 'Caregivers, care coordinators, and treating physicians work as one integrated team for complete clinical continuity',
  },
  {
    title: '24/7 coordinator support',
    desc: 'A dedicated care coordinator is available around the clock for family queries, escalations, and schedule changes',
  },
  {
    title: 'Dignity-centred approach',
    desc: "Complex conditions are managed with the highest clinical precision alongside deep respect for the patient's dignity and autonomy",
  },
]

const steps = [
  {
    num: 1,
    title: 'Submit a clinical care request',
    desc: "Share the patient's diagnosis, treating physician details, current care needs, and location — our team responds within 12 hours",
  },
  {
    num: 2,
    title: 'Clinical intake & specialist matching',
    desc: 'Our clinical team conducts a full intake assessment and matches the patient with the most qualified specialist caregiver available',
  },
  {
    num: 3,
    title: 'Personalized care plan activation',
    desc: 'A structured, physician-aligned care plan is finalised and your specialist caregiver begins delivering care at home',
  },
  {
    num: 4,
    title: 'Ongoing monitoring & review',
    desc: 'Your care coordinator monitors quality continuously, shares detailed clinical reports, and adjusts the care plan as needs evolve',
  },
]

const BLUE = '#1f9de0'
const BLUE_BORDER = '#1f9de0'

function SpecialisationCard({ item }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE_BORDER}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, ${BLUE}, #38bdf8)` }} />
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

function ServiceCard({ item }) {
  return (
    <div
      className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3 overflow-hidden"
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE_BORDER}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, ${BLUE}, #38bdf8)` }} />
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

function WhyCard({ item }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      style={{ borderLeftWidth: '4px', borderLeftColor: BLUE }}>
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
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE_BORDER}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, ${BLUE}, #38bdf8)` }} />
      <div className="w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: '#dbeafe', color: BLUE }}>
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

export default function Specialisedcare() {
  return (
    <>
      <PageHeader
        title="Specialised Care Services"
        breadcrumbs={[{ label: 'Services' }, { label: 'Specialised Care Services' }]}
        backgroundImage="/specialized care.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}>
              Specialised Care Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Precision Care for Complex Health Needs,{' '}
              <span className="italic" style={{ color: BLUE }}>Delivered at Home</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: BLUE }} />

            <div className="space-y-4 text-slate-500 text-[15px] leading-relaxed">
              <p>
                At <span className="font-semibold text-slate-700">Instabookin</span>, our{' '}
                <span className="font-semibold text-slate-700">specialized care services</span> are
                designed for patients with complex, chronic, or condition-specific healthcare
                requirements — connecting them with highly qualified clinical specialists who deliver
                expert, personalised care in the comfort of their own home.
              </p>
              <p>
                Not every patient's health journey is straightforward. Many individuals live with
                conditions that require far more than general nursing support — they need the
                precision, depth, and clinical expertise that only dedicated{' '}
                <span className="font-semibold text-slate-700">specialized care services</span> can
                provide. Instabookin's{' '}
                <span className="font-semibold text-slate-700">specialized home care services</span>{' '}
                bridge the critical gap between hospital-level clinical attention and the comfort and
                familiarity of home. Whether a patient is managing a complex neurological condition,
                recovering from a major cardiac event, living with end-stage renal disease, or
                requiring intensive cancer care support, our network of specialist nurses, trained
                caregivers, and condition-specific care coordinators ensure every patient receives
                the exact level of care their condition demands — without the stress and disruption
                of repeated hospitalisation.
              </p>
              <p>
                Each of Instabookin's{' '}
                <span className="font-semibold text-slate-700">specialized care services</span> is
                delivered through a structured, physician-aligned care plan that is built
                collaboratively with the patient's treating specialist, primary care physician, and
                family. This integrated model ensures complete clinical continuity — from{' '}
                <span className="font-semibold text-slate-700">
                  post-ICU home care and oncology support care
                </span>{' '}
                to{' '}
                <span className="font-semibold text-slate-700">
                  neurological rehabilitation, diabetic wound management, renal care, and
                  tracheostomy nursing
                </span>
                . Our specialist care nurses are trained beyond standard nursing competencies — they
                hold advanced certifications in their respective specialisations and undergo regular
                clinical refresher programmes to stay current with evolving treatment protocols.
                Families can be confident that the caregiver managing a complex condition at home is
                not just qualified, but genuinely expert.
              </p>
              <p>
                What makes Instabookin's{' '}
                <span className="font-semibold text-slate-700">specialized care services</span>{' '}
                truly distinctive is the personalised, multi-disciplinary approach underpinning
                every engagement. Every care plan begins with a detailed clinical intake assessment,
                ensuring the right specialist caregiver is matched to the patient's unique diagnosis,
                functional limitations, and care goals. Families also benefit from a dedicated{' '}
                <span className="font-semibold text-slate-700">specialized care coordinator</span> —
                a single point of contact who manages scheduling, liaises with treating physicians,
                monitors care quality, and escalates concerns immediately when needed. From the first
                consultation to ongoing long-term{' '}
                <span className="font-semibold text-slate-700">specialised home care services</span>
                , Instabookin's end-to-end model ensures that even the most complex conditions are
                managed with clinical accuracy, compassionate delivery, and total peace of mind for
                the entire family.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: '#dbeafe', color: BLUE, border: `1px solid #93c5fd` }}
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

      {/* ── SPECIALISATIONS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}>
              Our Specialized Care Service Specialisations
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Every Complex Condition,{' '}
              <span className="italic" style={{ color: BLUE }}>Expert Care</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialisations.map((item) => (
              <SpecialisationCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT INCLUDES ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}>
              What Our Specialized Care Service Includes
            </span>
            <h2 className="text-5xl font-bold text-slate-800">End-to-End Clinical Support</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceIncludes.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}>
              Why Instabookin for Specialized Care Services
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Expert. Integrated. Always Present.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoose.map((item) => (
              <WhyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#dbeafe', color: BLUE }}>
              How Our Specialized Care Services Work — 4 Steps
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Clinical. Coordinated. Delivered.</h2>
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
          <div className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: '#dbeafe', border: `1px solid #93c5fd` }}>
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                Managing a complex condition at home?
              </h3>
              <p className="text-sm" style={{ color: BLUE }}>
                Book expert specialized care services today — clinical precision, delivered with compassion
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book specialised care ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}