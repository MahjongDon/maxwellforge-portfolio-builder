
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  animated?: boolean;
}

type ButtonElementProps = ButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>;
type AnchorElementProps = ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type CombinedButtonProps = ButtonElementProps | AnchorElementProps;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  animated = false,
  ...props
}: CombinedButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-revup-dark focus:ring-revup-red";
  
  const variants = {
    primary: "bg-revup-red hover:bg-opacity-90 text-white",
    secondary: "border-2 border-revup-red text-white hover:bg-revup-red/10",
    ghost: "text-white hover:bg-white/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Only apply the transform scale, remove the pulse animation
  const animation = animated ? "transform hover:scale-105" : "";

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    animation,
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        onClick={onClick}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
