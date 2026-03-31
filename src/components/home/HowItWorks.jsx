const steps = [
  {
    step: '01',
    icon: '📱',
    title: 'Book Online',
    description: 'Choose your service, select a convenient time slot, and complete your booking in under 2 minutes.',
  },
  {
    step: '02',
    icon: '✅',
    title: 'Get Confirmed',
    description: 'Receive instant confirmation with the assigned professional\'s name, photo, and estimated arrival time.',
  },
  {
    step: '03',
    icon: '🏠',
    title: 'Care at Home',
    description: 'Our verified professional arrives at your doorstep, equipped and ready to deliver quality care.',
  },
  {
    step: '04',
    icon: '📋',
    title: 'Digital Records',
    description: 'Receive your reports, prescriptions, and care notes digitally — anytime, anywhere.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="section-title">How Instabookin Health Works</h2>
          <p className="section-subtitle mx-auto text-center">
            Getting quality home healthcare has never been simpler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 z-0" />

          {steps.map((step, i) => (
            <div key={step.step} className="relative text-center z-10">
              {/* Step icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-card border-2 border-primary-100 mb-5 relative">
                <span className="text-3xl">{step.icon}</span>
                <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
