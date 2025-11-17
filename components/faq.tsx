'use client'

import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I search for PGs near ADTU?',
      answer: 'Use our advanced search and filter system to browse 500+ verified PGs. Filter by price, amenities, gender preferences, and more to find your perfect match.'
    },
    {
      question: 'Are all listings on the platform verified?',
      answer: 'Yes! Every PG is manually verified for authenticity and safety. We ensure all information is accurate and current.'
    },
    {
      question: 'How do I contact a landlord?',
      answer: 'Click on any PG listing and use the contact form or message feature to reach out directly to the landlord. They typically respond within 24 hours.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept online transfers, digital wallets, and direct bank transfers for secure and convenient payments.'
    },
    {
      question: 'Can I save my favorite PGs?',
      answer: 'Create an account and add PGs to your favorites list for easy comparison later.'
    },
    {
      question: 'What if I have issues after booking?',
      answer: 'Our 24/7 customer support team is ready to help resolve any issues. Contact us via chat, email, or phone.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about our platform</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left font-semibold text-foreground hover:bg-blue-50 transition duration-200 flex items-center justify-between group-hover:bg-blue-50"
              >
                {faq.question}
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-blue-50 border-t border-blue-200 text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
