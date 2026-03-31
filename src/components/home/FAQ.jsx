import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-primary-50 transition-colors"
        onClick={onToggle}
      >
        <span className="font-medium text-slate-800 text-sm md:text-base">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`text-primary-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-primary-50/30">
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Got Questions?</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto text-center">
            Everything you need to know about Instabookin Health.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
