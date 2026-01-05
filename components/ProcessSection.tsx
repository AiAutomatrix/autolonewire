import React from 'react';
import { SectionHeading } from './SectionHeading';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Book a Call via Calendly",
      desc: "Skip the long forms. Simply book a direct call with our agent through the Calendly scheduler below to get started."
    },
    {
      num: "02",
      title: "Get Approved on the Call",
      desc: "Take advantage of a dedicated phone opportunity. We discuss your credit situation live and secure your financing immediately."
    },
    {
      num: "03",
      title: "Delivery to Your Door",
      desc: "Once you choose your vehicle from our 1k+ inventory, we arrange Canada-wide delivery directly to you."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="How It Works" 
          subtitle="A simple, personal process designed to get you driving fast."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-6 pt-0 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-slate-50 text-3xl font-black text-secondary mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};