import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white text-xl font-bold mb-6">Rise Broker Firm</h4>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              We provide excellent financing options for every client’s needs. From bad credit to good credit, we can get you approved for the Truck, SUV, or Car you need.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-6">Inventory</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Trucks</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">SUVs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cars</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Canada-Wide Delivery</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-6">Support</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 text-xs text-slate-500 text-center space-y-4">
          <p className="max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> Rise Broker Firm connects clients with financing lenders. Approval is not guaranteed and is subject to credit assessment. Interest rates and terms vary based on applicant qualifications.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Rise Broker Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};