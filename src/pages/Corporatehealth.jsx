import PageHeader from '../components/common/PageHeader'
import CTABanner from '../components/home/CTABanner'

const stats = [
  { value: '500+',      label: 'Corporate clients served' },
  { value: '1.2L+',     label: 'Employees covered annually' },
  { value: '40%',       label: 'Avg. reduction in absenteeism' },
  { value: 'Pan-India', label: 'Service coverage' },
]

const pills = [
  'Corporate wellness program',
  'Employee wellness program',
  'Corporate health services',
  'Workplace health program',
  'On-site health check-up camp',
  'Corporate health screening',
  'Employee health benefits',
  'Occupational health services',
  'Corporate vaccination drive',
  'Workforce wellness solutions',
  'Mental wellness at workplace',
  'Corporate health program India',
]

const coreServices = [
  {
    icon: '🏕️',
    iconBg: 'bg-indigo-100',
    title: 'Annual health check-up camps',
    desc: 'Comprehensive on-site employee health screenings covering blood work, vitals, BMI, and specialist consultations',
  },
  {
    icon: '💉',
    iconBg: 'bg-purple-100',
    title: 'Corporate vaccination drives',
    desc: 'Organised flu, hepatitis, and other workplace vaccination programmes delivered at your premises',
  },
  {
    icon: '🧠',
    iconBg: 'bg-violet-100',
    title: 'Mental wellness sessions',
    desc: 'Workplace stress management, mindfulness workshops, and one-on-one counselling for employee mental health',
  },
  {
    icon: '🫀',
    iconBg: 'bg-indigo-100',
    title: 'Chronic disease management',
    desc: 'Ongoing monitoring and care plans for employees managing diabetes, hypertension, and lifestyle conditions',
  },
  {
    icon: '🪑',
    iconBg: 'bg-purple-100',
    title: 'Ergonomic & fitness assessment',
    desc: 'Posture analysis, workstation evaluation, and personalised fitness guidance for desk-based employees',
  },
  {
    icon: '📊',
    iconBg: 'bg-violet-100',
    title: 'Workforce health analytics',
    desc: 'Anonymised, actionable health insights for HR teams to guide preventive care investment decisions',
  },
]

const plans = [
  {
    name: 'Starter',
    tag: null,
    desc: 'Ideal for small businesses — annual health screening camp, basic vaccination drive, and digital health records for up to 100 employees',
    badge: 'Up to 100 employees',
    highlight: false,
  },
  {
    name: 'Growth',
    tag: 'Most popular',
    desc: 'Full corporate wellness program with health camps, mental wellness sessions, chronic disease monitoring, and HR health dashboard for 100–500 employees',
    badge: '100–500 employees',
    highlight: true,
  },
  {
    name: 'Enterprise',
    tag: null,
    desc: 'Custom end-to-end corporate health services — multi-location coverage, dedicated health coordinator, advanced workforce analytics, and unlimited wellness sessions',
    badge: '500+ employees',
    highlight: false,
  },
]

const whyChoose = [
  {
    title: 'Fully customisable programs',
    desc: 'Every corporate wellness program is designed around your workforce size, industry risks, and organisational health goals',
  },
  {
    title: 'Certified medical teams',
    desc: 'On-site health camps and screenings are delivered by qualified doctors, nurses, and wellness specialists',
  },
  {
    title: 'Digital health records',
    desc: 'All employee health data is securely stored digitally — accessible by employees and summarised for HR teams',
  },
  {
    title: 'Measurable ROI on wellness',
    desc: 'Data-backed reports show absenteeism reduction, health risk trends, and program ROI for leadership review',
  },
]

const steps = [
  {
    num: 1,
    title: 'Share your workforce health requirements',
    desc: 'Tell us your employee count, industry, locations, and key health priorities — our team responds within 24 hours',
  },
  {
    num: 2,
    title: 'Receive a customised wellness proposal',
    desc: 'We design a tailored corporate wellness program with services, schedule, and transparent pricing for your approval',
  },
  {
    num: 3,
    title: 'Program goes live at your workplace',
    desc: 'Our certified medical teams arrive on-site to deliver health camps, screenings, and wellness sessions as planned',
  },
  {
    num: 4,
    title: 'Review insights & schedule next cycle',
    desc: 'Receive a comprehensive workforce health report and plan the next wellness cycle based on data-driven recommendations',
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

export default function CorporateHealth() {
  return (
    <>
      <PageHeader
        title="Corporate Health Services"
        breadcrumbs={[{ label: 'Services' }, { label: 'Corporate Health Services' }]}
        backgroundImage="/corporate health.png"
      />

      {/* ── ABOUT SECTION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Corporate Health Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              A Smarter Corporate Wellness Program{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>for a Healthier Workforce</span>
            </h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: '#1f9de0' }} />

            <div className="space-y-4 text-black text-[15px] leading-relaxed">
              <p>
                At <span className="font-black text-slate-700">Instabookin</span>, we partner
                with organisations of all sizes to design and deliver impactful{' '}
                <span className="font-black text-slate-700">corporate wellness programs</span> —
                bringing certified healthcare professionals directly to your workplace and empowering
                your employees to live healthier, more productive lives.
              </p>
              <p>
                A thriving business begins with a healthy workforce. Instabookin's{' '}
                <span className="font-black text-slate-700">corporate wellness program</span> is
                built on this fundamental truth — that employee health is not an HR benefit but a
                strategic business investment. Organisations that invest in structured{' '}
                <span className="font-black text-slate-700">corporate health services</span>{' '}
                consistently report lower absenteeism, reduced healthcare costs, higher employee
                engagement, and improved talent retention. Our end-to-end{' '}
                <span className="font-black text-slate-700">corporate wellness program</span> is
                designed to address the physical, mental, and preventive health needs of your entire
                workforce — from frontline staff to senior leadership — through convenient, on-site,
                and at-home healthcare delivery that integrates seamlessly with your work culture.
              </p>
              <p>
                Instabookin's{' '}
                <span className="font-black text-slate-700">corporate wellness program</span>{' '}
                services span a wide spectrum of occupational and preventive health interventions.
                From{' '}
                <span className="font-black text-slate-700">
                  on-site health check-up camps, annual employee health screenings, and corporate
                  vaccination drives
                </span>{' '}
                to mental wellness sessions, ergonomic assessments, and chronic disease management
                programmes, our certified medical teams bring clinical-grade healthcare directly into
                your workspace. Every service is customisable — we work closely with your HR and
                leadership teams to design a{' '}
                <span className="font-black text-slate-700">
                  corporate health and wellness program
                </span>{' '}
                that aligns with your workforce demographics, industry-specific health risks, and
                organisational health goals. Whether you manage a 50-person startup or a
                5,000-employee enterprise, Instabookin scales its corporate health services to fit
                precisely.
              </p>
              <p>
                What distinguishes{' '}
                <span className="font-black text-slate-700">Instabookin</span> as a preferred{' '}
                <span className="font-black text-slate-700">
                  corporate wellness program provider in India
                </span>{' '}
                is our data-driven, outcome-focused approach. Every health camp, screening drive, and
                wellness session is documented digitally, generating anonymised workforce health
                insights that help HR teams make informed decisions on preventive care priorities.
                Employees also gain access to Instabookin's individual health records platform —
                enabling them to track personal health metrics, book follow-up appointments, and
                access their corporate health benefits at any time. A well-designed{' '}
                <span className="font-black text-slate-700">employee wellness program</span> does
                more than reduce sick days — it builds a culture where people feel genuinely valued,
                and that culture drives performance.
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
                <p className="text-2xl font-bold mb-1" style={{ color: '#1f9de0' }}>{s.value}</p>
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
              What Our Corporate Wellness Program Includes
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Every Health Need,{' '}
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

      {/* ── PLANS ── */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Corporate Wellness Program Plans
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Choose the Right Plan for{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Your Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl p-6 border flex flex-col gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={
                  plan.highlight
                    ? { backgroundColor: '#1f9de0', borderColor: '#1f9de0', color: 'white' }
                    : {}
                }
                onMouseEnter={e => { if (!plan.highlight) e.currentTarget.style.borderColor = '#1f9de0' }}
                onMouseLeave={e => { if (!plan.highlight) e.currentTarget.style.borderColor = '' }}
              >
                {plan.tag && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full border shadow-sm whitespace-nowrap"
                    style={{ backgroundColor: 'white', color: '#1f9de0', borderColor: '#b3ddf5' }}
                  >
                    {plan.tag}
                  </span>
                )}
                <h3
                  className="text-xl font-bold"
                  style={{ color: plan.highlight ? 'white' : '#1a202c' }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: plan.highlight ? '#e0f2fe' : '#94a3b8' }}
                >
                  {plan.desc}
                </p>
                <span
                  className="self-start text-xs font-semibold px-3 py-1.5 rounded-full mt-auto"
                  style={
                    plan.highlight
                      ? { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }
                      : { backgroundColor: '#e8f5fd', color: '#1f9de0' }
                  }
                >
                  {plan.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              Why Organisations Choose Instabookin
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-3 leading-tight">
              Built for Results.{' '}
              <span className="italic" style={{ color: '#1f9de0' }}>Trusted by Teams.</span>
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
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: '#e8f5fd', color: '#1f9de0' }}
            >
              How to Launch Your Corporate Wellness Program — 4 Steps
            </span>
            <h2 className="text-5xl font-bold text-slate-800">From Proposal to Program in Days.</h2>
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
                Ready to invest in your team's health?
              </h3>
              <p className="text-sm" style={{ color: '#1f9de0' }}>
                Launch a corporate wellness program tailored to your workforce — talk to our health team today
              </p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Get a wellness proposal ↗
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}