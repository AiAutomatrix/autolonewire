import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-slate-900';
  const subtitleColor = light ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl mx-auto text-xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};