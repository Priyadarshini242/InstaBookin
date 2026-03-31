import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ChevronRight, ArrowUp, Mail, Phone, AlertTriangle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'

const sections = [
  { id: 'acceptance',       title: 'Acceptance of Terms' },
  { id: 'definitions',      title: 'Definitions' },
  { id: 'eligibility',      title: 'Eligibility' },
  { id: 'services',         title: 'Our Services' },
  { id: 'registration',     title: 'Account Registration' },
  { id: 'booking',          title: 'Booking & Appointments' },
  { id: 'payments',         title: 'Payments & Refunds' },
  { id: 'user-conduct',     title: 'User Conduct' },
  { id: 'professional',     title: 'Professional Standards' },
  { id: 'disclaimer',       title: 'Disclaimers' },
  { id: 'liability',        title: 'Limitation of Liability' },
  { id: 'indemnification',  title: 'Indemnification' },
  { id: 'ip',               title: 'Intellectual Property' },
  { id: 'termination',      title: 'Termination' },
  { id: 'governing-law',    title: 'Governing Law' },
  { id: 'contact',          title: 'Contact Us' },
]

function SectionBlock({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-28 mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-7 bg-primary-600 rounded-full" />
        <h2 className="font-display text-xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="pl-4 space-y-3 text-slate-600 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <ChevronRight size={14} className="text-primary-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-2 mt-2 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState('acceptance')
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using any Instabookin Health services. By using our platform, you agree to be bound by these terms."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      {/* Last updated banner */}
      <div className="bg-primary-50 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <FileText size={15} className="text-primary-600" />
            <span>Effective Date: <strong>01 January 2024</strong></span>
            <span className="mx-2 text-slate-300">|</span>
            <span>Last Updated: <strong>01 March 2025</strong></span>
          </div>
          <span className="text-xs text-slate-400">These terms govern all use of Instabookin Health services</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 items-start">

          {/* Sticky Sidebar TOC */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">On This Page</p>
              <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-150 ${
                      activeSection === s.id
                        ? 'bg-primary-50 text-primary-700 font-semibold'
                        : 'text-slate-500 hover:text-primary-600 hover:bg-slate-50'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0">

            <SectionBlock id="acceptance" title="Acceptance of Terms">
              <p>
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and <strong>Instabookin Health Private Limited</strong> ("Company", "we", "us", or "our"), a company incorporated under the Companies Act, 2013, with its registered office at 123 Health Avenue, Coimbatore, Tamil Nadu – 641001.
              </p>
              <p>
                By accessing or using our website at <strong>www.instabookin.health</strong>, our mobile applications, or any of our healthcare services (collectively, the "Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link to="/privacy-policy" className="text-primary-600 underline hover:text-primary-800">Privacy Policy</Link>.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> If you do not agree to these Terms, you must not access or use our Platform or services. Your continued use constitutes your ongoing acceptance.
                  </p>
                </div>
              </div>
            </SectionBlock>

            <SectionBlock id="definitions" title="Definitions">
              <p>For the purposes of these Terms, the following definitions apply:</p>
              <BulletList items={[
                '"Platform" means the Instabookin Health website, mobile applications, APIs, and all associated digital services',
                '"Services" means all home healthcare services offered via the Platform, including but not limited to physiotherapy, nursing care, doctor consultations, lab tests, elder care, and medical equipment rental',
                '"Healthcare Professional" or "Professional" means a verified and empanelled doctor, nurse, physiotherapist, attendant, or other clinical service provider listed on the Platform',
                '"Patient" means the individual for whom a healthcare service is booked, whether or not the same person as the User',
                '"Booking" means a confirmed appointment for a healthcare service made through the Platform',
                '"Content" means all text, images, data, reports, prescriptions, health records, and other materials available on or generated through the Platform',
                '"Personal Data" has the meaning ascribed to it under the Digital Personal Data Protection Act, 2023',
              ]} />
            </SectionBlock>

            <SectionBlock id="eligibility" title="Eligibility">
              <p>To use our Platform and services, you must meet the following eligibility criteria:</p>
              <BulletList items={[
                'You must be at least 18 years of age. If you are booking services on behalf of a minor, you must be the parent or legal guardian of that minor',
                'You must be legally capable of entering into a binding contract under the Indian Contract Act, 1872',
                'You must not have been previously suspended or removed from the Platform by us',
                'You must provide accurate, current, and complete information during registration and booking',
                'You must use the Platform exclusively for lawful purposes and in compliance with these Terms',
              ]} />
              <p className="mt-2">If you are registering on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms.</p>
            </SectionBlock>

            <SectionBlock id="services" title="Our Services">
              <p>Instabookin Health provides a technology-enabled platform that connects patients and caregivers with qualified healthcare professionals for in-home healthcare services. Our current service offerings include:</p>

              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                {[
                  { icon: '🦴', name: 'Physiotherapy', desc: 'Rehabilitation, pain management, and mobility improvement at home' },
                  { icon: '💉', name: 'Nursing Care', desc: 'Wound dressing, injections, IV drips, catheter care, and post-op support' },
                  { icon: '🩺', name: 'Doctor Consultation', desc: 'MBBS/MD doctor home visits for diagnosis and treatment' },
                  { icon: '🧪', name: 'Lab Tests at Home', desc: 'Blood tests, urine analysis, and 200+ diagnostic tests' },
                  { icon: '👴', name: 'Elder Care', desc: 'Trained attendants for daily assistance and companionship' },
                  { icon: '🏥', name: 'Medical Equipment', desc: 'Rental and purchase of hospital-grade home medical equipment' },
                ].map((svc) => (
                  <div key={svc.name} className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <span className="text-xl">{svc.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{svc.name}</p>
                      <p className="text-slate-500 text-xs">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4">We reserve the right to add, modify, or discontinue any service at any time without prior notice. We are not a healthcare provider ourselves; we act solely as a platform connecting patients with independent healthcare professionals.</p>
            </SectionBlock>

            <SectionBlock id="registration" title="Account Registration & Security">
              <p>To access certain features of the Platform, you must create an account. By registering, you agree to the following:</p>
              <BulletList items={[
                'Provide accurate, current, and complete information during the registration process',
                'Maintain and promptly update your account information to keep it accurate and complete',
                'Maintain the confidentiality of your account password and not share it with any third party',
                'Accept responsibility for all activities that occur under your account',
                'Notify us immediately at care@instabookin.health if you suspect unauthorised access to your account',
                'Not create multiple accounts or impersonate any person or entity',
              ]} />
              <p className="mt-3">We reserve the right to suspend or terminate accounts that violate these Terms, contain false information, or are used for fraudulent purposes, without prior notice or liability.</p>
            </SectionBlock>

            <SectionBlock id="booking" title="Booking & Appointments">
              <h3 className="font-semibold text-slate-700 mt-2 mb-2">Making a Booking</h3>
              <BulletList items={[
                'Bookings may be made through the Platform website or mobile application at any time',
                'A booking is confirmed only upon receipt of a confirmation message from us via SMS or email',
                'You are responsible for ensuring that all booking details (service type, date, time, and address) are accurate',
                'We reserve the right to reject or cancel any booking at our discretion',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Cancellation Policy</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse rounded-xl overflow-hidden mt-2">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="text-left p-3 font-semibold">Cancellation Time</th>
                      <th className="text-left p-3 font-semibold">Refund Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['More than 24 hours before appointment', '100% refund'],
                      ['2–24 hours before appointment', '50% refund'],
                      ['Less than 2 hours before appointment', 'No refund'],
                      ['No-show by patient', 'No refund'],
                      ['No-show by Professional (our fault)', '100% refund + ₹100 compensation credit'],
                    ].map(([time, refund], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 text-slate-700">{time}</td>
                        <td className={`p-3 font-semibold ${refund.includes('100%') ? 'text-green-600' : refund.includes('50%') ? 'text-amber-600' : 'text-red-500'}`}>{refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Rescheduling</h3>
              <BulletList items={[
                'Rescheduling requests must be made at least 2 hours before the scheduled appointment time',
                'One free reschedule is permitted per booking; subsequent rescheduling may attract a ₹50 convenience fee',
                'Rescheduling is subject to professional availability',
              ]} />
            </SectionBlock>

            <SectionBlock id="payments" title="Payments & Refunds">
              <h3 className="font-semibold text-slate-700 mb-2">Payment Terms</h3>
              <BulletList items={[
                'All service fees are displayed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise',
                'Payment must be completed at the time of booking via our approved payment methods (credit/debit card, UPI, net banking, or digital wallets)',
                'Cash payments to healthcare professionals are strictly prohibited and shall be treated as a breach of these Terms',
                'Prices are subject to change without notice; the price displayed at the time of booking shall apply',
                'GST and other applicable taxes will be charged as per prevailing government regulations',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Refund Process</h3>
              <BulletList items={[
                'Eligible refunds will be processed within 7–10 business days to the original payment method',
                'Refunds for UPI and wallet payments may be credited within 2–3 business days',
                'Platform convenience fees (if any) are non-refundable',
                'In case of dispute, raise a complaint within 48 hours of the appointment via our Contact page',
              ]} />
            </SectionBlock>

            <SectionBlock id="user-conduct" title="User Conduct">
              <p>You agree to use the Platform responsibly and lawfully. You must not:</p>
              <BulletList items={[
                'Provide false, misleading, or fraudulent information at any point during registration, booking, or use',
                'Use the Platform for any unlawful purpose or in violation of any applicable laws or regulations',
                'Harass, abuse, threaten, defame, or harm any healthcare professional, staff member, or other user',
                'Attempt to gain unauthorised access to any part of the Platform, servers, or databases',
                'Use automated tools, bots, or scripts to access or interact with the Platform',
                'Reproduce, distribute, or commercially exploit any content from the Platform without prior written consent',
                'Upload or transmit viruses, malware, or any other malicious code',
                'Engage in any conduct that could damage the reputation or business of Instabookin Health',
                'Solicit healthcare professionals from our Platform to work outside of it, bypassing our system',
              ]} />
              <p className="mt-3">Violation of these conduct standards may result in immediate account suspension, legal action, and/or reporting to law enforcement authorities.</p>
            </SectionBlock>

            <SectionBlock id="professional" title="Professional Standards & Relationships">
              <p>Healthcare professionals empanelled on the Instabookin Health Platform are independent service providers, not employees of Instabookin Health. The following standards and understandings apply:</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Our Verification Process</h3>
              <BulletList items={[
                'All professionals undergo thorough document verification, reference checks, and clinical assessment before empanelment',
                'We verify medical licences and registrations with the relevant Medical or Nursing Council',
                'Criminal background checks are conducted as part of the onboarding process',
                'Professionals are re-evaluated periodically based on patient feedback and clinical outcomes',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Scope of Our Role</h3>
              <p>Instabookin Health acts as an intermediary platform. We are not responsible for the clinical judgement, diagnosis, or treatment decisions made by healthcare professionals. The professional-patient relationship is governed by applicable medical laws and professional ethics.</p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-3">
                <p className="text-blue-800 text-sm">
                  💡 <strong>Note:</strong> If you have a medical emergency, please call <strong>108</strong> (Ambulance) immediately. Our Platform is not designed for emergency healthcare services.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock id="disclaimer" title="Disclaimers">
              <p>The Platform and services are provided on an "as is" and "as available" basis without warranties of any kind. We expressly disclaim the following:</p>
              <BulletList items={[
                'We do not guarantee that our services will be uninterrupted, timely, secure, or error-free',
                'We do not make any medical claims or guarantees about treatment outcomes',
                'Information provided on the Platform (health articles, tips, etc.) is for general informational purposes only and does not constitute medical advice',
                'We are not responsible for the accuracy, completeness, or usefulness of any information provided by healthcare professionals',
                'Service availability may vary by location and is subject to professional availability',
                'We do not guarantee that any particular professional will be available for your preferred date and time',
              ]} />
              <p className="mt-3">Always seek the advice of a qualified medical professional with any questions regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you read on this Platform.</p>
            </SectionBlock>

            <SectionBlock id="liability" title="Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, Instabookin Health shall not be liable for:</p>
              <BulletList items={[
                'Any indirect, incidental, special, consequential, or punitive damages',
                'Loss of profits, revenue, data, goodwill, or other intangible losses',
                'Any damage resulting from unauthorised access to or alteration of your transmissions or data',
                'Any damage caused by the acts or omissions of independent healthcare professionals',
                'Any interruption or cessation of transmission to or from the Platform',
                'Any bugs, viruses, or the like which may be transmitted through the Platform by any third party',
                'Medical complications, adverse reactions, or outcomes arising from the services rendered',
              ]} />
              <p className="mt-3">In no event shall our total cumulative liability exceed the <strong>total amount paid by you for the specific service</strong> that gave rise to the claim in the twelve (12) months preceding the event.</p>
              <p>Nothing in these Terms excludes or limits liability for death or personal injury caused by our proven negligence, or for fraud or fraudulent misrepresentation.</p>
            </SectionBlock>

            <SectionBlock id="indemnification" title="Indemnification">
              <p>You agree to defend, indemnify, and hold harmless Instabookin Health, its directors, officers, employees, contractors, agents, licensors, and successors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, and fees (including reasonable legal fees) arising out of or relating to:</p>
              <BulletList items={[
                'Your violation of these Terms or any applicable laws',
                'Your use or misuse of the Platform or services',
                'Inaccurate or false information provided by you during registration or booking',
                'Your infringement of any third-party rights, including intellectual property rights',
                'Any harm caused to a healthcare professional or third party by your actions',
              ]} />
            </SectionBlock>

            <SectionBlock id="ip" title="Intellectual Property">
              <p>All content, trademarks, service marks, logos, trade names, and other intellectual property displayed on or accessible through the Platform are the exclusive property of Instabookin Health or their respective third-party owners.</p>
              <BulletList items={[
                'You may not copy, reproduce, distribute, transmit, broadcast, or create derivative works from any Platform content without our express written permission',
                'The "Instabookin Health" name, logo, and all related marks are registered or unregistered trademarks of Instabookin Health Pvt. Ltd.',
                'User-generated content (such as reviews) remains your property, but you grant us a worldwide, royalty-free licence to use, display, and distribute it in connection with our services',
                'Any feedback, suggestions, or ideas you share with us may be used by us without obligation to compensate you',
              ]} />
            </SectionBlock>

            <SectionBlock id="termination" title="Termination">
              <h3 className="font-semibold text-slate-700 mb-2">Termination by You</h3>
              <p>You may terminate your account at any time by contacting us at care@instabookin.health. Account deletion requests will be processed within 14 business days, subject to retention obligations under applicable law.</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Termination by Us</h3>
              <p>We reserve the right to suspend or permanently terminate your access to the Platform, with or without notice, for any of the following reasons:</p>
              <BulletList items={[
                'Violation of any provision of these Terms',
                'Fraudulent, abusive, or unlawful use of the Platform',
                'Providing false or misleading information',
                'Non-payment of dues',
                'At our sole discretion, for any business reason',
              ]} />

              <p className="mt-3">Upon termination, your right to use the Platform ceases immediately. Provisions that by their nature should survive termination (including disclaimers, limitations of liability, and indemnification) shall continue in full force and effect.</p>
            </SectionBlock>

            <SectionBlock id="governing-law" title="Governing Law & Dispute Resolution">
              <p>These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to conflict of law principles.</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Dispute Resolution Process</h3>
              <NumberedList items={[
                'In the event of any dispute, controversy, or claim arising from or relating to these Terms, you must first attempt to resolve it by contacting our support team at care@instabookin.health',
                'If the dispute is not resolved within 30 days of notification, either party may escalate to mediation conducted by a mutually agreed mediator',
                'If mediation fails, the dispute shall be finally resolved by binding arbitration conducted under the Arbitration and Conciliation Act, 1996',
                'The seat of arbitration shall be Coimbatore, Tamil Nadu, India',
                'The language of arbitration proceedings shall be English',
              ]} />

              <p className="mt-3">The courts of <strong>Coimbatore, Tamil Nadu</strong> shall have exclusive jurisdiction for any matters that are not subject to arbitration under these Terms.</p>
            </SectionBlock>

            <SectionBlock id="contact" title="Contact Us">
              <p>For questions, concerns, or notices regarding these Terms and Conditions, please contact us:</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                  <p className="font-semibold text-slate-800 mb-3">Legal & Compliance</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail size={14} className="text-primary-500" />
                      <a href="mailto:legal@instabookin.health" className="hover:text-primary-700 hover:underline">
                        legal@instabookin.health
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone size={14} className="text-primary-500" />
                      <a href="tel:+918000000000" className="hover:text-primary-700 hover:underline">
                        +91 80000 00000
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <p className="font-semibold text-slate-800 mb-3">Registered Office</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Instabookin Health Pvt. Ltd.<br />
                    123 Health Avenue,<br />
                    Coimbatore, Tamil Nadu – 641001<br />
                    India
                  </p>
                </div>
              </div>

              <p className="mt-4">
                You may also reach us via our{' '}
                <Link to="/contact" className="text-primary-600 underline hover:text-primary-800">Contact Page</Link>.
                We aim to respond to all legal inquiries within <strong>5 business days</strong>.
              </p>

              <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="text-slate-500 text-xs leading-relaxed">
                  <strong>Related Policies:</strong>{' '}
                  <Link to="/privacy-policy" className="text-primary-600 underline hover:text-primary-800 mr-3">Privacy Policy</Link>
                  These Terms were last reviewed and updated on <strong>01 March 2025</strong>. We recommend reviewing them periodically for any changes.
                </p>
              </div>
            </SectionBlock>

          </article>
        </div>
      </div>

      {/* Back to top */}
      {showTopBtn && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 w-11 h-11 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center justify-center z-40"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  )
}
