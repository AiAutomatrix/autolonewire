import React from 'react';
import { Truck, Car, Shield, Map } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="pt-10 pb-24 bg-surface border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Our Inventory
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              We Have It All
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Rise Broker Firm isn't limited to one lot. We source from a massive network of over 1,000 vehicles to find the perfect match for your lifestyle or business needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white border border-slate-100 shadow-sm text-secondary">
                    <Truck className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900">Trucks & Work Vehicles</h3>
                  <p className="mt-2 text-slate-600">
                    Heavy duty pickups, work vans, and fleet vehicles ready for the job site.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white border border-slate-100 shadow-sm text-secondary">
                    <Car className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900">SUVs & Cars</h3>
                  <p className="mt-2 text-slate-600">
                    From family SUVs to daily commuters, we access a wide variety of makes and models.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white border border-slate-100 shadow-sm text-secondary">
                    <Shield className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-slate-900">Total Protection</h3>
                  <p className="mt-2 text-slate-600">
                    Drive with peace of mind. We offer comprehensive aftermarket warranty coverage on our vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-2xl"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Rise Broker Firm Promise</h3>
              <ul className="space-y-5">
                {[
                  "Financing for All Credit Levels",
                  "Major Banks & 30+ Lenders",
                  "1,000+ Inventory Canada-Wide",
                  "Budget Friendly Options",
                  "90 Days No Payments Available",
                  "Aftermarket Warranty Coverage",
                  "Canada-Wide Delivery"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 text-lg">
                    <div className="mr-4 flex-shrink-0 bg-green-50 rounded-full p-1">
                      <Map className="h-5 w-5 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 italic">
                  *Delivery times vary by location. Financing subject to approved credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};