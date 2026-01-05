import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Do you really accept bad credit?",
      answer: "Yes. Rise Broker Firm works with over 30 different lenders, including major banks and private institutions. We have specialized programs designed specifically for clients with bad credit, no credit, or past bankruptcies."
    },
    {
      question: "Where do you deliver?",
      answer: "We offer Canada-wide delivery. No matter where you are located in the country, we can arrange to have your new truck, SUV, or car delivered directly to you."
    },
    {
      question: "What kind of warranty coverage is available?",
      answer: "We offer aftermarket warranty coverage on our vehicles. This ensures that you are protected against mechanical failures and unexpected repairs after your purchase."
    },
    {
      question: "How does the '90 days no payments' work?",
      answer: "On approved credit, we can structure your financing so that your first payment isn't due until 90 days after you take possession of the vehicle. This gives you three months of driving without the bill."
    },
    {
      question: "What type of vehicles do you have?",
      answer: "We have access to over 1,000 vehicles in inventory including heavy-duty work trucks, SUVs, family sedans, and more. We source based on your specific needs and budget."
    },
    {
      question: "How fast can I get approved?",
      answer: "The application on our website is easy and fast. Once submitted, our team usually processes approvals very quickly, often within the same business day."
    }
  ];

  // Schema.org structured data for FAQ
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" />
        
        {/* Inject JSON-LD for SEO/AI */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <FAQItemComponent key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:bg-slate-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-900">{item.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-0">
          <p className="text-slate-600 mt-2">{item.answer}</p>
        </div>
      )}
    </div>
  );
};