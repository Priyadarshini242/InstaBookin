import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
   <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
  isOpen ? 'border-orange-300 shadow-lg shadow-orange-100' : 'border-slate-200 hover:border-orange-200'
}`}>
      <button
        className={`w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-300 ${isOpen ? 'bg-orange-50' : 'bg-white hover:bg-orange-50/50'}`}
        onClick={onToggle}
      >
        <span className="font-medium text-slate-800 text-sm md:text-base">{faq.q}</span>
        <ChevronDown
          size={18}
         className={`shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-orange-500' : 'text-slate-400'}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-orange-100 pt-4 bg-orange-50/40">
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
         <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
  Got Questions?
</div>
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