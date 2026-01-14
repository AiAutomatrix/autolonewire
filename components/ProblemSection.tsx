import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Wallet, Landmark, ThumbsUp, Car, Truck, CarFront } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10, // 10-25s duration
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1
  }));

  // Create a repeating array of vehicle icons for the marquee
  // We repeat the pattern enough times to ensure it fills wide screens
  const vehicleIcons = [
    { Icon: Truck, key: 'truck' },
    { Icon: Car, key: 'car' },
    { Icon: CarFront, key: 'suv' },
  ];
  const marqueeItems = Array(12).fill(vehicleIcons).flat();

  return (
    <section className="pt-24 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Financing For All Credit Levels"
          subtitle="At Rise Broker Firm, we don't let a credit score stand between you and your vehicle."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ThumbsUp className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Bad Credit to Good Credit
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We provide excellent financing options for every client’s needs. Whether you have pristine credit or have faced challenges, we can get you approved.
            </p>
          </div>

          <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Landmark className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              30+ Different Lenders
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We work with all major banks and over 30 different specialized lenders to find the specific program that fits your budget and profile.
            </p>
          </div>

          <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wallet className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              90 Days No Payments
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Drive now, pay later. We offer flexible terms including up to 90 days with no payments so you can get on the road before the bills start.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary to-slate-700 rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden relative group">
          {/* Custom Animation Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float-particle {
              0% { transform: translateY(0) translateX(0); opacity: 0; }
              20% { opacity: var(--target-opacity); }
              80% { opacity: var(--target-opacity); }
              100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
            }
            @keyframes marquee {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee {
              animation: marquee 80s linear infinite;
            }
          `}} />

          {/* Background Blurs */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <div 
                key={p.id}
                className="absolute bg-white rounded-full"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  '--target-opacity': p.opacity,
                  opacity: 0,
                  animation: `float-particle ${p.duration}s linear infinite`,
                  animationDelay: `-${p.delay}s`
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Animated Vehicle Marquee */}
          <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-[0.07] pointer-events-none select-none">
             <div className="flex absolute bottom-[-20px] left-0 animate-marquee whitespace-nowrap items-end">
                {/* We render the items twice to create a seamless loop effect */}
                {[...marqueeItems, ...marqueeItems].map((Item, i) => (
                  <div key={i} className="mx-12 transform hover:scale-110 transition-transform duration-500">
                    <Item.Icon className="w-32 h-32 text-white" strokeWidth={1} />
                  </div>
                ))}
             </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Thousands of options available.
            </h3>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              With over 1,000 vehicles in inventory spread throughout Canada, we can get you exactly what you want within your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};