import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ChevronRight, ArrowUp, Mail, Phone } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'

const sections = [
  { id: 'overview',        title: 'Overview' },
  { id: 'information',     title: 'Information We Collect' },
  { id: 'how-we-use',      title: 'How We Use Your Information' },
  { id: 'sharing',         title: 'Sharing of Information' },
  { id: 'cookies',         title: 'Cookies & Tracking' },
  { id: 'data-security',   title: 'Data Security' },
  { id: 'retention',       title: 'Data Retention' },
  { id: 'rights',          title: 'Your Rights' },
  { id: 'children',        title: 'Children\'s Privacy' },
  { id: 'third-party',     title: 'Third-Party Links' },
  { id: 'changes',         title: 'Changes to This Policy' },
  { id: 'contact',         title: 'Contact Us' },
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

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400)

      // Highlight active TOC item
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
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how Instabookin Health collects, uses, and protects your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      {/* Last updated banner */}
      <div className="bg-primary-50 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Shield size={15} className="text-primary-600" />
            <span>Effective Date: <strong>01 January 2024</strong></span>
            <span className="mx-2 text-slate-300">|</span>
            <span>Last Updated: <strong>01 March 2025</strong></span>
          </div>
          <span className="text-xs text-slate-400">Applies to all Instabookin Health services across India</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 items-start">

          {/* Sticky Sidebar TOC */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">On This Page</p>
              <nav className="space-y-1">
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

            <SectionBlock id="overview" title="Overview">
              <p>
                Instabookin Health Private Limited ("we", "us", or "our") operates the website <strong>www.instabookin.health</strong> and all associated mobile applications and services (collectively, the "Platform"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use our Platform.
              </p>
              <p>
                By accessing or using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please discontinue use of the Platform.
              </p>
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mt-3">
                <p className="text-primary-800 font-medium text-sm">
                  🔒 We are committed to protecting your health data in compliance with India's <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and applicable healthcare data regulations.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock id="information" title="Information We Collect">
              <p>We collect several types of information to provide and improve our services to you:</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">A. Information You Provide Directly</h3>
              <BulletList items={[
                'Full name, date of birth, and gender',
                'Contact details including mobile number, email address, and home/office address',
                'Medical history, health conditions, prescriptions, and treatment records',
                'Identity documents (Aadhaar, PAN, or other government-issued IDs) for verification',
                'Payment details (credit/debit card numbers, UPI IDs, net banking credentials — processed securely via PCI-DSS compliant gateways)',
                'Feedback, ratings, and reviews you submit about our services or professionals',
                'Communications you send us via contact forms, email, or chat',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">B. Information Collected Automatically</h3>
              <BulletList items={[
                'Device information: type, operating system, browser type, and unique device identifiers',
                'Log data: IP address, pages visited, time and date of visit, time spent on pages',
                'Location data (only when you explicitly permit location access on your device)',
                'Usage patterns and navigation paths within the Platform',
                'Referral URLs and search queries that brought you to our Platform',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">C. Information from Third Parties</h3>
              <BulletList items={[
                'Data from healthcare professionals registered on our platform (with their consent)',
                'Integration data from diagnostic labs and pharmacy partners',
                'Social login information if you sign in via Google, Facebook, or other OAuth providers',
                'Payment verification data from financial institutions',
              ]} />
            </SectionBlock>

            <SectionBlock id="how-we-use" title="How We Use Your Information">
              <p>We use the collected information for the following purposes:</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Service Delivery</h3>
              <BulletList items={[
                'To process and manage your bookings for home healthcare visits',
                'To assign and coordinate qualified professionals for your appointments',
                'To send appointment confirmations, reminders, and status updates via SMS, email, or in-app notifications',
                'To maintain your digital health records and share them with your assigned professionals',
                'To facilitate teleconsultations and remote patient monitoring',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Platform Improvement</h3>
              <BulletList items={[
                'To analyse usage patterns and improve our Platform\'s features and user experience',
                'To develop new services and personalise your experience on the Platform',
                'To conduct internal research, audits, and analytics',
                'To monitor and ensure the quality of care delivered by our professionals',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Communication & Marketing</h3>
              <BulletList items={[
                'To send you information about new services, health tips, and promotional offers (only with your consent)',
                'To respond to your queries, complaints, and feedback',
                'To notify you of updates to our policies and platform features',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Legal & Security</h3>
              <BulletList items={[
                'To comply with applicable laws, regulations, and court orders',
                'To detect, prevent, and address fraud, abuse, and security threats',
                'To enforce our Terms & Conditions and other agreements',
                'To protect the rights, property, and safety of Instabookin Health, our users, and the public',
              ]} />
            </SectionBlock>

            <SectionBlock id="sharing" title="Sharing of Information">
              <p>We do not sell or rent your personal information to third parties. We share your information only in the following circumstances:</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">With Healthcare Professionals</h3>
              <p>Your relevant health information and contact details are shared with the specific doctor, nurse, physiotherapist, or other professional assigned to your appointment. This information is shared strictly on a need-to-know basis to facilitate your care.</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">With Service Partners</h3>
              <BulletList items={[
                'Diagnostic laboratories for processing lab test orders',
                'Pharmacies and medical equipment vendors for delivery fulfilment',
                'Payment gateways and financial institutions for processing transactions',
                'SMS, email, and push notification providers for communication delivery',
              ]} />

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">For Legal Compliance</h3>
              <p>We may disclose your information to government authorities, regulatory bodies, or law enforcement agencies when required to do so by law, or when we believe such disclosure is necessary to protect our rights, your safety, or the safety of others.</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity. We will notify you via email or prominent notice on our Platform before any such transfer occurs.</p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-3">
                <p className="text-amber-800 text-sm">
                  ⚠️ <strong>Important:</strong> All third-party partners are contractually bound to maintain confidentiality and process your data only for the specified purposes, consistent with this Privacy Policy.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock id="cookies" title="Cookies & Tracking Technologies">
              <p>We use cookies and similar tracking technologies (such as web beacons and pixel tags) to enhance your experience on our Platform.</p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Types of Cookies We Use</h3>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="text-left p-3 font-semibold">Cookie Type</th>
                      <th className="text-left p-3 font-semibold">Purpose</th>
                      <th className="text-left p-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['Essential', 'Required for core functionality such as login sessions and security', 'Session'],
                      ['Functional', 'Remember your preferences (language, location, saved services)', '1 year'],
                      ['Analytics', 'Understand how visitors interact with our Platform (Google Analytics)', '2 years'],
                      ['Marketing', 'Deliver relevant advertisements and track campaign performance', '90 days'],
                    ].map(([type, purpose, duration], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-medium text-slate-700">{type}</td>
                        <td className="p-3 text-slate-500">{purpose}</td>
                        <td className="p-3 text-slate-500">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">You can control cookie settings through your browser preferences. However, disabling essential cookies may affect the functionality of our Platform. You may also opt out of analytics tracking by visiting <strong>Google Analytics Opt-out</strong> page.</p>
            </SectionBlock>

            <SectionBlock id="data-security" title="Data Security">
              <p>We implement industry-standard technical and organisational measures to protect your personal and health data from unauthorised access, disclosure, alteration, or destruction.</p>
              <BulletList items={[
                'All data is encrypted in transit using TLS 1.2+ (SSL) protocols',
                'Sensitive health records are encrypted at rest using AES-256 encryption',
                'Access to personal data is restricted to authorised personnel on a need-to-know basis',
                'Our systems undergo regular third-party security audits and penetration testing',
                'We maintain an Information Security Management System (ISMS) in accordance with ISO 27001',
                'All healthcare professionals sign confidentiality agreements before accessing patient data',
                'We use multi-factor authentication (MFA) for all internal systems handling personal data',
                'Automated intrusion detection systems monitor our infrastructure 24/7',
              ]} />
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-3">
                <p className="text-slate-600 text-sm">
                  While we take every reasonable precaution, no method of transmission over the internet or electronic storage is 100% secure. If you suspect any unauthorised access to your account, please contact us immediately at <strong>security@instabookin.health</strong>.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock id="retention" title="Data Retention">
              <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.</p>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-xs border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="text-left p-3 font-semibold">Data Category</th>
                      <th className="text-left p-3 font-semibold">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['Account & profile information', '3 years after account closure'],
                      ['Medical records & prescriptions', '7 years (as required under MCI regulations)'],
                      ['Transaction & payment records', '8 years (as required under IT Act & GST law)'],
                      ['Communication logs', '2 years'],
                      ['Analytics & usage data', '26 months'],
                      ['Legal hold data', 'Duration of legal proceedings + 1 year'],
                    ].map(([category, period], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-medium text-slate-700">{category}</td>
                        <td className="p-3 text-slate-500">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">After the applicable retention period expires, your personal data is securely deleted or anonymised so that it can no longer be associated with you.</p>
            </SectionBlock>

            <SectionBlock id="rights" title="Your Rights">
              <p>As a user of Instabookin Health, you have the following rights with respect to your personal data, consistent with the Digital Personal Data Protection Act, 2023:</p>
              <BulletList items={[
                'Right to Access: Request a copy of the personal data we hold about you',
                'Right to Correction: Request correction of inaccurate or incomplete personal data',
                'Right to Erasure: Request deletion of your personal data, subject to legal obligations',
                'Right to Data Portability: Receive your data in a structured, commonly used, machine-readable format',
                'Right to Withdraw Consent: Withdraw consent for marketing communications at any time without affecting prior processing',
                'Right to Nominate: Nominate another individual to exercise your data rights in the event of your death or incapacity',
                'Right to Grievance Redressal: Lodge a complaint with our Data Protection Officer if you believe your rights have been violated',
              ]} />
              <p className="mt-3">To exercise any of these rights, please submit a written request to our Data Protection Officer at <strong className="text-primary-600">privacy@instabookin.health</strong>. We will respond within <strong>30 days</strong> of receiving your request. In some cases, we may need to verify your identity before processing your request.</p>
            </SectionBlock>

            <SectionBlock id="children" title="Children's Privacy">
              <p>Our Platform is not directed at children under the age of <strong>18 years</strong>. We do not knowingly collect personal information from minors without verifiable parental or guardian consent.</p>
              <p>If a parent or guardian believes that their child has provided us with personal information without consent, please contact us at <strong className="text-primary-600">privacy@instabookin.health</strong> and we will promptly delete such information from our records.</p>
              <p>When services are booked for minor patients, the booking must be made by a parent, legal guardian, or an adult authorised caregiver, who assumes full responsibility for the accuracy of information provided.</p>
            </SectionBlock>

            <SectionBlock id="third-party" title="Third-Party Links & Services">
              <p>Our Platform may contain links to third-party websites, payment gateways, social media platforms, and other services that are not operated by us. These links are provided for your convenience.</p>
              <p>We have no control over the content, privacy policies, or practices of any third-party site or service. We strongly advise you to review the Privacy Policy of every site you visit. Instabookin Health bears no responsibility or liability for the content or privacy practices of any third-party websites.</p>
              <BulletList items={[
                'Google Analytics — for website usage analytics',
                'Razorpay / PayU — for payment processing',
                'Firebase — for push notifications and app performance',
                'Google Maps — for location and address services',
                'WhatsApp Business API — for appointment communications',
              ]} />
            </SectionBlock>

            <SectionBlock id="changes" title="Changes to This Policy">
              <p>We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:</p>
              <BulletList items={[
                'Update the "Last Updated" date at the top of this page',
                'Send a notification via email to registered users at least 14 days before the changes take effect',
                'Display a prominent notice on our Platform for at least 30 days',
              ]} />
              <p>Your continued use of the Platform after the effective date of the revised policy constitutes your acceptance of the changes. If you do not agree to the updated policy, you must discontinue use of the Platform and may request deletion of your data.</p>
            </SectionBlock>

            <SectionBlock id="contact" title="Contact Us">
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                  <p className="font-semibold text-slate-800 mb-3">Data Protection Officer</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail size={14} className="text-primary-500" />
                      <a href="mailto:privacy@instabookin.health" className="hover:text-primary-700 hover:underline">
                        privacy@instabookin.health
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
                You may also reach us via our <Link to="/contact" className="text-primary-600 underline hover:text-primary-800">Contact Page</Link>. We aim to respond to all privacy-related inquiries within <strong>7 business days</strong>.
              </p>
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
