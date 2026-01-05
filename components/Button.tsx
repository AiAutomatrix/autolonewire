import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineWhite';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-secondary hover:bg-secondaryLight focus:ring-secondary shadow-md hover:shadow-lg",
    secondary: "border-transparent text-slate-900 bg-accent hover:bg-yellow-400 focus:ring-accent",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-primary",
    outlineWhite: "border-white/80 text-white bg-transparent hover:bg-white/10 hover:border-white focus:ring-white/50 backdrop-blur-sm"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};