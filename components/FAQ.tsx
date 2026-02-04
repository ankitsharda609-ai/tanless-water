
import React, { useState } from 'react';

const faqs = [
  {
    question: "How often should I flush my tankless water heater?",
    answer: "In North Little Rock, we recommend a professional flush every 12 months. If you do not have a whole-home water softener, every 9 months may be safer to prevent permanent damage due to local mineral levels."
  },
  {
    question: "What is a 'Secondary Error Code Fix'?",
    answer: "Often, a unit will throw an error code even after a basic reset. We perform a secondary diagnostic check that involves testing sensors, cleaning intake filters, and clearing the logic board memory to ensure the error doesn't return."
  },
  {
    question: "Can I use regular white vinegar to flush my unit?",
    answer: "While some manuals mention vinegar, professional descaling solutions are significantly more effective at dissolving Arkansas lime and calcium buildup without requiring 4+ hours of cycling time."
  },
  {
    question: "How long does a standard service take?",
    answer: "A comprehensive descaling service, including safety inspection and gas pressure check, typically takes between 60 to 90 minutes."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-slate-600">Common concerns about tankless maintenance in Arkansas.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                <i className={`fas ${openIndex === index ? 'fa-minus text-orange-500' : 'fa-plus text-blue-500'} transition-transform`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Still have questions?</h3>
          <p className="text-blue-700 mb-6 font-medium">Our expert technicians are available for consultations Monday through Saturday.</p>
          <a href="tel:8443406413" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
            Talk to a Pro
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
