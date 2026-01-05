import React, { useEffect } from 'react';
import { SectionHeading } from './SectionHeading';

export const BookingSection: React.FC = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-primary to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full filter blur-[100px]"></div>
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Book Your Consultation" 
          subtitle="Schedule a 30-minute call with our financing specialists to get approved."
          light={true}
        />

        <div className="mt-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
           {/* Calendly inline widget begin */}
           <div 
             className="calendly-inline-widget" 
             data-url="https://calendly.com/ryewire204/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
             style={{ minWidth: '320px', height: '700px' }}
           ></div>
           {/* Calendly inline widget end */}
        </div>
      </div>
    </section>
  );
};