import React, { useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';

export const BookingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    
    // Function to initialize the widget programmatically
    const initCalendly = () => {
      // @ts-ignore
      if (window.Calendly && containerRef.current) {
        // Clear any previous instances/content to prevent duplicates
        containerRef.current.innerHTML = '';
        
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/ryewire/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff7c00',
          parentElement: containerRef.current
        });
      }
    };

    // Check if script is already present in the document
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;
    
    if (!script) {
      // Script doesn't exist, create and append it
      script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
      
      // Initialize once the script is fully loaded
      script.addEventListener('load', initCalendly);
    } else {
      // Script exists (possibly from a previous page view), try to initialize immediately
      initCalendly();
    }
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
             ref={containerRef}
             className="calendly-inline-widget" 
             style={{ minWidth: '320px', height: '700px' }}
             data-url="https://calendly.com/ryewire/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff7c00" 
           ></div>
           {/* Calendly inline widget end */}
        </div>
      </div>
    </section>
  );
};