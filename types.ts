import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}