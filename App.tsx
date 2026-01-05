import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProcessSection } from './components/ProcessSection';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <BookingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;