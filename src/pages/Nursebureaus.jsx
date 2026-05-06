import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '2,500+', label: 'Registered nurses' },
  { value: '30+',    label: 'Nursing specialisations' },
  { value: '100%',   label: 'Background verified' },
  { value: '48 hr',  label: 'Avg. placement time' },
]

const nurseTypes = [
  {
    icon: '🩺',
    iconBg: 'bg-blue-100',
    title: 'Registered nurses (RN)',
    desc: 'General and specialised care across hospitals, clinics, and homes',
  },
  {
    icon: '🏥',
    iconBg: 'bg-red-100',
    title: 'ICU & critical care',
    desc: 'Trained professionals for high-dependency and intensive care settings',
  },
  {
    icon: '👶',
    iconBg: 'bg-orange-100',
    title: 'Paediatric nurses',
    desc: 'Child-focused nursing care from newborns to adolescents',
  },
  {
    icon: '🕊️',
    iconBg: 'bg-green-100',
    title: 'Palliative & elder care',
    desc: 'Compassionate end-of-life and long-term elderly support specialists',
  },
]

const bureauSteps = [
  {
    num: 1,
    title: 'Application & credential review',
    desc: 'Nurses submit qualifications, certifications, and work history for initial review',
  },
  {
    num: 2,
    title: 'Screening & clinical assessment',
    desc: 'Background checks, reference calls, and skills evaluation by our clinical panel',
  },
  {
    num: 3,
    title: 'Bureau onboarding & listing',
    desc: 'Approved nurses are profiled, categorised, and made available for booking',
  },
  {
    num: 4,
    title: 'Placement & ongoing quality review',
    desc: 'Nurses are matched to assignments with performance tracking and regular audits',
  },
]

const pills = [
  'Credential verified',
  'Background screened',
  'Clinically assessed',
  'Continuously audited',
]

function NurseTypeCard({ item }) {
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

export default function NurseBureaus() {
  return (
    <>
      <PageHeader
        title="Nurse Bureaus"
        breadcrumbs={[{ label: 'Services' }, { label: 'Nurse Bureaus' }]}
        backgroundImage="/nursebureaus.jpg"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Nurse Bureaus
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Your Trusted Gateway to{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Skilled Nursing Talent</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-slate-500 text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, our Nurse Bureau is the backbone of everything we do — a carefully curated network of credentialed, experienced nurses ready to serve patients, hospitals, clinics, and care facilities across the country.
              </p>
              <p>
                A nurse bureau is more than a staffing service — it is a trusted bridge between skilled nursing professionals and those who need them most. Instabookin's Nurse Bureau operates as a centralised registry of qualified nurses, vetted through a rigorous onboarding process that includes credential verification, background screening, clinical assessments, and professional reference checks. Every nurse listed in our bureau is not just certified — they are thoroughly evaluated for competence, compassion, and reliability.
              </p>
              <p>
                Whether you are a hospital managing staffing shortages, a clinic seeking specialist support, or a family looking for a private home nurse, our bureau provides flexible, on-demand access to the right nursing professional. From registered nurses (RNs) and licensed practical nurses (LPNs) to specialised ICU nurses, paediatric nurses, and palliative care experts — our bureau spans every nursing specialisation to meet diverse healthcare demands.
              </p>
              <p>
                What sets <span className="font-black text-slate-700">Instabookin</span>'s Nurse Bureau apart is our commitment to continuous quality assurance. Nurses in our network undergo regular skills updates, compliance training, and performance reviews based on patient feedback. This living registry ensures that when you book through Instabookin, you always receive care from someone who is current, competent, and committed to excellence.
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

      {/* ── NURSE TYPES ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Our Nurse Specialists
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Every Specialisation,{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Covered</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nurseTypes.map((item) => (
              <NurseTypeCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUREAU PROCESS ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Our Bureau Process — How Nurses Join & Serve
            </span>
            <h2 className="text-5xl font-bold text-slate-800">Rigorous. Reliable. Ready.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bureauSteps.map((s) => (
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
                Looking to hire or register as a nurse?
              </h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>
                Explore bureau listings or join our growing network today
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Explore the bureau ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}