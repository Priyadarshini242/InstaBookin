import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const BLUE = '#1f9de0'
const BLUE_BG = '#e8f5fd'
const BLUE_BORDER = '#b3ddf5'

const stats = [
  { value: '700+',   label: 'Orthopedic care specialists' },
  { value: '15+',    label: 'Orthopedic conditions covered' },
  { value: '98%',    label: 'Recovery satisfaction rate' },
  { value: '48 hrs', label: 'Post-discharge care start' },
]

const pills = [
  'Orthopedic care',
  'Orthopaedic care',
  'Orthopedic care at home',
  'Post-surgery orthopedic care',
  'Orthopedic rehabilitation at home',
  'Home physiotherapy for orthopedic',
  'Knee replacement recovery care',
  'Hip replacement home care',
  'Fracture recovery at home',
  'Orthopaedic wound care',
  'Joint pain care at home',
  'Orthopedic home nursing India',
]

const phases = [
  {
    week: 'Week 1–2',
    title: 'Acute recovery',
    desc: 'Wound care, pain monitoring, swelling management, and post-op vital sign observation',
  },
  {
    week: 'Week 3–4',
    title: 'Early mobilisation',
    desc: 'Assisted movement, range-of-motion exercises, and safe weight-bearing progression',
  },
  {
    week: 'Week 5–8',
    title: 'Active rehabilitation',
    desc: 'Strengthening exercises, gait retraining, assistive device weaning, and functional goals',
  },
  {
    week: 'Week 9+',
    title: 'Long-term recovery',
    desc: 'Endurance building, joint stability training, and independent living skills restoration',
  },
]

const conditions = [
  {
    title: 'Knee replacement recovery',
    desc: 'Post-surgical nursing, physiotherapy support, and progressive mobility training after TKR or PKR',
  },
  {
    title: 'Hip replacement care',
    desc: 'Wound management, hip precaution guidance, and safe mobilisation after total hip arthroplasty',
  },
  {
    title: 'Fracture rehabilitation',
    desc: 'Cast and splint care, immobilisation support, and graduated exercise after bone fracture or fixation',
  },
  {
    title: 'Spinal surgery recovery',
    desc: 'Post-spinal nursing care, posture training, and safe movement protocol adherence at home',
  },
  {
    title: 'Arthritis management',
    desc: 'Ongoing orthopedic home care for osteoarthritis and rheumatoid arthritis pain and joint function',
  },
  {
    title: 'Sports injury recovery',
    desc: 'Ligament, tendon, and muscle injury rehabilitation with progressive return-to-function support',
  },
]

const coreServices = [
  {
    icon: '🩹',
    iconBg: 'bg-blue-100',
    title: 'Post-surgical wound care',
    desc: 'Sterile dressing changes, suture monitoring, and surgical site infection prevention at home',
  },
  {
    icon: '💊',
    iconBg: 'bg-sky-100',
    title: 'Pain & swelling management',
    desc: 'Evidence-based pain monitoring, cold therapy guidance, and medication administration support',
  },
  {
    icon: '🏃',
    iconBg: 'bg-blue-100',
    title: 'Physiotherapy assistance',
    desc: 'Prescribed exercise delivery, range-of-motion progression, and strength-building support at home',
  },
  {
    icon: '🦯',
    iconBg: 'bg-sky-100',
    title: 'Mobility & gait training',
    desc: 'Safe walking retraining, assistive device guidance, and stair and transfer technique support',
  },
  {
    icon: '🦾',
    iconBg: 'bg-blue-100',
    title: 'Cast & splint management',
    desc: 'Monitoring for complications, hygiene care, and safe management of immobilisation devices',
  },
  {
    icon: '📋',
    iconBg: 'bg-sky-100',
    title: 'Surgeon-aligned care reports',
    desc: 'Detailed clinical progress notes shared with the treating orthopaedic surgeon after every visit',
  },
]

const whyChoose = [
  {
    title: 'Surgeon-coordinated care plans',
    desc: "All orthopedic care plans are built in direct alignment with the treating surgeon's post-operative protocols and recovery goals",
  },
  {
    title: 'Certified orthopedic specialists',
    desc: 'Caregivers hold advanced orthopaedic nursing and rehabilitation certifications — not general nurses managing complex cases',
  },
  {
    title: 'Phased recovery model',
    desc: 'Care is structured in clinically defined phases — each one building safely on the last for optimal long-term outcomes',
  },
  {
    title: 'Digital progress tracking',
    desc: 'Patients and families receive clinical progress reports after every visit with milestones, observations, and next-phase guidance',
  },
]

const steps = [
  {
    num: 1,
    title: 'Share your orthopedic care needs',
    desc: "Tell us your diagnosis or procedure, discharge date, surgeon's protocols, and location — our team responds within 12 hours",
  },
  {
    num: 2,
    title: 'Receive a personalised recovery care plan',
    desc: "Our clinical team designs a phased orthopedic recovery plan aligned to your surgeon's instructions and your specific goals",
  },
  {
    num: 3,
    title: 'Specialist arrives at your home',
    desc: 'Your assigned orthopedic care professional arrives on schedule and begins delivering precise, phase-appropriate recovery care',
  },
  {
    num: 4,
    title: 'Progress reports & phase advancement',
    desc: 'Clinical progress is documented after every visit and shared with your surgeon — care advances as your recovery milestones are met',
  },
]

function PhaseCard({ item }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: BLUE }}>{item.week}</p>
      <h4 className="font-bold text-slate-800 transition-colors duration-300" style={{}}>
        {item.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

function ConditionCard({ item }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border-l-4 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      style={{ borderLeftColor: BLUE }}
    >
      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
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
        style={{ background: `linear-gradient(to right, ${BLUE}, #0d7bb5)` }}
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
      className="bg-white rounded-2xl p-5 border-l-4 border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col gap-2"
      style={{ borderLeftColor: BLUE }}
    >
      <h4 className="font-bold text-slate-800 group-hover:[color:#1f9de0] transition-colors duration-300">
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
        style={{ background: `linear-gradient(to right, ${BLUE}, #0d7bb5)` }}
      />
      <div
        className="w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: BLUE_BG, color: BLUE }}
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

export default function Orthopediccare() {
  return (
    <>
      <PageHeader
        title="Orthopedic Care"
        breadcrumbs={[{ label: 'Services' }, { label: 'Orthopedic Care' }]}
        backgroundImage="/orthopedicCare.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: BLUE_BG, color: BLUE }}
            >
              Orthopedic Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Expert Orthopedic Care at Home for{' '}
              <span className="italic" style={{ color: BLUE }}>Faster, Stronger Recovery</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: BLUE }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, our{' '}
                <span className="font-bold text-slate-700">orthopedic care</span> services bring
                specialist-level musculoskeletal support directly to your home — from post-surgical
                rehabilitation and fracture recovery to chronic joint care and physiotherapy —
                delivered by trained orthopedic care professionals every step of the way.
              </p>
              <p>
                Recovering from an orthopedic condition or surgery is one of the most physically
                demanding journeys a patient can face. Whether it is a hip replacement, knee surgery,
                spinal procedure, or a fracture requiring immobilisation, the quality of care during
                the recovery phase has a direct and measurable impact on long-term outcomes.
                Instabookin's{' '}
                <span className="font-bold text-slate-700">orthopedic care at home</span> services
                are purpose-built for this critical recovery window — providing medically supervised,
                personalised care that bridges the gap between hospital discharge and full functional
                recovery. Our certified orthopedic care nurses and physiotherapy support specialists
                work in close collaboration with the patient's treating orthopaedic surgeon to ensure
                every home visit is clinically precise, appropriately progressive, and consistently
                documented.
              </p>
              <p>
                Our <span className="font-bold text-slate-700">home orthopedic care</span> services
                cover the full range of musculoskeletal conditions and surgical recovery needs. From{' '}
                <span className="font-bold text-slate-700">
                  post-operative orthopedic wound care, splint and cast management, and pain
                  monitoring
                </span>{' '}
                to guided range-of-motion exercises, mobility retraining, and assistive device
                training, our care team delivers everything the patient needs to recover safely and
                confidently at home. Instabookin's{' '}
                <span className="font-bold text-slate-700">orthopedic rehabilitation at home</span>{' '}
                approach is structured in progressive phases — each phase calibrated to the patient's
                specific procedure, recovery milestones, and the protocols set by their orthopaedic
                surgeon. This phased model eliminates the guesswork, ensuring the patient is neither
                pushed too hard nor held back unnecessarily — both of which can compromise
                orthopaedic outcomes.
              </p>
              <p>
                Beyond surgical recovery, Instabookin's{' '}
                <span className="font-bold text-slate-700">orthopedic care services</span> also
                support patients managing chronic musculoskeletal conditions including
                osteoarthritis, rheumatoid arthritis, osteoporosis, lower back pain, and sports
                injuries. Our caregivers are trained to deliver ongoing{' '}
                <span className="font-bold text-slate-700">orthopaedic home care</span> that
                combines pain management, therapeutic exercise, posture correction, and lifestyle
                guidance — helping patients maintain joint function, reduce pain, and stay active for
                longer. With <span className="font-bold text-slate-700">Instabookin</span>,
                world-class <span className="font-bold text-slate-700">orthopedic care</span> is no
                longer confined to a clinic — it comes to your home, on your schedule, with the
                continuity and personal attention that genuine recovery demands.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{ backgroundColor: BLUE_BG, color: BLUE, borderColor: BLUE_BORDER }}
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

      {/* ── PHASES ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: BLUE_BG, color: BLUE }}
            >
              Orthopedic Recovery — Phases of Care at Home
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 leading-tight">
              Progressive.{' '}
              <span className="italic" style={{ color: BLUE }}>Phase by Phase.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((item) => (
              <PhaseCard key={item.week} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: BLUE_BG, color: BLUE }}
            >
              Orthopedic Conditions We Care for at Home
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 leading-tight">
              Every Condition.{' '}
              <span className="italic" style={{ color: BLUE }}>Expert Recovery.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((item) => (
              <ConditionCard key={item.title} item={item} />
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
              style={{ backgroundColor: BLUE_BG, color: BLUE }}
            >
              What Our Orthopedic Care Services Include
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 leading-tight">
              Clinical Care,{' '}
              <span className="italic" style={{ color: BLUE }}>Delivered at Home</span>
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
              style={{ backgroundColor: BLUE_BG, color: BLUE }}
            >
              Why Patients Choose Instabookin for Orthopedic Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 leading-tight">
              Precision Care.{' '}
              <span className="italic" style={{ color: BLUE }}>Proven Results.</span>
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
              style={{ backgroundColor: BLUE_BG, color: BLUE }}
            >
              How to Book Orthopedic Care at Home — 4 Steps
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 leading-tight">
              From Discharge to Recovery,{' '}
              <span className="italic" style={{ color: BLUE }}>We're With You.</span>
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
            style={{ backgroundColor: BLUE_BG, borderColor: BLUE_BORDER }}
          >
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                Recovering from orthopedic surgery or injury?
              </h3>
              <p className="text-sm" style={{ color: BLUE }}>
                Book expert orthopedic care at home today — clinical precision, from day one of discharge
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Book orthopedic care ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}