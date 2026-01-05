import React from 'react';
import { Button } from './Button';
import { CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-[600px]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop" 
          alt="Heavy duty truck and SUV fleet" 
          className="w-full h-full object-cover" 
        />
        {/* Dark overlay to darken the image uniformly */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        {/* Gradient to darken the left side specifically for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-orange-400 font-medium text-sm mb-6 backdrop-blur-sm bg-slate-900/50">
            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            Bad Credit to Good Credit — We Get You Approved
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-xl">
            Trucks, SUVs, Cars.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">We Have It All.</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-100 max-w-3xl mb-8 leading-relaxed drop-shadow-md font-medium">
            Excellent financing options for every client’s needs. With over 1,000 vehicles in inventory throughout Canada, we get you what you want within your budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button onClick={scrollToBooking} className="text-lg px-8 py-4 shadow-xl shadow-secondary/20 border border-white/10">
              Easy Application
            </Button>
            <Button variant="outlineWhite" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8 py-4 bg-slate-900/30 hover:bg-slate-900/50">
              View Benefits
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-200 text-sm font-medium border-t border-white/10 pt-8">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-secondary mr-3" />
              <span>90 Days No Payments</span>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-secondary mr-3" />
              <span>Aftermarket Warranty</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-secondary mr-3" />
              <span>Canada-Wide Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};