import React from 'react';
import { Button } from './Button';
import { CarFront } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-secondary p-1.5 rounded-lg">
            <CarFront className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">Rise Broker Firm</span>
        </div>
        
        <Button 
          variant="primary" 
          className="text-sm px-4 py-2"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Apply Now
        </Button>
      </div>
    </header>
  );
};